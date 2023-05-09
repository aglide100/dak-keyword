package manager

import (
	"context"
	"log"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	calling "github.com/aglide100/dak-keyword/pkg/clients/provisioned"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *ManagerSrv) WhenStartScraper(ctx context.Context, in *pb_svc_manager.WhenStartScraperReq) (*pb_svc_manager.WhenStartScraperRes, error) {
	if in != nil {
		log.Printf("Received WhenStartScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraping data from internets...")
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't start Scraper")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	return &pb_svc_manager.WhenStartScraperRes{
		Result: "Scraper staring...!",
	}, nil
}

func (s *ManagerSrv) WhenScraperHavingErr(ctx context.Context, in *pb_svc_manager.WhenScraperHavingErrReq) (*pb_svc_manager.WhenScraperHavingErrRes, error) {
	if in != nil {
		log.Printf("Received WhenScraperHavingErr call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraper having some error.... " + in.GetMsg())
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't start Scraper")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	return &pb_svc_manager.WhenScraperHavingErrRes{
	}, nil
}


func (s *ManagerSrv) WhenDoneScraper(ctx context.Context, in *pb_svc_manager.WhenDoneScraperReq) (*pb_svc_manager.WhenDoneScraperRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraper Done. Creating Analyzer")
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't remove Snalyzer")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	err = calling.CallRemoveScraper(in.Id)
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't remove Scraper")
		return nil, status.Error(codes.Canceled, "Can't remove Scraper")
	}

	err = calling.CallMakeAnalysis(in.Id)
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't make analysis")
		return nil, err
	}

	return &pb_svc_manager.WhenDoneScraperRes{
		Result: "Scraping is Done!",
	}, nil
}

