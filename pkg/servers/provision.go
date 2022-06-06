package servers

import (
	"context"
	"log"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"github.com/aglide100/dak-keyword/pkg/container"
)

type ProvisionSrv struct {
	pb_svc_provision.ProvisionServer
	c *container.Controller
}

func NewProvisionServiceServer(containerCon *container.Controller) *ProvisionSrv {
	return &ProvisionSrv {
		c : containerCon,
	}
}

func (s *ProvisionSrv) CreateScraper(ctx context.Context, in *pb_svc_provision.CreateScraperReq) (*pb_svc_provision.CreateScraperRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}
	
	err := s.c.CreateNewScraper(in.Id, in.Keyword)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.CreateScraperRes{}, nil
}

func (s *ProvisionSrv) CreateAnalyzer(ctx context.Context, in *pb_svc_provision.CreateAnalyzerReq) (*pb_svc_provision.CreateAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}

	err := s.c.CreateNewAnalyzer(in.ScraperId)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.CreateAnalyzerRes{}, nil
}

func (s *ProvisionSrv) RemoveScraper(ctx context.Context, in *pb_svc_provision.RemoveScraperReq) (*pb_svc_provision.RemoveScraperRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}

	err := s.c.RemoveScraper(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.RemoveScraperRes{}, nil
}