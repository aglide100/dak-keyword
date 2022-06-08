package servers

import (
	pb_svc "github.com/aglide100/dak-keyword/pb/svc/analyzer"

	"github.com/aglide100/dak-keyword/pkg/db"
)

type AnalyzerSrv struct {
	pb_svc.AnalyzerServer
	db *db.Database
}

func NewAnalyzerServiceServer(db *db.Database) *AnalyzerSrv {
	return &AnalyzerSrv{
		db: db,
	}
}
