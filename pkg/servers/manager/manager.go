package manager

import (
	"flag"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"

	"github.com/aglide100/dak-keyword/pkg/db"
)

type ManagerSrv struct {
	pb_svc_manager.ManagerServer
	db *db.Database
	accessCode string
}

func NewManagerServiceServer(db *db.Database, accessCode string) *ManagerSrv {
	return &ManagerSrv{
		db: db,
		accessCode : accessCode,
	}
}

var (
	addr = flag.String("provision addr", "keyword_provisioned:50012", "the address to connect to")
)
