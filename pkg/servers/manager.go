package servers

import (
	"context"
	"flag"
	"log"
	"time"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/keyword"
	"github.com/google/uuid"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

type ManagerSrv struct {
	pb_svc_manager.ManagerServer
	db *db.Database
}

func NewManagerServiceServer(db *db.Database) *ManagerSrv {
	return &ManagerSrv{
		db: db,
	}
}

var (
	addr = flag.String("provision addr", "keyword_provisioned:50012", "the address to connect to")
)

func (s *ManagerSrv) CreateNewJob(ctx context.Context, in *pb_svc_manager.CreateNewJobReq) (*pb_svc_manager.CreateNewJobRes, error) {
	if in != nil {
		log.Printf("Received CreateNewJob call: %v", in.String())
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
		
		err := s.db.AddNewJob(id)
		if err != nil {
			log.Printf("err: %v", err)
		}

		err = callMakeScraper(id, value)
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

func (s *ManagerSrv) DoneScraper(ctx context.Context, in *pb_svc_manager.DoneScraperReq) (*pb_svc_manager.DoneScraperRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateJob(in.Id, "Done")
	if err != nil {
		return nil, err
	}

	err = callRemoveScraper(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager.DoneScraperRes{
		Status: "Done!",
	}, nil
} 


func callMakeAnalaysis(id string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
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
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
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

func callRemoveScraper(id string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.RemoveScraperReq{
		Id: id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	
	res, err := client.RemoveScraper(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	log.Printf("res %v", res)

	return nil
}