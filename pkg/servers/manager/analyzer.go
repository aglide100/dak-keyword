package manager

import (
	"context"
	"log"

	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	pb_svc_manager_analyzer "github.com/aglide100/dak-keyword/pb/svc/manager/analyzer"
	calling "github.com/aglide100/dak-keyword/pkg/clients/provisioned"
)

type AnalyzerSrv interface {
	pb_svc_manager_analyzer.AnalyzerServiceServer
}

func (s *ManagerSrv) WhenStartAnalyzer(ctx context.Context, in *pb_svc_manager_analyzer.WhenStartAnalyzerReq) (*pb_svc_manager_analyzer.WhenStartAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received WhenStartAnalyzer call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Analyze words...")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	return &pb_svc_manager_analyzer.WhenStartAnalyzerRes{
		Result: "Analyzer staring...!",
	}, nil
}

func (s *ManagerSrv) WhenAnalyzerHavingErr(ctx context.Context, in *pb_svc_manager_analyzer.WhenAnalyzerHavingErrReq) (*pb_svc_manager_analyzer.WhenAnalyzerHavingErrRes, error) {
	if in != nil {
		log.Printf("Received WhenAnalyzerHavingErr call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Analyzer having err..." + in.GetMsg())
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	err = calling.CallRemoveAnalyzer(in.Id)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager_analyzer.WhenAnalyzerHavingErrRes{
	}, nil
}

func (s *ManagerSrv) WhenAnalyzerHavingMsg(ctx context.Context, in *pb_svc_manager_analyzer.WhenAnalyzerHavingMsgReq) (*pb_svc_manager_analyzer.WhenAnalyzerHavingMsgRes, error) {
	if in != nil {
		log.Printf("Received WhenAnalyzerHavingMsg call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, in.GetMsg())
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	return &pb_svc_manager_analyzer.WhenAnalyzerHavingMsgRes{
	}, nil
}


func (s *ManagerSrv) WhenDoneAnalyzer(ctx context.Context, in *pb_svc_manager_analyzer.WhenDoneAnalyzerReq) (*pb_svc_manager_analyzer.WhenDoneAnalyzerRes, error) {
	if in != nil {
		log.Printf("Received DoneScraper call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.WorkerId, "Analyzer Done.")
	if err != nil {
		return nil, status.Error(codes.Canceled, "Can't update worker status at dbms")
	}

	err = calling.CallRemoveAnalyzer(in.WorkerId)
	if err != nil {
		return nil, err
	}

	err = calling.CallMakeSimilarity(in.WorkerId, in.JobId)
	if err != nil {
		return nil, err
	}

	return &pb_svc_manager_analyzer.WhenDoneAnalyzerRes{
		Result: "Analyzer Done",
	}, nil
}
