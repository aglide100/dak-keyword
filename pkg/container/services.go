package container

import (
	"context"
	"fmt"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/swarm"
)

func (c *Controller) CreateNewScraper(id string, keyword string) (err error) {
	ctx := context.Background()
	reader, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: id,
		},
		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
				Image: "ghcr.io/aglide100/dak-keyword-scraped:latest",
				// Command: '',
				Env: []string{"Keyword=" + keyword},
			},
		},
		// Networks: []swarm.NetworkAttachmentConfig{
			// 
		// },
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

func (c *Controller) RemoveScraper(id string) (err error) {
	ctx := context.Background()

	err = c.cli.ServiceRemove(ctx, id)
	if err != nil {
		return err
	}

	return nil
}

func (c *Controller) CreateNewAnalyzer(id string) (err error) {
	ctx := context.Background()

	max := uint64(1)
	
	reader, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: id,
		},
		TaskTemplate: swarm.TaskSpec{
			RestartPolicy: &swarm.RestartPolicy{
				MaxAttempts: &max,
				Condition: swarm.RestartPolicyConditionOnFailure,
			},
			
			Placement: &swarm.Placement{
				// Constraints: []string{""},
				MaxReplicas: 1,
			},		
			ContainerSpec: &swarm.ContainerSpec{
				Image: "ghcr.io/aglide100/lexicon-based-simple-korean-semantic-analyzer:latest",
				Command: []string{"Main.py"},
			},
		},
	}, types.ServiceCreateOptions{})
	
	if err != nil {
		return err
	}

	fmt.Println(reader.ID)
	return nil
}