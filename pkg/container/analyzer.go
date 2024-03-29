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

func (c *Controller) CreateAnalyzerService(workerId, jobId, keyword string, dbConfig *db.DBConfig) (error, bool) {
	ctx := context.Background()

	max := uint64(1)

	if c.cQueue.LenRunning() >= c.cQueue.GetLimitContainerCount() {
		log.Println("Too many container to create analyzer container")
		c.cQueue.EnqueueFromQueue(&ContainerSpec{
			WorkerId:  workerId,
			Keyword: keyword,
			Token: "",
			Type: "Analyzer",
		})
		return nil, true
    }

	c.cli.ImagePull(ctx, "ghcr.io/aglide100/dak-keyword--analyzer:latest", types.ImagePullOptions{})
	
	_, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: "analyzer_"+workerId,
		},

		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
					Image: "ghcr.io/aglide100/dak-keyword--analyzer:latest",
					// Labels: map[string]string{
					// 	"com.docker.stack.namespace" : "keyword_analyzer",
					// },
					Command: []string{"python3", "Analyzer.py"},
					// Mounts: []mount.Mount{
					// 	{
					// 		Type:  "volume",
					// 		Source: "keys",
					// 		Target: "/keys/",
					// 		VolumeOptions: &mount.VolumeOptions{},
					// 	},
					// },
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
					Target: "keyword-network",
				},
			},
			RestartPolicy: &swarm.RestartPolicy{
				MaxAttempts: &max,
				Condition: swarm.RestartPolicyConditionOnFailure,
			},
			// Placement: &swarm.Placement{
			// 	// MaxReplicas: 1,
			// 	// Constraints: []string{nodeRole},
			// },	
		},
	}, types.ServiceCreateOptions{})
	if err != nil {
		if strings.Contains(err.Error(), "name conflicts with an existing object") {
			log.Println("An analyzer service with the same name already exists.")
			// c.cQueue.EnqueueFromQueue(&ContainerSpec{
			// 	WorkerId: workerId,
			// 	Keyword: keyword,
			// 	Token: "",
			// 	Type: "Analyzer",
			// })
			return nil, false
		} else {
			return err, false
		}
	}

	c.cQueue.EnqueueFromRunning(&ContainerSpec{
		WorkerId: workerId,
		Keyword: keyword,
		Token: "",
		Type: "Analyzer",
	})
	
	return nil, false
}

func (c *Controller) RemoveAnalyzer(id string) (error) {
	ctx := context.Background()

	err := c.cli.ServiceRemove(ctx, "analyzer_"+id)
	if err != nil {
		return err
	}

	c.cQueue.DequeueFromRunning()

	return nil

}