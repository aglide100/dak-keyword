package manager

import (
	"context"
	"log"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
)


func (s *ManagerSrv) WhenStartAnalyzer(ctx context.Context, in *pb_svc_manager.WhenStartAnalyzerReq) (*pb_svc_manager.WhenStartAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received WhenStartAnalyzer call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Analyze words...")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	return &pb_svc_manager.WhenStartAnalyzerRes{
		Result: "Analyzer staring...!",
	}, nil
}

func (s *ManagerSrv) WhenAnalyzerHavingErr(ctx context.Context, in *pb_svc_manager.WhenAnalyzerHavingErrReq) (*pb_svc_manager.WhenAnalyzerHavingErrRes, error) {
	if in != nil {
		log.Printf("Received WhenAnalyzerHavingErr call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Analyzer having err..." + in.GetMsg())
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	err = callRemoveAnalyzer(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager.WhenAnalyzerHavingErrRes{
	}, nil
}



func (s *ManagerSrv) WhenDoneAnalyzer(ctx context.Context, in *pb_svc_manager.WhenDoneAnalyzerReq) (*pb_svc_manager.WhenDoneAnalyzerRes, error) {
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

	return &pb_svc_manager.WhenDoneAnalyzerRes{
		Result: "Analyzer Done",
	}, nil
}
