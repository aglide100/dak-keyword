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
	io.Copy(os.Stdout, reader)
	return nil
}


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
	io.Copy(os.Stdout, reader)

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

	stdcopy.StdCopy(os.Stdout, os.Stderr, out)
	// io.Copy(os.Stdout, out)
	return nil
}