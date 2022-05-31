package servers

import (
	"context"
	"log"

	pb_svc "github.com/aglide100/dak-keyword/pb/svc"
	"github.com/aglide100/dak-keyword/pkg/keyword"
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

	result, err := keyword.GetKeywords(in.Keyword, "")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
	}

	log.Printf("%v",result)

	
	return &pb_svc.CreateNewJobRes{

	}, nil
} 
