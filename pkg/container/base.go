package container

import (
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
)

type VolumeMount struct {
	HostPath string
	Volume   *types.Volume
}

type Container interface {
	BuildImage() error
	RunImage(respID string) error
	StopImage(respID string) error
	CreateNewScraper(workerId string, jobId string, keyword string, dbConfig *db.DBConfig) error
	CreateNewAnalyzer(workerId string, keyword string, dbConfig *db.DBConfig) error
	EnsureImage(image string) error
	RemoveScraper(id string) error
	RemoveAnalyzer(id string) error
	GetCurrentAnalyzerCount() int 
}

type Controller struct {
	cli *client.Client
	analyzerCount int
	analyzerMaxCount int
	cQueue *ContainerQueue
	Container
}

func NewController(maxAnalyzer int, cQueue *ContainerQueue) (C *Controller, err error) {
	c := new(Controller)
	c.cli, err = client.NewClientWithOpts(client.FromEnv)

	c.analyzerMaxCount = maxAnalyzer
	c.analyzerCount = 0
	c.cQueue = cQueue

	if err != nil {
		return nil, err
	}
	return c, nil
}
