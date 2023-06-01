package manager

import (
	"context"
	"log"

	pb_svc_manager_scraper "github.com/aglide100/dak-keyword/pb/svc/manager/scraper"
	calling "github.com/aglide100/dak-keyword/pkg/clients/provisioned"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type ScraperSrv interface {
	pb_svc_manager_scraper.ScraperServiceServer
}

func (s *ManagerSrv) WhenStartScraper(ctx context.Context, in *pb_svc_manager_scraper.WhenStartScraperReq) (*pb_svc_manager_scraper.WhenStartScraperRes, error) {
	if in != nil {
		log.Printf("Received WhenStartScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraping data from internets...")
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't start Scraper")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	return &pb_svc_manager_scraper.WhenStartScraperRes{
		Result: "Scraper staring...!",
	}, nil
}

func (s *ManagerSrv) WhenScraperHavingErr(ctx context.Context, in *pb_svc_manager_scraper.WhenScraperHavingErrReq) (*pb_svc_manager_scraper.WhenScraperHavingErrRes, error) {
	if in != nil {
		log.Printf("Received WhenScraperHavingErr call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraper having some error.... " + in.GetMsg())
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't start Scraper")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	return &pb_svc_manager_scraper.WhenScraperHavingErrRes{
	}, nil
}


func (s *ManagerSrv) WhenScraperHavingMsg(ctx context.Context, in *pb_svc_manager_scraper.WhenScraperHavingMsgReq) (*pb_svc_manager_scraper.WhenScraperHavingMsgRes, error) {
	if in != nil {
		log.Printf("Received WhenScraperHavingMsg call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, in.GetMsg())
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't process msg from Scraper")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	return &pb_svc_manager_scraper.WhenScraperHavingMsgRes{
	}, nil
}



func (s *ManagerSrv) WhenDoneScraper(ctx context.Context, in *pb_svc_manager_scraper.WhenDoneScraperReq) (*pb_svc_manager_scraper.WhenDoneScraperRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.WorkerId, "Scraper is done. Creating Analyzer")
	if err != nil {
		s.db.UpdateJob(in.WorkerId, "Can't remove Snalyzer")
		return nil, status.Error(codes.Canceled, "Scraper having some error")
	}

	err = calling.CallRemoveScraper(in.WorkerId)
	if err != nil {
		s.db.UpdateJob(in.WorkerId, "Can't remove Scraper")
		return nil, status.Error(codes.Canceled, "Can't remove Scraper")
	}

	err = calling.CallMakeAnalysis(in.WorkerId, in.JobId)
	if err != nil {
		s.db.UpdateJob(in.WorkerId, "Can't make analysis")
		return nil, err
	}

	return &pb_svc_manager_scraper.WhenDoneScraperRes{
		Result: "Scraper is done",
	}, nil
}

