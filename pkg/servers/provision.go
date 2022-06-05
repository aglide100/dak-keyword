package servers

import (
	"context"
	"log"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"github.com/aglide100/dak-keyword/pkg/container"
)

type ProvisionSrv struct {
	pb_svc_provision.UnimplementedProvisionServer
}

func NewProvisionServiceServer() *ProvisionSrv {
	return &ProvisionSrv {}
}

func (s *ProvisionSrv) CreateNewScraper(ctx context.Context, in *pb_svc_provision.CreateScraperReq) (*pb_svc_provision.CreateScraperRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}
	
	return &pb_svc_provision.CreateScraperRes{}, nil
}

func (s *ProvisionSrv) CreateAnalyzer(ctx context.Context, in *pb_svc_provision.CreateAnalyzerReq) (*pb_svc_provision.CreateAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}
	c, err := container.NewController()
	if err != nil {
		return nil, err
	}

	err = c.CreateNewAnalyzer(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.CreateAnalyzerRes{}, nil
}
