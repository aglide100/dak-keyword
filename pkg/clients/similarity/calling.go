package calling

import (
	"context"
	"log"
	"time"

	pb_svc_manager_similarity "github.com/aglide100/dak-keyword/pb/svc/manager/similarity"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)


func CallGrpcWhenSimilarityHavingErr(workerId string, errMSG string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager_similarity.NewSimilarityServiceClient(conn)

	in := &pb_svc_manager_similarity.WhenSimilarityHavingErrReq{
		Id: workerId,
		Msg: errMSG,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	res, err := client.WhenSimilarityHavingErr(ctx, in)

	if err != nil {
		log.Fatalf("err in CallGrpcWhenSimilarityHavingErr %v", err)
		return err
	}
	log.Printf("res %v", res)
	
	return nil
}

func CallGrpcWhenStaringSimilarity(workerId string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager_similarity.NewSimilarityServiceClient(conn)

	in := &pb_svc_manager_similarity.WhenStartSimilarityReq{
		Id: workerId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenStartSimilarity(ctx, in)

	if err != nil {
		log.Fatalf("err in CallGrpcWhenStaring %v", err)
		return err
	}
	
	return nil
}

func CallGrpcWhenDoneSimilarity(workerId string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}
	defer conn.Close()
	
	client := pb_svc_manager_similarity.NewSimilarityServiceClient(conn)

	in := &pb_svc_manager_similarity.WhenDoneSimilarityReq{
		Id: workerId,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenDoneSimilarity(ctx, in)

	if err != nil {
		log.Fatalf("err in CallGrpcWhenDone %v", err)
		return err
	}
	
	return nil
}

func CallSimilaritySendMsg(workerId string, msg string) error {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc server : %v", err)
		return err
	}

	defer conn.Close()

	client := pb_svc_manager_similarity.NewSimilarityServiceClient(conn)

	in := &pb_svc_manager_similarity.WhenSimilarityHavingMsgReq{
		Id: workerId,
		Msg: msg,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.WhenSimilarityHavingMsg(ctx, in)
	if err != nil {
		return err
	}

	return nil
}