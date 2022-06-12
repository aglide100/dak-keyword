package manager

import (
	"context"
	"log"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	pb_unit_worker "github.com/aglide100/dak-keyword/pb/unit/worker"
	"github.com/aglide100/dak-keyword/pkg/models"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *ManagerSrv) GetWorkerList(ctx context.Context, in *pb_svc_manager.GetWorkerListReq) (*pb_svc_manager.GetWorkerListRes, error) {
	if in != nil {
		log.Printf("Received GetWorkerList call: %v", in.String())
	}

	workerList, err := s.db.GetAllWorker(in.Id)
	if err != nil {
		log.Printf("Can't get workerlist! %v", err)
		return nil, status.Error(codes.Canceled, "Can't get Keyword")
	}

	var pbWorkers []*pb_unit_worker.Worker

	for _, value := range workerList {
		pbWorker := models.WorkerToPbUnit(value)
		pbWorkers = append(pbWorkers, pbWorker)
	}

	return &pb_svc_manager.GetWorkerListRes{
		Worker: pbWorkers,
	}, nil
}