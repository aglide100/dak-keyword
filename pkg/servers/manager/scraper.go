package manager

import (
	"context"
	"log"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (s *ManagerSrv) DoneScraper(ctx context.Context, in *pb_svc_manager.DoneScraperReq) (*pb_svc_manager.DoneScraperRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraper Done. Creating Analayzer")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	err = callRemoveScraper(in.Id)
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update remove scraper")
	}

	err = callMakeAnalaysis(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager.DoneScraperRes{
		Result: "Scraper Done!",
	}, nil
}

