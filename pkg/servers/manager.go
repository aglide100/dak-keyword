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
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
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
		return nil, status.Error(codes.Canceled, "Can't get Keyword")
	}

	log.Printf("%v",result)

	workerIdList := []string{}
	jobId := uuid.New().String()

	err = s.db.AddNewJob(jobId, in.Keyword, in.Owner)
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't create New job at dbms")
	}

	for _, value := range result {
		workerId := uuid.New().String()
		workerIdList = append(workerIdList, workerId)
		
		err := s.db.AddNewWorker(workerId, jobId, value, in.Keyword)
		if err != nil {
			log.Printf("err: %v", err)
		}

		err = callMakeScraper(workerId, jobId, value)
		if err != nil {
			log.Printf("err: %v", err)
		}
		log.Printf("%v %v",workerId ,value)
	}

	return &pb_svc_manager.CreateNewJobRes{
		Keyword: result,
		WorkerId: workerIdList,
		JobId : jobId,
	}, nil
} 

func (s *ManagerSrv) DoneScraper(ctx context.Context, in *pb_svc_manager.DoneScraperReq) (*pb_svc_manager.DoneScraperRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraper Done. Creating Analayzer")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	err = callRemoveScraper(in.Id)
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update remove scraper")
	}

	err = callMakeAnalaysis(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager.DoneScraperRes{
		Result: "Scraper Done!",
	}, nil
}

func (s *ManagerSrv) DoneAnalyzer(ctx context.Context, in *pb_svc_manager.DoneAnalyzerReq) (*pb_svc_manager.DoneAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Analyzer Done.")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	err = callRemoveAnalyzer(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager.DoneAnalyzerRes{
		Result: "Analyzer Done",
	}, nil
}

func (s *ManagerSrv) GetJobStatus(ctx context.Context, in *pb_svc_manager.GetJobStatusReq) (*pb_svc_manager.GetJobStatusRes, error) {
	if in != nil {
		log.Printf("Received GetJobStatus call: %v", in.String())
	}

	res, err := s.db.GetJob(in.Id)
	if err != nil {
		return nil,  status.Error(codes.NotFound, "Can't find job in dbms")
	}

	return &pb_svc_manager.GetJobStatusRes{
		Status: res.Status,
	}, nil
}

func (s *ManagerSrv) UpdateJobStatus(ctx context.Context, in *pb_svc_manager.UpdateJobStatusReq) (*pb_svc_manager.UpdateJobStatusRes, error) {
	if in != nil {
		log.Printf("Received GetJobStatus call: %v", in.String())
	}

	err := s.db.UpdateJob(in.Id, in.Status)
	if err != nil {
		return nil,  status.Error(codes.NotFound, "Can't find job in dbms")
	}

	return &pb_svc_manager.UpdateJobStatusRes{
		Result: "Update Job status!",
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

func callMakeScraper(workerId string, jobId string, keyword string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
	if err != nil {
		log.Fatalf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.CreateScraperReq{
		Keyword: keyword,
		WorkerId: workerId,
		JobId: jobId,
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
		log.Fatalf("Can't connect grpc server : %v", err)
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

func callRemoveAnalyzer(id string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Fatalf("Can't connect grpc servier : %v", err)
	}
	defer conn.Close()

	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.RemoveAnalyzerReq{
		Id: id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	res, err := client.RemoveAnalyzer(ctx, in)

	if err != nil {
		log.Fatalf("Can't receive anything! %v", err)
		return err
	}
	log.Printf("res %v", res)

	return nil
}