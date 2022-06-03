package container

import (
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
)


type VolumeMount struct {
	HostPath string
	Volume *types.Volume
}

type Container interface {
	BuildImage() error
	RunImage(respID string) error
	StopImage(respID string) error
	CreateNewScraper(id string, keyword string) error
	CreateNewAnalyzer(id string) error
	EnsureImage(image string) error
}

type Controller struct {
	cli *client.Client
	Container
}


func NewController() (C *Controller, err error) {
	c := new(Controller)
	c.cli, err = client.NewClientWithOpts(client.FromEnv)
	
	if err != nil {
		return nil, err
	}
	return c, nil
}