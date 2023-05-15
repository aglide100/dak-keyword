package manager

import (
	"context"
	"log"
	"os"

	pb_svc_manager_job "github.com/aglide100/dak-keyword/pb/svc/manager/job"
	pb_unit_job "github.com/aglide100/dak-keyword/pb/unit/job"
	calling "github.com/aglide100/dak-keyword/pkg/clients/provisioned"
	"github.com/aglide100/dak-keyword/pkg/keyword"
	"github.com/aglide100/dak-keyword/pkg/models"
	"github.com/google/uuid"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/peer"
	"google.golang.org/grpc/status"
)

func (s *ManagerSrv) CreateNewJob(ctx context.Context, in *pb_svc_manager_job.CreateNewJobReq) (*pb_svc_manager_job.CreateNewJobRes, error) {
	if in != nil {
		p, _ := peer.FromContext(ctx)
		log.Printf("Received CreateNewJob call: %v , by : %s", in.String(), p.Addr.String())
	}

	if (s.accessCode != in.AccessCode) {
		log.Printf("Wrong accessCode")
		return &pb_svc_manager_job.CreateNewJobRes{
			Msg: "Wrong code",
		}, status.Error(codes.PermissionDenied, "Wrong AccessCode")
	}

	result, err := keyword.GetKeywords(in.Keyword, "")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
		return nil, status.Error(codes.Canceled, "Can't get Keyword")
	}

	workerIdList := []string{}
	jobId := uuid.New().String()

	err = models.ValidateJob(models.Job{
		Keyword: in.Keyword,
		Owner: in.Owner,
	})
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't validate data")
	}

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

		err = calling.CallMakeScraper(workerId, jobId, value, os.Getenv("BearerToken"))
		if err != nil {
			log.Printf("err: %v", err)
		}
	}

	if (err != nil ) {
		return &pb_svc_manager_job.CreateNewJobRes{
			Msg: err.Error(),
		}, nil
	} else {
		return &pb_svc_manager_job.CreateNewJobRes{
			Msg: "Done",
		}, nil
	}
} 

func (s *ManagerSrv) GetJobStatus(ctx context.Context, in *pb_svc_manager_job.GetJobStatusReq) (*pb_svc_manager_job.GetJobStatusRes, error) {
	if in != nil {
		log.Printf("Received GetJobStatus call: %v", in.String())
	}

	res, err := s.db.GetJob(in.Id)
	if err != nil {
		return nil,  status.Error(codes.NotFound, "Can't find job in dbms")
	}

	return &pb_svc_manager_job.GetJobStatusRes{
		Status: res.Status,
	}, nil
}

func (s *ManagerSrv) ReRunJob(ctx context.Context, in *pb_svc_manager_job.ReRunJobReq) (*pb_svc_manager_job.ReRunJobRes, error) {
	if in != nil {
		log.Printf("Received ReRunJob call: %v", in.String())
	}

	if (s.accessCode != in.AccessCode) {
		log.Printf("Wrong accessCode")
		return &pb_svc_manager_job.ReRunJobRes{
			Msg: "Wrong code",
		}, status.Error(codes.PermissionDenied, "Wrong AccessCode")
	}


	err := s.db.UpdateScheduleJob(in.Id, in.Schedule)
	if err != nil {
		log.Println("Can't update job's AutoReRun :%v", err)
	}

	res, err := s.db.GetJob(in.Id)
	if err != nil {
		log.Println("err :%v", err)
		return nil,  status.Error(codes.NotFound, "Can't find job in dbms")
	}

	result, err := keyword.GetKeywords(res.Keyword, "")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
		return nil, status.Error(codes.Canceled, "Can't get Keyword")
	}

	workerIdList := []string{}

	for _, value := range result {
		workerId := uuid.New().String()
		workerIdList = append(workerIdList, workerId)
		
		err := s.db.AddNewWorker(workerId, in.Id, value)
		if err != nil {
			log.Printf("Can't add worker, err: %v", err)
		}

		err = calling.CallMakeScraper(workerId, in.Id, value, os.Getenv("BearerToken"))
		if err != nil {
			log.Printf("Can't make Scraper, err: %v", err)
		}
		// log.Printf("%v %v",workerId ,value)
	}

	if (err != nil ) {
		return &pb_svc_manager_job.ReRunJobRes{
			Msg: err.Error(),
		}, nil
	} else {
		return &pb_svc_manager_job.ReRunJobRes{
			Msg: "Done",
		}, nil
	}
}


func (s *ManagerSrv) UpdateJobStatus(ctx context.Context, in *pb_svc_manager_job.UpdateJobStatusReq) (*pb_svc_manager_job.UpdateJobStatusRes, error) {
	// if in != nil {
	// 	log.Printf("Received UpdateJobStatus call: %v", in.String())
	// }

	err := s.db.UpdateJob(in.Id, in.Status)
	if err != nil {
		log.Printf("err : %v", err)
		return nil, status.Error(codes.NotFound, "Can't find job in dbms")
	}

	return &pb_svc_manager_job.UpdateJobStatusRes{
		Result: "Update Job status!",
	}, nil
}


func (s *ManagerSrv) GetJobList(ctx context.Context, in *pb_svc_manager_job.GetJobListReq) (*pb_svc_manager_job.GetJobListRes, error) {
	// if in != nil {
	// 	p, _ := peer.FromContext(ctx)
	// 	log.Printf("Received GetJobList call by : %s", p.Addr.String())
	// }

	jobs, err := s.db.GetAllJob()
	if err != nil {
		log.Printf("err : %v", err)
		return nil, status.Error(codes.NotFound, "Can't find job in dbms")
	}

	var pbJobs []*pb_unit_job.Job

	for _, value := range jobs {
		pbJob := models.JobToPbUnit(value)
		pbJobs = append(pbJobs, pbJob)
	}

	return &pb_svc_manager_job.GetJobListRes{
		Job: pbJobs,
	}, nil
}

func (s *ManagerSrv) GetJobIsReRun(ctx context.Context, in *pb_svc_manager_job.GetJobIsReRunReq) (*pb_svc_manager_job.GetJobIsReRunRes, error) {
	// if in != nil {
	// 	p, _ := peer.FromContext(ctx)
	// 	log.Printf("Received GetJobList call by : %s", p.Addr.String())
	// }

	isReRun, err := s.db.GetJobIsReRun(in.Id)
	if err != nil {
		log.Printf("err : %v", err)
		return nil, status.Error(codes.NotFound, "Can't find job in dbms")
	}

	return &pb_svc_manager_job.GetJobIsReRunRes{
		Result: isReRun,
	}, nil
}