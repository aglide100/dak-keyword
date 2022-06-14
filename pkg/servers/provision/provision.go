package provision

import (
	"context"
	"log"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"github.com/aglide100/dak-keyword/pkg/container"
	"github.com/aglide100/dak-keyword/pkg/db"
)

type ProvisionSrv struct {
	pb_svc_provision.ProvisionServer
	c *container.Controller
	dbConfig db.DBConfig
}

func NewProvisionServiceServer(containerCon *container.Controller, dbConfig db.DBConfig) *ProvisionSrv {
	return &ProvisionSrv {
		c : containerCon,
		dbConfig: dbConfig,
	}
}

func (s *ProvisionSrv) CreateScraper(ctx context.Context, in *pb_svc_provision.CreateScraperReq) (*pb_svc_provision.CreateScraperRes, error) {
	if in != nil {
		log.Printf("Received CreateScraper call: %v", in.String())
	}
	
	err := s.c.CreateNewScraper(in.WorkerId, in.JobId, in.Keyword, in.Token, &s.dbConfig)
	if err != nil {
		log.Printf("Can't create new scraper : %v", err)
		return nil, err
	}

	return &pb_svc_provision.CreateScraperRes{
		Status: "Done!",
	}, nil
}

func (s *ProvisionSrv) CreateAnalyzer(ctx context.Context, in *pb_svc_provision.CreateAnalyzerReq) (*pb_svc_provision.CreateAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received CreateAnalyzer call: %v", in.String())
	}

	err := s.c.CreateNewAnalyzer(in.ScraperId, in.Keyword, &s.dbConfig)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.CreateAnalyzerRes{
		Status: "Done!",
	}, nil
}

func (s *ProvisionSrv) RemoveScraper(ctx context.Context, in *pb_svc_provision.RemoveScraperReq) (*pb_svc_provision.RemoveScraperRes, error) {
	if in != nil {
		log.Printf("Received RemoveScraper call: %v", in.String())
	}

	err := s.c.RemoveScraper(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.RemoveScraperRes{}, nil
}

func (s *ProvisionSrv) RemoveAnalyzer(ctx context.Context, in *pb_svc_provision.RemoveAnalyzerReq) (*pb_svc_provision.RemoveAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received RemoveAnalyzer but not removed call: %v", in.String())
	}

	err := s.c.RemoveAnalyzer(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_provision.RemoveAnalyzerRes{}, nil
}
