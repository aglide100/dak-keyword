package container

import (
	"context"
	"log"
	"strconv"
	"strings"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/swarm"
)

// const nodeRole = "node.role == worker"

func (c *Controller) CreateSimilarityService(workerId string, jobId string, keyword string, dbConfig *db.DBConfig) (error, bool) {
	ctx := context.Background()

	if c.GetCurrentContainerCount() >= c.containerMaximum {
		log.Println("Too many container to create scraper container")
		c.cQueue.Enqueue(&ContainerSpec{
			WorkerId: workerId,
			Keyword: keyword,
			JobId: jobId,
			Token: c.twitterToken,
			Type: "Scraper",
		})
		return nil, true
    }

	c.cli.ImagePull(ctx, "ghcr.io/aglide100/dak-keyword--similarity:latest", types.ImagePullOptions{})

	_, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: "similarity_"+workerId,
		},
		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
					Image: "ghcr.io/aglide100/dak-keyword--similarity:latest",
					Env: []string{
					"Keyword=" + keyword, 
					"DB_ADDR=" + dbConfig.Host,
					"DB_PORT=" + strconv.Itoa(dbConfig.Port),
					"DB_USER=" + dbConfig.User,
					"DB_PASSWORD=" + dbConfig.Password,
					"DB_NAME=" + dbConfig.Dbname,
					"WORKER_ID=" + workerId,
					"JOB_ID=" + jobId,
				},
			},

			Networks: []swarm.NetworkAttachmentConfig{
				swarm.NetworkAttachmentConfig{
					Target: "keyword_keyword-network",
				},
			},

			// Placement: &swarm.Placement{
			// 	Constraints: []string{nodeRole},
			// },
		},
	}, types.ServiceCreateOptions{
		
	})
	if err != nil {
		return err, false
	}

	c.IncreaseCurrentContainerCount()

	// fmt.Println("crate scraper ", reader.ID, c.currentContainerCount)
	return nil, false
}

func (c *Controller) RemoveSimilarity(id string) (error) {
	ctx := context.Background()

	err := c.cli.ServiceRemove(ctx, "similarity_"+id)
	if err != nil {
		return err
	}

	c.DecreaseCurrentContainerCount()

	return nil
}

func (c *Controller) CountRunningCurrentSimilarity(id string) (int, error) {
	ctx := context.Background()

	containers, err := c.cli.ContainerList(ctx, types.ContainerListOptions{})
	if err != nil {
		return 0, err
	}
	count := 0

	for _, container := range containers {
		if strings.Contains(container.Names[0], "similarity_") {
			count++;
		}
	}

	return count, nil
}