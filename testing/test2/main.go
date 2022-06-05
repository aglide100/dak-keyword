package main

import (
	"context"
	"flag"
	"log"
	"time"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	addr = flag.String("addr", "0.0.0.0:50012", "the address to connect to")
)

func main() {
	log.Printf("starting testing ! at %s", *addr)

	conn, err := grpc.Dial("0.0.0.0:50012", grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	// conn, err := grpc.DialContext(ctx ,address, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	// ctx, cancel := context.WithTimeout(context.TODO(), time.Second)
	// defer cancel()
	// str := &pb_runner.Runner{

	// }
	in := &pb_svc_provision.CreateAnalyzerReq{
		Id: "test",
	}
	
	// in := &pb_svc_provision.GetRunnerReq{
	// 	Runner: str,
	// }
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	res, err := client.CreateAnalyzer(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
	}
	log.Printf("res %v", res)

}