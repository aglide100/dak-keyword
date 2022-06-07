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
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/servers"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

var (
	apidGrpcWebAddr = flag.String("apid grpc-web addr", "0.0.0.0:50011", "grpc-web address")
	apidGrpcAddr = flag.String("apid grpc addr", "0.0.0.0:50010", "grpc address")
	usingTls = flag.Bool("grpc.tls", false, "using http2")
	serverCrt = flag.String("cert.crt", "keys/server.crt", "crt file location")
	serverKey = flag.String("cert.key", "keys/server.key", "ket file location")
)

func main() {
	if err := realMain(); err != nil {
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
	
	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx
	
	var opts []grpc.ServerOption

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

	managerSrv := servers.NewManagerServiceServer(myDB)
	grpcServer := grpc.NewServer(opts...)

	pb_svc_manager.RegisterManagerServer(grpcServer, managerSrv)

	wg.Go(func() error {
		log.Printf("Starting normal grpcServer at: %s" ,*apidGrpcAddr)
		err := grpcServer.Serve(gRPCL)
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

		// if *usingTls { 
			// 		err = http.ServeTLS(provisionedAddrL, handler, *serverCrt , *serverKey)
			// 	} else {
			// 		log.Println("starting without tls....")
			// 		err = http.Serve(provisionedAddrL, handler)
			// 	}

		log.Printf("Start grpc-web server at %v", *apidGrpcWebAddr)
		err := http.Serve(gRPCWebL, handler)
		if err != nil {
			return nil
		}
		
		return nil
	})

	return wg.Wait()
}