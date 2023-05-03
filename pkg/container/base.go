package container

import (
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/client"
)

type Container interface {
	BuildImage() error
	RunImage(respID string) error
	StopImage(respID string) error
	CreateNewScraper(workerId string, jobId string, keyword string, dbConfig *db.DBConfig) error
	CreateNewAnalyzer(workerId string, keyword string, dbConfig *db.DBConfig) error
	CreateNewSimilarity(workerId string, dbConfig *db.DBConfig) error
	EnsureImage(image string) error
	RemoveScraper(id string) error
	RemoveAnalyzer(id string) error
}

type Controller struct {
	cli *client.Client
	containerMaximum int
	twitterToken string
	cQueue *ContainerQueue
	Container
}

func NewController( cQueue *ContainerQueue, twitterToken string) (controller *Controller, err error) {
	newController := new(Controller)
	newController.cli, err = client.NewClientWithOpts(client.FromEnv)

	newController.twitterToken = twitterToken
	newController.cQueue = cQueue

	if err != nil {
		return nil, err
	}
	return newController, nil
}

