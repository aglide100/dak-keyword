package manager

import (
	"context"
	"log"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	pb_unit_job "github.com/aglide100/dak-keyword/pb/unit/job"
	"github.com/aglide100/dak-keyword/pkg/keyword"
	"github.com/aglide100/dak-keyword/pkg/models"
	"github.com/google/uuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
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
		
		err := s.db.AddNewWorker(workerId, jobId, value)
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


func (s *ManagerSrv) GetJobList(ctx context.Context, in *pb_svc_manager.GetJobListReq) (*pb_svc_manager.GetJobListRes, error) {
	if in != nil {
		log.Printf("Received GetJobStatus call: %v", in.String())
	}

	jobs, err := s.db.GetAllJob()
	if err != nil {
		return nil,  status.Error(codes.NotFound, "Can't find job in dbms")
	}

	var pbJobs []*pb_unit_job.Job

	for _, value := range jobs {
		pbJob := models.JobToPbUnit(value)
		pbJobs = append(pbJobs, pbJob)
	}
	
	log.Printf("%v", jobs)

	return &pb_svc_manager.GetJobListRes{
		Job: pbJobs,
	}, nil
}