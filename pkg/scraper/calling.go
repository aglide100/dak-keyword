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
	addr = flag.String("addr", "keyword_apid:50010", "the address to connect to")
)

func CallGrpcCallWhenScraperHavingErr(workerId string, errMSG string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager.NewManagerClient(conn)

	in := &pb_svc_manager.WhenScraperHavingErrReq{
		Id: workerId,
		Msg: errMSG,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	res, err := client.WhenScraperHavingErr(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	log.Printf("res %v", res)
	
	return nil
}



func CallGrpcCallWhenStaring(workerId string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager.NewManagerClient(conn)

	in := &pb_svc_manager.WhenStartScraperReq{
		Id: workerId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenStartScraper(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	
	return nil
}

func CallGrpcCallWhenDone(workerId string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager.NewManagerClient(conn)

	in := &pb_svc_manager.WhenDoneScraperReq{
		Id: workerId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenDoneScraper(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	
	return nil
}

func CallGrpcCallUpdateJob(workerId string, status string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
		return err
	}

	defer conn.Close()

	client := pb_svc_manager.NewManagerClient(conn)

	in := &pb_svc_manager.UpdateJobStatusReq{
		Id: workerId,
		Status: status,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.UpdateJobStatus(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}

	return nil
}