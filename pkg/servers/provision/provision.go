package provision

import (
	"context"
	"log"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"github.com/aglide100/dak-keyword/pkg/container"
)

type ProvisionSrv struct {
	pb_svc_provision.ProvisionServer
	c *container.Controller
	cQueue *container.ContainerQueue
	// dbConfig db.DBConfig
}

func NewProvisionServiceServer(containerCon *container.Controller, cQueue *container.ContainerQueue,) *ProvisionSrv {
	return &ProvisionSrv {
		c : containerCon,
		cQueue: cQueue,
		// dbConfig: dbConfig,
	}
}

func (s *ProvisionSrv) CreateScraper(ctx context.Context, in *pb_svc_provision.CreateScraperReq) (*pb_svc_provision.CreateScraperRes, error) {
	if in != nil {
		log.Printf("Received CreateScraper call: %v", in.String())
	}
	
	s.cQueue.Enqueue(&container.ContainerSpec{
		WorkerId: in.WorkerId,
		JobId: in.JobId,
		Keyword: in.Keyword,
		Type: "Scraper",
	})

	log.Println(s.cQueue.Len())

	// err, countErr := s.c.CreateScraperService(in.WorkerId, in.JobId, in.Keyword, &s.dbConfig)
	// if err != nil {
	// 	log.Printf("Can't create new scraper : %v", err)
	// 	return nil, err
	// }
	// log.Printf("Should be create new scraper, %v", in.String())

	// if countErr {
	// 	// log.Println("Add queue")
	// 	return &pb_svc_provision.CreateScraperRes{
	// 		Status: "Add queue",
	// 	}, nil
	// }

	return &pb_svc_provision.CreateScraperRes{
		Status: "Added in container queue",
	}, nil
}

func (s *ProvisionSrv) CreateAnalyzer(ctx context.Context, in *pb_svc_provision.CreateAnalyzerReq) (*pb_svc_provision.CreateAnalyzerRes, error) {
	// if in != nil {
	// 	log.Printf("Received CreateAnalyzer call: %v", in.String())
	// }

	s.cQueue.Enqueue(&container.ContainerSpec{
		WorkerId: in.ScraperId,
		Keyword: in.Keyword,
		Type: "Analyzer",
	})

	// err, countErr := s.c.CreateAnalyzerService(in.ScraperId, in.Keyword, &s.dbConfig)
	// if err != nil {
	// 	return nil, err
	// }

	// if (!countErr) {
	// 	return &pb_svc_provision.CreateAnalyzerRes{
	// 		Status: "added container queue",
	// 	}, nil
	// }

	return &pb_svc_provision.CreateAnalyzerRes{
		Status: "Done!",
	}, nil
}

func (s *ProvisionSrv) RemoveScraper(ctx context.Context, in *pb_svc_provision.RemoveScraperReq) (*pb_svc_provision.RemoveScraperRes, error) {
	err := s.c.RemoveScraper(in.Id)
	if err != nil {
		log.Printf("Received RemoveScraper but not removed call: %v", in.String())
		return nil, err
	}

	return &pb_svc_provision.RemoveScraperRes{}, nil
}

func (s *ProvisionSrv) RemoveAnalyzer(ctx context.Context, in *pb_svc_provision.RemoveAnalyzerReq) (*pb_svc_provision.RemoveAnalyzerRes, error) {
	err := s.c.RemoveAnalyzer(in.Id)
	if err != nil {
		log.Printf("Received RemoveAnalyzer but not removed call: %v", in.String())
		return nil, err
	}

	return &pb_svc_provision.RemoveAnalyzerRes{}, nil
}
