package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"os"
	"strconv"
	"sync"

	"context"

	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"

	"github.com/aglide100/dak-keyword/pkg/container"
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/servers/provision"
)

var (
	provisionedAddr = flag.String("provision grpc addr", "0.0.0.0:50012", "grpc address")
)

func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%v", err)
		os.Exit(1)
	}
}

func realMain() error {
	flag.Parse()
	provisionedL, err := net.Listen("tcp", fmt.Sprintf("%s", *provisionedAddr))
	if err != nil {
		return err
	}
	defer provisionedL.Close()

	var wait sync.WaitGroup
    wait.Add(1)
 
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

	grpcServer := grpc.NewServer(opts...)
	c, err := container.NewController()
	if err != nil {
		return err
	}

	dbConfig := &db.DBConfig{
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

	provisionSrv := provision.NewProvisionServiceServer(c, *dbConfig)

	pb_svc_provision.RegisterProvisionServer(grpcServer, provisionSrv)

	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx

	wg.Go(func() error {
		log.Printf("Starting normal grpcServer at: %s" ,*provisionedAddr)
		err := grpcServer.Serve(provisionedL)
		if err != nil {
			log.Fatalf("failed to serve: %v", err)
			return err
		}

		return nil
	})

	return wg.Wait()
}
