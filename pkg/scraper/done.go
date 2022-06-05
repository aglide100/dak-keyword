package scraper

import (
	"context"
	"flag"
	"log"
	"time"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	addr = flag.String("addr", "0.0.0.0:50011", "the address to connect to")
)

func CallGrpcCallDone() error {
	log.Printf("call apid at %s", *addr)

	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager.NewManagerClient(conn)

	in := &pb_svc_manager.DoneScraperReq{
		
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