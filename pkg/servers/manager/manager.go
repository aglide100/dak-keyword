package manager

import (
	"flag"

	pb_svc_manager "github.com/aglide100/dak-keyword/pb/svc/manager"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"

	"github.com/aglide100/dak-keyword/pkg/db"
)

var (
	addr = flag.String("provision addr", "keyword_provisioned:50012", "the address to connect to")
	retryPolicy = `{
		"methodConfig": [{
		  "name": [{"service": "pb.svc.manager.Manager"}],
		  "waitForReady": true,
		  "retryPolicy": {
			  "MaxAttempts": 4,
			  "InitialBackoff": ".01s",
			  "MaxBackoff": ".01s",
			  "BackoffMultiplier": 1.0,
			  "RetryableStatusCodes": [ "UNAVAILABLE" ]
		  }
		}]}`
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

func retryDial() (*grpc.ClientConn, error) {
	return grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithDefaultServiceConfig(retryPolicy))
}


func Dial() (*grpc.ClientConn, error) {
	return grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())	
}