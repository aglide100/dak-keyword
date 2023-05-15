package manager

import (
	"context"
	"log"

	pb_svc_manager_worker "github.com/aglide100/dak-keyword/pb/svc/manager/worker"
	pb_unit_worker "github.com/aglide100/dak-keyword/pb/unit/worker"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *ManagerSrv) GetWorkerList(ctx context.Context, in *pb_svc_manager_worker.GetWorkerListReq) (*pb_svc_manager_worker.GetWorkerListRes, error) {
	// if in != nil {
	// 	log.Printf("Received GetWorkerList call: %v", in.String())
	// }

	workerList, err := s.db.GetAllWorker(in.Id)
	if err != nil {
		log.Printf("Can't get workerlist! %v", err)
		return nil, status.Error(codes.Canceled, "Can't get Keyword")
	}

	var pbWorkers []*pb_unit_worker.Worker

	for _, value := range workerList {
		
		pbWorker := &pb_unit_worker.Worker{
			WorkerId: value.WorkerId,
			Keyword: value.Keyword,
			Status: value.Status,
			JobId: value.JobId,
			UpdateAt: value.UpdateAt,
		}
		// pbWorker := models.WorkerToPbUnit(value)
		pbWorkers = append(pbWorkers, pbWorker)
	}

	return &pb_svc_manager_worker.GetWorkerListRes{
		Worker: pbWorkers,
	}, nil
}


func (s *ManagerSrv) UpdateWorkerStatus(ctx context.Context, in *pb_svc_manager_worker.UpdateWorkerStatusReq) (*pb_svc_manager_worker.UpdateWorkerStatusRes, error) {
	// if in != nil {
	// 	log.Printf("Received UpdateWorkerStatus call: %v", in.String())
	// }

	err := s.db.UpdateWorker(in.Id, in.Msg)
	if err != nil {
		return nil,  status.Error(codes.NotFound, "Can't find job in dbms")
	}

	return &pb_svc_manager_worker.UpdateWorkerStatusRes{
	}, nil
}