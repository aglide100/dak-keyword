package servers

import (
	"context"
	"log"

	// pb_runner "github.com/aglide100/dak-keyword/pb/runner"
	pb_svc "github.com/aglide100/dak-keyword/pb/svc"
	"github.com/aglide100/dak-keyword/pkg/runner/container"
)

type RunnerSrv struct {
	pb_svc.RunnerServer
}

func NewRunnerServiceServer() *RunnerSrv {
	return &RunnerSrv{}
}

func (s *RunnerSrv) GetRunner(ctx context.Context, in *pb_svc.GetRunnerReq) (*pb_svc.GetRunnerRes, error) {
	if in != nil {
		log.Printf("Received: %v", in.String())
	}
	// runner := &pb_runner.Runner{Spec: &pb_runner.Spec{

	// }}
	return &pb_svc.GetRunnerRes{}, nil
}

func (s *RunnerSrv) CreateRunner(ctx context.Context, in *pb_svc.CreateRunnerReq) (*pb_svc.CreateRunnerRes, error) {
	log.Printf("Create Runner Req")

	go container.RunSomeContainer()

	return &pb_svc.CreateRunnerRes{}, nil
} 