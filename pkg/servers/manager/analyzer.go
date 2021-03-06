package manager

import (
	"context"
	"log"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
)

func (s *ManagerSrv) DoneAnalyzer(ctx context.Context, in *pb_svc_manager.DoneAnalyzerReq) (*pb_svc_manager.DoneAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Analyzer Done.")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}


	err = callRemoveAnalyzer(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager.DoneAnalyzerRes{
		Result: "Analyzer Done",
	}, nil
}
