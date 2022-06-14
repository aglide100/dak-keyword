package container

import (
	"context"
	"fmt"
	"strconv"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/swarm"
)

// const nodeRole = "node.role == worker"

func (c *Controller) CreateNewScraper(workerId string, jobId string, keyword string, token string, dbConfig *db.DBConfig) (err error) {
	ctx := context.Background()
	c.cli.ImagePull(ctx, "ghcr.io/aglide100/dak-keyword-scraped:latest", types.ImagePullOptions{})

	reader, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: workerId,
		},
		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
					// Image: "scraped",
					Image: "ghcr.io/aglide100/dak-keyword-scraped:latest",
					// Command: '',
					Env: []string{
					"Keyword=" + keyword, 
					"DB_ADDR=" + dbConfig.Host,
					"DB_PORT=" + strconv.Itoa(dbConfig.Port),
					"DB_USER=" + dbConfig.User,
					"DB_PASSWORD=" + dbConfig.Password,
					"DB_NAME=" + dbConfig.Dbname,
					"WORKER_ID=" + workerId,
					"JOB_ID=" + jobId,
					"BearerToken=" + token,
				},
			},

			Networks: []swarm.NetworkAttachmentConfig{
				swarm.NetworkAttachmentConfig{
					Target: "keyword_keyword_net",
				},
			},

			// Placement: &swarm.Placement{
			// 	Constraints: []string{nodeRole},
			// },
		},
	}, types.ServiceCreateOptions{
		
	})
	if err != nil {
		return err
	}

	fmt.Println(reader.ID)
	return nil
}

func (c *Controller) RemoveScraper(id string) (error) {
	ctx := context.Background()

	err := c.cli.ServiceRemove(ctx, id)
	if err != nil {
		return err
	}

	return nil
}