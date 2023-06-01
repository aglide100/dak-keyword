package manager

import (
	"context"
	"log"

	pb_svc_manager_similarity "github.com/aglide100/dak-keyword/pb/svc/manager/similarity"
	calling "github.com/aglide100/dak-keyword/pkg/clients/provisioned"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

type SimilaritySrv interface {
	pb_svc_manager_similarity.SimilarityServiceServer
}

func (s *ManagerSrv) WhenStartSimilarity(ctx context.Context, in *pb_svc_manager_similarity.WhenStartSimilarityReq) (*pb_svc_manager_similarity.WhenStartSimilarityRes, error) {
	if in != nil {
		log.Printf("Received WhenStartSimilarity call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Scraping data from internets...")
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't start Similarity")
		return nil, status.Error(codes.Canceled, "Similarity having some error")
	}

	return &pb_svc_manager_similarity.WhenStartSimilarityRes{
		Result: "Similarity staring...!",
	}, nil
}

func (s *ManagerSrv) WhenSimilarityHavingErr(ctx context.Context, in *pb_svc_manager_similarity.WhenSimilarityHavingErrReq) (*pb_svc_manager_similarity.WhenSimilarityHavingErrRes, error) {
	if in != nil {
		log.Printf("Received WhenSimilarityHavingErr call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, "Similarity having some error.... " + in.GetMsg())
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't start Similarity")
		return nil, status.Error(codes.Canceled, "Similarity having some error")
	}

	return &pb_svc_manager_similarity.WhenSimilarityHavingErrRes{
	}, nil
}

func (s *ManagerSrv) WhenSimilarityHavingMsg(ctx context.Context, in *pb_svc_manager_similarity.WhenSimilarityHavingMsgReq) (*pb_svc_manager_similarity.WhenSimilarityHavingMsgRes, error) {
	if in != nil {
		log.Printf("Received WhenSimilarityHavingMsg call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.Id, in.GetMsg())
	if err != nil {
		s.db.UpdateJob(in.Id, "Can't process msg from Similarity")
		return nil, status.Error(codes.Canceled, "Similarity having some error")
	}

	return &pb_svc_manager_similarity.WhenSimilarityHavingMsgRes{
	}, nil
}

func (s *ManagerSrv) WhenDoneSimilarity(ctx context.Context, in *pb_svc_manager_similarity.WhenDoneSimilarityReq) (*pb_svc_manager_similarity.WhenDoneSimilarityRes, error) {
	if in != nil {
		log.Printf("Received DoneSimilarity call: %v", in.String())
	}

	err := s.db.UpdateWorker(in.WorkerId, "Similarity Done. Creating Analyzer")
	if err != nil {
		s.db.UpdateJob(in.WorkerId, "Can't remove Snalyzer")
		return nil, status.Error(codes.Canceled, "Similarity having some error")
	}

	err = calling.CallRemoveSimilarity(in.WorkerId)
	if err != nil {
		s.db.UpdateJob(in.WorkerId, "Can't remove Similarity")
		return nil, status.Error(codes.Canceled, "Can't remove Similarity")
	}

	err = calling.CallMakeAnalysis(in.WorkerId, in.JobId)
	if err != nil {
		s.db.UpdateJob(in.WorkerId, "Can't make analysis")
		return nil, err
	}

	return &pb_svc_manager_similarity.WhenDoneSimilarityRes{
		Result: "Scraping is Done!",
	}, nil
}

