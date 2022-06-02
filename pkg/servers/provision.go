package servers

import (
	"context"
	"log"

	pb_svc "github.com/aglide100/dak-keyword/pb/svc"
)

type ProvisionSrv struct {
	pb_svc.ProvisionServer
}

func NewProvisionServiceServer() *ProvisionSrv {
	return &ProvisionSrv{}
}

func (s *ProvisionSrv) CreateNewScraper(ctx context.Context, in *pb_svc.CreateScraperReq) (*pb_svc.CreateScraperRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}
	
	return &pb_svc.CreateScraperRes{}, nil
}

func (s *ProvisionSrv) CreateAnalyzer(ctx context.Context, in *pb_svc.CreateAnalyzerReq) (*pb_svc.CreateAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}
	
	return &pb_svc.CreateAnalyzerRes{}, nil
}
