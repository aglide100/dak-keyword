package main

import (
	"context"
	"log"
	"time"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const (
	address = "0.0.0.0:50011"
)

func main() {
	log.Printf("starting testing !")


	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server %v", err)
	}
	defer conn.Close()
	
	log.Printf("aa")
	client := pb_svc_provision.NewProvisionClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	// str := &pb_runner.Runner{

	// }
	in := &pb_svc_provision.CreateAnalyzerReq{
		Id: "test",
	}
	
	// in := &pb_svc_provision.GetRunnerReq{
	// 	Runner: str,
	// }

	res, err := client.CreateAnalyzer(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
	}
	log.Printf("res %v", res)

}