package main

import (
	"context"
	"log"
	"time"

	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	pb_svc "github.com/aglide100/dak-keyword/pb/svc"
)

const (
	address = "0.0.0.0:50011"
)

func main() {
	log.Printf("starting testing !")

	// conn, err := grpc.Dial(address, grpc.WithTransportCredentials(), grpc.WithInsecure())
	conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server %v", err)
	}
	defer conn.Close()
	client := pb_svc.NewRunnerClient(conn)

	ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	defer cancel()
	// str := &pb_runner.Runner{

	// }
	in := &pb_svc.CreateRunnerReq{}
	
	// in := &pb_svc.GetRunnerReq{
	// 	Runner: str,
	// }

	res, err := client.CreateRunner(ctx, in)

	// res, err := client.GetRunner(ctx, in)
	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
	}
	log.Printf("res %v", res)
}