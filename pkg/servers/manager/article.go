package manager

import (
	"context"
	"log"

	pb_svc_manager_article "github.com/aglide100/dak-keyword/pb/svc/manager/article"
	pb_unit_article "github.com/aglide100/dak-keyword/pb/unit/article"
	"github.com/aglide100/dak-keyword/pkg/models"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

type ArticleSrv interface {
	pb_svc_manager_article.ArticleServiceServer
}

func (s *ManagerSrv) GetArticleList(ctx context.Context, in *pb_svc_manager_article.GetArticleListReq) (*pb_svc_manager_article.GetArticleListRes, error) {
	if in != nil {
		// p, _ := peer.FromContext(ctx)
		// log.Printf("Received GetArticleList call: %v , by : %v", in.String(), p.Addr.String())
	} else {
		return nil, status.Error(codes.InvalidArgument, "Can't find argument!")
	}

	articles, err := s.db.GetArticlesByJobID(in.Id)
	if err != nil {
		log.Printf("err %v", err)
		return nil, status.Error(codes.Internal, "Can't querying :" + err.Error())
	}

	var pbArticles []*pb_unit_article.Article

	for _, value := range articles {
		pbArticle := models.ArticleToPbUnit(value)
		pbArticles = append(pbArticles, pbArticle)
	}

	grpc.SendHeader(ctx, metadata.Pairs("Cache-Control", "private, max-age=5"))
	return &pb_svc_manager_article.GetArticleListRes{
		Article: pbArticles,
	}, nil
}

func (s *ManagerSrv) GetArticleCountByHour(ctx context.Context, in *pb_svc_manager_article.GetArticleCountByHourReq) (*pb_svc_manager_article.GetArticleCountByHourRes, error) {
	if in != nil {
		// p, _ := peer.FromContext(ctx)
		// log.Printf("Received GetArticleList call: %v , by : %v", in.String(), p.Addr.String())
	} else {
		return nil, status.Error(codes.InvalidArgument, "Can't find argument!")
	}

	articles, err := s.db.GetCountByHour(in.Id)
	if err != nil {
		log.Printf("err %v", err)
		return nil, status.Error(codes.Internal, "Can't querying :" + err.Error())
	}

	var pbArticles []*pb_unit_article.ArticleCount

	for _, value := range articles {
		pbArticle := models.ArticleCountToPbUnit(value)
		pbArticles = append(pbArticles, pbArticle)
	}

	grpc.SendHeader(ctx, metadata.Pairs("Cache-Control", "private, max-age=5"))
	return &pb_svc_manager_article.GetArticleCountByHourRes{
		ArticleCount: pbArticles,

	}, nil
}

func (s *ManagerSrv) GetArticleCountByDay(ctx context.Context, in *pb_svc_manager_article.GetArticleCountByDayReq) (*pb_svc_manager_article.GetArticleCountByDayRes, error) {
	if in != nil {
		// p, _ := peer.FromContext(ctx)
		// log.Printf("Received GetArticleList call: %v , by : %v", in.String(), p.Addr.String())
	} else {
		return nil, status.Error(codes.InvalidArgument, "Can't find argument!")
	}

	articles, err := s.db.GetCountByDay(in.Id)
	if err != nil {
		log.Printf("err %v", err)
		return nil, status.Error(codes.Internal, "Can't querying :" + err.Error())
	}

	var pbArticles []*pb_unit_article.ArticleCount

	for _, value := range articles {
		pbArticle := models.ArticleCountToPbUnit(value)
		pbArticles = append(pbArticles, pbArticle)
	}

	grpc.SendHeader(ctx, metadata.Pairs("Cache-Control", "private, max-age=5"))
	return &pb_svc_manager_article.GetArticleCountByDayRes{
		ArticleCount: pbArticles,

	}, nil
}