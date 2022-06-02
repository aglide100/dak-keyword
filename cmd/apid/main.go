package main

import (
	"context"
	"log"
	"net"
	"net/http"
	"os"

	pb_svc "github.com/aglide100/dak-keyword/pb/svc"
	"github.com/aglide100/dak-keyword/pkg/servers"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"
)

func main() {
	if err := realMain(); err != nil {
		log.Printf("err: %s", err)
		// log.Fatal(err)
		os.Exit(1)
	}
}

func realMain() error {
	gRPCWebAddrL, err := net.Listen("tcp", "0.0.0.0:10112")
	if err != nil {
		return err
	}
	defer gRPCWebAddrL.Close()
	
	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx
	var opts []grpc.ServerOption
	

	managerSrv := servers.NewManagerServiceServer()
	grpcServer := grpc.NewServer(opts...)

	pb_svc.RegisterManagerServer(grpcServer, managerSrv)

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

		log.Println("Start grpc server")
		err := http.Serve(gRPCWebAddrL, handler)
		if err != nil {
			return nil
		}
		return nil
	})

	return wg.Wait()
}