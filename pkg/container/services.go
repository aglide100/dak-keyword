package container

import (
	"context"
	"fmt"
	"log"
	"strconv"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/swarm"
)

func (c *Controller) CreateNewScraper(id string, keyword string, dbConfig *db.DBConfig) (err error) {
	ctx := context.Background()
	c.cli.ImagePull(ctx, "ghcr.io/aglide100/dak-keyword-scraped:latest", types.ImagePullOptions{})

	log.Printf("%v", dbConfig)
	reader, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: id,
		},
		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
				Image: "ghcr.io/aglide100/dak-keyword-scraped:latest",
				// Command: '',
				Env: []string{"Keyword=" + keyword, 
				"DB_ADDR=" + dbConfig.Host,
				"DB_PORT=" + strconv.Itoa(dbConfig.Port),
				"DB_USER=" + dbConfig.User,
				"DB_PASSWORD=" + dbConfig.Password,
				"DB_NAME=" + dbConfig.Dbname,
				"ID=" + id,
			},

			},
			Networks: []swarm.NetworkAttachmentConfig{
				swarm.NetworkAttachmentConfig{
					Target: "keyword_keyword_net",
				},
			},
				Placement: &swarm.Placement{
				Constraints: []string{"node.role == worker"},
			},
		},
		// EndpointSpec: &swarm.EndpointSpec{
		// 	Ports: []swarm.PortConfig{
		// 		{
		// 			TargetPort: 5000,
		// 			PublishedPort: 5000,
		// 			Protocol: swarm.PortConfigProtocolTCP,
		// 		},
		// 	},
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

	c.cli.ImagePull(ctx, "ghcr.io/aglide100/lexicon-based-simple-korean-semantic-analyzer:latest", types.ImagePullOptions{})

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
			Networks: []swarm.NetworkAttachmentConfig{
				swarm.NetworkAttachmentConfig{
					Target: "keyword_keyword_net",
				},
			},
		},
	}, types.ServiceCreateOptions{})
	
	if err != nil {
		return err
	}

	fmt.Println(reader.ID)
	return nil
}