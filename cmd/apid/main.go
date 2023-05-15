package main

import (
	"context"
	"flag"
	"fmt"
	"log"
	"net"
	"net/http"
	"os"
	"strconv"

	cron_svc "github.com/aglide100/dak-keyword/pkg/cron"
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/generate"
	"github.com/aglide100/dak-keyword/pkg/servers/manager"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/robfig/cron"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"

	pb_svc_manager_analyzer "github.com/aglide100/dak-keyword/pb/svc/manager/analyzer"
	pb_svc_manager_article "github.com/aglide100/dak-keyword/pb/svc/manager/article"
	pb_svc_manager_job "github.com/aglide100/dak-keyword/pb/svc/manager/job"
	pb_svc_manager_scraper "github.com/aglide100/dak-keyword/pb/svc/manager/scraper"
	pb_svc_manager_similarity "github.com/aglide100/dak-keyword/pb/svc/manager/similarity"
	pb_svc_manager_worker "github.com/aglide100/dak-keyword/pb/svc/manager/worker"
)

const (
    CronSpec = "0 0 3 * * *"
)

var (
	apidGrpcWebAddr = flag.String("apid grpc-web addr", "0.0.0.0:50011", "grpc-web address")
	apidGrpcAddr = flag.String("apid grpc addr", "0.0.0.0:50010", "grpc address")
	apidAnalyzerAddr = flag.String("apid analyzer addr", "0.0.0.0:50013", "gprc address")
	usingTls = flag.Bool("grpc.tls", false, "using http2")
	serverCrt = flag.String("cert.crt", "/run/secrets/crt-file", "crt file location")
	serverKey = flag.String("cert.key", "/run/secrets/key-file", "ket file location")
)

func main() {
	if err := realMain(); err != nil {
		flag.Parse()

		log.Printf("err: %s", err)
		// log.Fatal(err)
		os.Exit(1)
	}
}


func realMain() error {
	gRPCWebL, err := net.Listen("tcp", *apidGrpcWebAddr)
	if err != nil {
		return err
	}
	defer gRPCWebL.Close()

	gRPCL, err := net.Listen("tcp", *apidGrpcAddr)
	if err != nil {
		return err
	}
	defer gRPCL.Close()
	
	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx
	
	var opts []grpc.ServerOption

	checkTls := os.Getenv("TLS")

	if checkTls == "true" {
		flag.Set("grpc.tls", "true")
	}

	accessCode := os.Getenv("ACCESS_CODE")
	if len(accessCode) == 0 {
		str := generate.RandStringRunes(10)

		fmt.Println("Can't get accessCode, generate random one")
		fmt.Printf("generated : %s \n", str)
	
		accessCode = str
	} 

	dbAddr := os.Getenv("DB_ADDR")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPasswd := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	
	dbport, err := strconv.Atoi(dbPort)
	if err != nil {
		return fmt.Errorf("Can't read dbPort!: %v %v", dbPort, err)
	}
	
	config := &db.DBConfig{
		Host : dbAddr, 
		Port : dbport, 
		User : dbUser, 
		Password : dbPasswd, 
		Dbname : dbName, 
		Sslmode : "disable", 
		// Sslmode : "verify-full", 
		// Sslrootcert : "keys/ca.crt", 
		// Sslkey : "keys/client.key", 
		// Sslsert : "keys/client.crt", 
	}

	myDB, err := db.ConnectDB(config)
	if err != nil {
		return fmt.Errorf("Can't connect DB: %v", err)
	}

	tls := *usingTls
	if tls {
		fmt.Println("Using tls keys")

		creds, err := credentials.NewServerTLSFromFile(*serverCrt, *serverKey)
		if err != nil {
			log.Fatalf("fail to load creds: %v", err)
		}
		opts = append(opts, grpc.Creds(creds))
	}

	grpcServer := grpc.NewServer()
	grpcWebServer := grpc.NewServer(opts...)

	managerSrv := manager.NewManagerServiceServer(myDB, accessCode)
	
	// pb_svc_manager.RegisterManagerServer(grpcWebServer, managerSrv)

	pb_svc_manager_analyzer.RegisterAnalyzerServiceServer(grpcServer, managerSrv)
	pb_svc_manager_article.RegisterArticleServiceServer(grpcServer, managerSrv)
	pb_svc_manager_job.RegisterJobServiceServer(grpcServer, managerSrv)
	pb_svc_manager_scraper.RegisterScraperServiceServer(grpcServer, managerSrv)
	pb_svc_manager_similarity.RegisterSimilarityServiceServer(grpcServer, managerSrv)
	pb_svc_manager_worker.RegisterWorkerServiceServer(grpcServer, managerSrv)

	pb_svc_manager_article.RegisterArticleServiceServer(grpcWebServer, managerSrv)
	pb_svc_manager_job.RegisterJobServiceServer(grpcWebServer, managerSrv)
	pb_svc_manager_worker.RegisterWorkerServiceServer(grpcWebServer, managerSrv)
	pb_svc_manager_similarity.RegisterSimilarityServiceServer(grpcWebServer, managerSrv)
	
	// pb_svc_manager.RegisterManagerServer(grpcServer, managerSrv)

	wg.Go(func() error {
		log.Printf("Starting grpcWebServer at: %s" ,*apidGrpcAddr)
		err := grpcServer.Serve(gRPCL)
		if err != nil {
			log.Fatalf("failed to serve: %v", err)
			return err
		}

		return nil
	})


	wg.Go(func() error {
		// wrapped grpc srv
		wrappedServer := grpcweb.WrapServer(grpcWebServer, grpcweb.WithOriginFunc(func(origin string) bool {
			return true
		}))

		handler := http.Handler(http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
			if wrappedServer.IsGrpcWebRequest(req) || wrappedServer.IsAcceptableGrpcCorsRequest(req) {
				wrappedServer.ServeHTTP(resp, req)
			}
		}))

		httpServer := http.Server{
			Handler: handler,
		}
		log.Printf("Start grpc-web server at %v", *apidGrpcWebAddr)
		
		if *usingTls { 
			err = httpServer.ServeTLS(gRPCWebL, *serverCrt , *serverKey)
		} else {
			log.Println("starting without tls....")
			err = httpServer.Serve(gRPCWebL)
		}
		if err != nil {
			return nil
		}
		
		return nil
	})

	c := cron.New()
	c.AddFunc(CronSpec, func() {
		log.Printf("Starting rerun jobs")
		cron_svc.GetAllReRunJob(myDB)
	})

	c.Start()

	return wg.Wait()
}

