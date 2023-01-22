package manager

import (
	"context"
	"log"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	pb_unit_article "github.com/aglide100/dak-keyword/pb/unit/article"
	"github.com/aglide100/dak-keyword/pkg/models"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/peer"
	"google.golang.org/grpc/status"
)

func (s *ManagerSrv) GetArticleList(ctx context.Context, in *pb_svc_manager.GetArticleListReq) (*pb_svc_manager.GetArticleListRes, error) {
	if in != nil {
		p, _ := peer.FromContext(ctx)
		log.Printf("Received GetArticleList call: %v , by : %v", in.String(), p.Addr.String())
	} else {
		return nil, status.Error(codes.InvalidArgument, "Can't find argument!")
	}
	

	articles, err := s.db.GetArticles(in.Id)
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
	return &pb_svc_manager.GetArticleListRes{
		Article: pbArticles,

	}, nil
}