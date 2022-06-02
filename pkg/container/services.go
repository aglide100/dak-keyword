package container

import (
	"context"
	"fmt"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/swarm"
)

func (c *Controller) CreateNewJobSVC(id string) (err error) {
	ctx := context.Background()
	reader, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: id,
		},
		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
				Image: "ghcr.io/aglide100/dak-keyword-scraped:latest",
				// Command: '',
				// Env: ,
			},
		},
		// EndpointSpec: &swarm.EndpointSpec{
			// Ports: []swarm.PortConfig{
				// swarm.PortConfig{
					// TargetPort: 5000,
					// PublishedPort: 5000,
					// Protocol: swarm.PortConfigProtocolTCP,
				// },
			// },
		// },
	}, types.ServiceCreateOptions{

	})
	if err != nil {
		return err
	}

	fmt.Println(reader.ID)
	return nil
}

