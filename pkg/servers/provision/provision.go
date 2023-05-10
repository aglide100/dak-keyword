package provision

import (
	"context"
	"log"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"github.com/aglide100/dak-keyword/pkg/config"
	"github.com/aglide100/dak-keyword/pkg/container"
	"github.com/aglide100/dak-keyword/pkg/db"
)

type ProvisionSrv struct {
	pb_svc_provision.ProvisionServer
	c *container.Controller
	cQueue *container.ContainerQueue
	dbConfig db.DBConfig
}

func NewProvisionServiceServer(containerCon *container.Controller, cQueue *container.ContainerQueue, dbConfig db.DBConfig) *ProvisionSrv {
	return &ProvisionSrv {
		c : containerCon,
		cQueue: cQueue,
		dbConfig: dbConfig,
	}
}

func (s *ProvisionSrv) CreateScraper(ctx context.Context, in *pb_svc_provision.CreateScraperReq) (*pb_svc_provision.CreateScraperRes, error) {
	// if in != nil {
	// 	log.Printf("Received CreateScraper call: %v", in.String())
	// }
	
	s.cQueue.EnqueueFromQueue(&container.ContainerSpec{
		WorkerId: in.WorkerId,
		JobId: in.JobId,
		Keyword: in.Keyword,
		Type: "Scraper",
		InjectString: config.GetInstance().GetTwitterBearerToken(),
	})

	return &pb_svc_provision.CreateScraperRes{
		Status: "Added in container queue",
	}, nil
}

func (s *ProvisionSrv) CreateAnalyzer(ctx context.Context, in *pb_svc_provision.CreateAnalyzerReq) (*pb_svc_provision.CreateAnalyzerRes, error) {
	s.cQueue.EnqueueFromQueue(&container.ContainerSpec{
		WorkerId: in.ScraperId,
		Keyword: in.Keyword,
		Type: "Analyzer",
	})

	return &pb_svc_provision.CreateAnalyzerRes{
		Status: "Added in container queue",
	}, nil
}

func (s *ProvisionSrv) RemoveScraper(ctx context.Context, in *pb_svc_provision.RemoveScraperReq) (*pb_svc_provision.RemoveScraperRes, error) {
	err := s.c.RemoveScraper(in.Id)
	if err != nil {
		log.Printf("Received RemoveScraper but not removed call: %v", in.String())
		return nil, err
	}

	return &pb_svc_provision.RemoveScraperRes{
		Status: "",
	}, nil
}

func (s *ProvisionSrv) RemoveAnalyzer(ctx context.Context, in *pb_svc_provision.RemoveAnalyzerReq) (*pb_svc_provision.RemoveAnalyzerRes, error) {
	err := s.c.RemoveAnalyzer(in.Id)
	if err != nil {
		log.Printf("Received RemoveAnalyzer but not removed call: %v", in.String())
		return nil, err
	}

	return &pb_svc_provision.RemoveAnalyzerRes{
		Status: "",
	}, nil
}
