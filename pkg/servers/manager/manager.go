package manager

import (
	"github.com/aglide100/dak-keyword/pkg/db"
)

type ManagerSrv struct {
	db *db.Database
	accessCode string
	JobSrv
	ArticleSrv
	AnalyzerSrv
	SimilaritySrv
	ScraperSrv
	WorkerSrv
}

func NewManagerServiceServer(db *db.Database, accessCode string) *ManagerSrv {
	return &ManagerSrv{
		db: db,
		accessCode : accessCode,
	}
}
