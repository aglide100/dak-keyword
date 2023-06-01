package calling

import (
	"context"
	"flag"
	"log"
	"time"

	pb_svc_manager_scraper "github.com/aglide100/dak-keyword/pb/svc/manager/scraper"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

var (
	addr = flag.String("apid addr", "keyword_apid:50010", "the address to connect to")
)

func CallGrpcWhenScraperHavingErr(workerId string, errMSG string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager_scraper.NewScraperServiceClient(conn)

	in := &pb_svc_manager_scraper.WhenScraperHavingErrReq{
		Id: workerId,
		Msg: errMSG,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	res, err := client.WhenScraperHavingErr(ctx, in)

	if err != nil {
		log.Fatalf("err in CallGrpcWhenScraperHavingErr %v", err)
		return err
	}
	log.Printf("res %v", res)
	
	return nil
}

func CallGrpcWhenStaring(workerId string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager_scraper.NewScraperServiceClient(conn)

	in := &pb_svc_manager_scraper.WhenStartScraperReq{
		Id: workerId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenStartScraper(ctx, in)

	if err != nil {
		log.Fatalf("err in CallGrpcWhenStaring %v", err)
		return err
	}
	
	return nil
}

func CallGrpcWhenDone(workerId, jobId string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager_scraper.NewScraperServiceClient(conn)

	in := &pb_svc_manager_scraper.WhenDoneScraperReq{
		WorkerId: workerId,
		JobId: jobId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenDoneScraper(ctx, in)

	if err != nil {
		log.Fatalf("err in CallGrpcWhenDone %v", err)
		return err
	}
	
	return nil
}

func CallSendMsg(workerId string, msg string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}

	defer conn.Close()

	client := pb_svc_manager_scraper.NewScraperServiceClient(conn)

	in := &pb_svc_manager_scraper.WhenScraperHavingMsgReq{
		Id: workerId,
		Msg: msg,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenScraperHavingMsg(ctx, in)
	if err != nil {
		return err
	}

	return nil
}