package servers

import (
	"context"
	"log"

	pb_svc "github.com/aglide100/dak-keyword/pb/svc"
)

type ManagerSrv struct {
	pb_svc.ManagerServer
}

func NewManagerServiceServer() *ManagerSrv {
	return &ManagerSrv{}
}

func (s *ManagerSrv) CreateNewJob(ctx context.Context, in *pb_svc.CreateNewJobReq) (*pb_svc.CreateNewJobRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}

	return &pb_svc.CreateNewJobRes{}, nil
} 
