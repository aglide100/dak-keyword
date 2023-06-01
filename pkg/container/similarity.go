package container

import (
	"context"
	"strconv"
	"strings"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/swarm"
)

// const nodeRole = "node.role == worker"

func (c *Controller) CreateSimilarityService(workerId string, jobId string,dbConfig *db.DBConfig) (error, bool) {
	ctx := context.Background()

	if c.cQueue.LenRunning() >= c.containerMaximum {
		c.cQueue.EnqueueFromQueue(&ContainerSpec{
			WorkerId: workerId,
			JobId: jobId,
			Type: "Similarity",
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
					Target: "keyword-network",
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

	c.cQueue.EnqueueFromRunning(&ContainerSpec{
		WorkerId: workerId,
		JobId: jobId,
		Token: "",
		Type: "Similarity",
	})

	// fmt.Println("crate scraper ", reader.ID, c.currentContainerCount)
	return nil, false
}

func (c *Controller) RemoveSimilarity(id string) (error) {
	ctx := context.Background()

	err := c.cli.ServiceRemove(ctx, "similarity_"+id)
	if err != nil {
		return err
	}

	c.cQueue.DequeueFromRunning()

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