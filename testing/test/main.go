package main

import (
	// "context"
	"log"

	"github.com/aglide100/dak-keyword/pkg/models"
	// "time"
	// "google.golang.org/grpc"
	// "google.golang.org/grpc/credentials/insecure"
	// pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
)

const (
	address = "0.0.0.0:10112"
)

func main() {
	log.Printf("starting testing !")

	testJob := models.Job{
		Keyword: "alert('dfdsf');",
		Owner: "Test",
	}

	err := models.ValidateJob(testJob)
	if err != nil {
		log.Println("err :%v", err)
	}
	log.Println(testJob)

	err = models.ValidateArticle(&models.Article{
		Id: "1",
		Author: "3432432432",
		Keyword: "고양이",
		Content: "고양이 귀엽다",
		Platform: "tweet",
		Score_happy: "1",
		Score_fear: "1",
		Score_embarrassed: "1",
		Score_sad: "1",
		Score_rage: "1",
		Score_hurt: "1",
		Score_max_value: "1", 
		Score_max_name: "Happy",
		Create_at: "2023-01-11T04:00:10.000Z",
		Job_id: "fb3b3b7e-bec7-414e-a6ce-a25517b2e847",
		Worker_id: "4b02f881-2293-4840-ba10-5c5843a5d2e8",
	})

	if err != nil {
		log.Println(err)
	}
	// // conn, err := grpc.Dial(address, grpc.WithTransportCredentials(), grpc.WithInsecure())
	// conn, err := grpc.Dial(address, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	// if err != nil {
	// 	log.Fatalf("can't connect grpc server %v", err)
	// }
	// defer conn.Close()
	// client := pb_svc_manager.NewManagerClient(conn)

	// ctx, cancel := context.WithTimeout(context.Background(), time.Second)
	// defer cancel()
	// // str := &pb_runner.Runner{

	// // }
	// in := &pb_svc_manager.CreateNewJobReq{}
	
	// // in := &pb_svc_manager.GetRunnerReq{
	// // 	Runner: str,
	// // }

	// res, err := client.CreateNewJob(ctx, in)

	// // res, err := client.GetRunner(ctx, in)
	// if err != nil {
	// 	log.Fatalf("Can't receive anything! %v", err)
	// }
	// log.Printf("res %v", res)
}