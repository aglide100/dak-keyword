package main

import (
	"context"
	"flag"
	"log"
	"time"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

var (
	addr = flag.String("addr", "0.0.0.0:50010", "the address to connect to")
)

func main() {
	err := CallGrpcCallDone("03f034bf-f665-4c5d-9b56-e3193f1a995a")
	log.Printf("%v ", err)
}


func CallGrpcCallDone(workerId string) error {
	log.Printf("call apid at %s", *addr)

	// creds, err := credentials.NewClientTLSFromFile("../keys/server.key","")
	
	creds, err := credentials.NewClientTLSFromFile("./keys/server.crt","localhost")
	if err != nil {
		return err
	}

	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(creds), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager.NewManagerClient(conn)

	in := &pb_svc_manager.DoneScraperReq{
		Id: workerId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	res, err := client.DoneScraper(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	log.Printf("res %v", res)
	
	return nil
}