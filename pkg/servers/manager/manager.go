package manager

import (
	pb_svc_manager_analyzer "github.com/aglide100/dak-keyword/pb/svc/manager/analyzer"
	pb_svc_manager_article "github.com/aglide100/dak-keyword/pb/svc/manager/article"
	pb_svc_manager_job "github.com/aglide100/dak-keyword/pb/svc/manager/job"
	pb_svc_manager_scraper "github.com/aglide100/dak-keyword/pb/svc/manager/scraper"
	pb_svc_manager_similarity "github.com/aglide100/dak-keyword/pb/svc/manager/similarity"
	pb_svc_manager_worker "github.com/aglide100/dak-keyword/pb/svc/manager/worker"

	"github.com/aglide100/dak-keyword/pkg/db"
)

type ManagerSrv struct {
	pb_svc_manager_job.JobServiceServer
	pb_svc_manager_worker.WorkerServiceServer
	pb_svc_manager_similarity.SimilarityServiceServer
	pb_svc_manager_article.ArticleServiceServer
	pb_svc_manager_analyzer.AnalyzerServiceServer
	pb_svc_manager_scraper.ScraperServiceServer
	db *db.Database
	accessCode string
}

func NewManagerServiceServer(db *db.Database, accessCode string) *ManagerSrv {
	return &ManagerSrv{
		db: db,
		accessCode : accessCode,
	}
}
