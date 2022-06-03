package container

import (
	"context"
	"io"
	"log"
	"os"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/docker/client"
	"github.com/docker/docker/pkg/stdcopy"
)

func (c *Controller) EnsureImage(image string) (err error) {
	reader, err := c.cli.ImagePull(context.Background(), image, types.ImagePullOptions{})

	if err != nil {
		return err
	}

	defer reader.Close()
	_, err = io.Copy(os.Stdout, reader)
	if err != nil {
		return nil
	}

	return nil
}

// func RunSentimentAnalysis() error {
// 	ctx := context.Background()

// 	cli, err := client.NewClientWithOpts(client.FromEnv)


// 	return nil
// }

// func runCreate(dockerCli *command.DockerCli, opts *serviceOptions) error {
// 	apiClient := dockerCli.Client()
// 	createOpts := types.ServiceCreateOptions{}

// 	service, err := opts.ToService()
// 	if err != nil {
// 		return err
// 	}

// 	ctx := context.Background()

// 	// only send auth if flag was set
// 	if opts.registryAuth {
// 		// Retrieve encoded auth token from the image reference
// 		encodedAuth, err := command.RetrieveAuthTokenFromImage(ctx, dockerCli, opts.image)
// 		if err != nil {
// 			return err
// 		}
// 		createOpts.EncodedRegistryAuth = encodedAuth
// 	}

// 	response, err := apiClient.ServiceCreate(ctx, service, createOpts)
// 	if err != nil {
// 		return err
// 	}

// 	fmt.Fprintf(dockerCli.Out(), "%s\n", response.ID)
// 	return nil
// }
func RunSomeContainer() error {
	log.Printf("Run some container")
	ctx := context.Background()

	cli, err := client.NewClientWithOpts(client.FromEnv, client.WithAPIVersionNegotiation())
	if err != nil {
		return err
	}

	reader, err := cli.ImagePull(ctx, "docker.io/library/alpine", types.ImagePullOptions{})
	if err != nil {
		return err
	}

	defer reader.Close()
	_, err = io.Copy(os.Stdout, reader)
	if err != nil {
		return err
	}


	resp, err := cli.ContainerCreate(ctx, &container.Config{
		Image: "alpine",
		Cmd: []string{"echo", "hello world"},
		Tty: false,
	}, nil,nil,nil, "")
	if err != nil {
		return err
	}

	if err := cli.ContainerStart(ctx, resp.ID, types.ContainerStartOptions{}); err  != nil {
		return err
	}

	statusCh, errCh := cli.ContainerWait(ctx, resp.ID, container.WaitConditionNotRunning)
	select {
	case err := <-errCh:
		if err != nil {
			return err
		}
	case <-statusCh:
	}

	options := types.ContainerLogsOptions{ShowStdout: true}

	out, err := cli.ContainerLogs(ctx, resp.ID, options)
	if err != nil {
		return err
	}

	_, err =stdcopy.StdCopy(os.Stdout, os.Stderr, out)
	if err != nil {
		return err 
	}
	// io.Copy(os.Stdout, out)
	return nil
}