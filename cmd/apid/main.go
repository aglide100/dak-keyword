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

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	cron_svc "github.com/aglide100/dak-keyword/pkg/cron"
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/servers/manager"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"github.com/robfig/cron"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

const (
    CronSpec = "0 0 17 * * *"
)

var (
	apidGrpcWebAddr = flag.String("apid grpc-web addr", "0.0.0.0:50011", "grpc-web address")
	apidGrpcAddr = flag.String("apid grpc addr", "0.0.0.0:50010", "grpc address")
	apidAnalyzerAddr = flag.String("apid analyzer addr", "0.0.0.0:50013", "gprc address")
	usingTls = flag.Bool("grpc.tls", false, "using http2")
	serverCrt = flag.String("cert.crt", "/run/secrets/crt-file", "crt file location")
	serverKey = flag.String("cert.key", "/run/secrets/key-file", "ket file location")
	// serverCrt = flag.String("cert.crt", "../keys/server.crt", "crt file location")
	// serverKey = flag.String("cert.key", "../keys/server.key", "ket file location")
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
		fmt.Println("Can't get accessCode, using default one")
		accessCode = "HelloWOrld"
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

	grpcNonTlsServer := grpc.NewServer()
	grpcServer := grpc.NewServer(opts...)

	managerSrv := manager.NewManagerServiceServer(myDB, accessCode)
	
	pb_svc_manager.RegisterManagerServer(grpcServer, managerSrv)
	pb_svc_manager.RegisterManagerServer(grpcNonTlsServer, managerSrv)

	wg.Go(func() error {
		log.Printf("Starting normal grpcServer at: %s" ,*apidGrpcAddr)
		err := grpcNonTlsServer.Serve(gRPCL)
		if err != nil {
			log.Fatalf("failed to serve: %v", err)
			return err
		}

		return nil
	})


	wg.Go(func() error {
		// wrapped grpc srv
		wrappedServer := grpcweb.WrapServer(grpcServer, grpcweb.WithOriginFunc(func(origin string) bool {
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
		cron_svc.GetAllReRunJob(myDB)
	})

	c.Start()

	return wg.Wait()
}