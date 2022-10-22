package container

import (
	"context"
	"fmt"
	"strconv"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/mount"
	"github.com/docker/docker/api/types/swarm"
)

// const nodeRole = "node.role == worker"

func (c *Controller) CreateNewAnalyzer(workerId string, keyword string, dbConfig *db.DBConfig) (error) {
	ctx := context.Background()

	c.cli.ImagePull(ctx, "ghcr.io/aglide100/dak-keyword-analyzer:latest", types.ImagePullOptions{})
	
	max := uint64(1)
	
	reader, err := c.cli.ServiceCreate(ctx, swarm.ServiceSpec{
		Annotations: swarm.Annotations{
			Name: workerId,
		},

		TaskTemplate: swarm.TaskSpec{
			ContainerSpec: &swarm.ContainerSpec{
					Image: "ghcr.io/aglide100/dak-keyword-analyzer:latest",
					Command: []string{"python3", "Keyword.py"},
					Mounts: []mount.Mount{
						{
							Type:  "volume",
							Source: "keys",
							Target: "/keys/",
							VolumeOptions: &mount.VolumeOptions{},
						},
					},
					Env: []string{
					"Keyword=" + keyword, 
					"DB_ADDR=" + dbConfig.Host,
					"DB_PORT=" + strconv.Itoa(dbConfig.Port),
					"DB_USER=" + dbConfig.User,
					"DB_PASSWORD=" + dbConfig.Password,
					"DB_NAME=" + dbConfig.Dbname,
					"WORKER_ID=" + workerId,	
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
		return err
	}

	fmt.Println(reader.ID)
	return nil
}

func (c *Controller) RemoveAnalyzer(id string) (error) {
	ctx := context.Background()

	err := c.cli.ServiceRemove(ctx, id)
	if err != nil {
		return err
	}

	return nil

}