package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"os"
	"sync"

	"context"

	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"

	"github.com/aglide100/dak-keyword/pkg/servers"
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
	provisionedAddrL, err := net.Listen("tcp", fmt.Sprintf("%s", *provisionedAddr))
	if err != nil {
		return err
	}
	defer provisionedAddrL.Close()

	var wait sync.WaitGroup
    wait.Add(1)
 
	var opts []grpc.ServerOption

	grpcServer := grpc.NewServer(opts...)
	provisionSrv := servers.NewProvisionServiceServer()

	pb_svc_provision.RegisterProvisionServer(grpcServer, provisionSrv)


	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx

	wg.Go(func() error {
		log.Printf("Starting normal grpcServer at: %s" ,*provisionedAddr)
		err := grpcServer.Serve(provisionedAddrL)
		if err != nil {
			log.Fatalf("failed to serve: %v", err)
			return err
		}

		return nil
	})

	return wg.Wait()
}
