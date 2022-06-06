package servers

import (
	"context"
	"flag"
	"log"
	"time"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"

	"github.com/aglide100/dak-keyword/pkg/keyword"
	"github.com/google/uuid"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type ManagerSrv struct {
	pb_svc_manager.ManagerServer
}

func NewManagerServiceServer() *ManagerSrv {
	return &ManagerSrv{}
}

var (
	addr = flag.String("provision addr", "0.0.0.0:50012", "the address to connect to")
)

func (s *ManagerSrv) CreateNewJob(ctx context.Context, in *pb_svc_manager.CreateNewJobReq) (*pb_svc_manager.CreateNewJobRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}

	result, err := keyword.GetKeywords(in.Keyword, "")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
	}

	log.Printf("%v",result)

	idList := []string{}
	jobId := uuid.New().String()

	for _, value := range result {
		id := uuid.New().String()
		idList = append(idList, id)
		err := callMakeScraper(id, value)
		if err != nil {
			log.Printf("err: %v", err)
		}
		log.Printf("%v %v",id ,value)
	}

	
	// callMakeScraper("test", "keas")
	return &pb_svc_manager.CreateNewJobRes{
		Keyword: result,
		ScraperId : idList,
		JobId : jobId,
	}, nil
} 

func callMakeAnalaysis(id string) (error) {
	conn, err := grpc.Dial("0.0.0.0:50012", grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.CreateAnalyzerReq{
		ScraperId: id,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	
	res, err := client.CreateAnalyzer(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	log.Printf("res %v", res)

	return nil
}

func callMakeScraper(id string, keyword string) (error) {
	conn, err := grpc.Dial("0.0.0.0:50012", grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.CreateScraperReq{
		Keyword: keyword,
		Id: id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	
	res, err := client.CreateScraper(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	log.Printf("res %v", res)

	return nil
}