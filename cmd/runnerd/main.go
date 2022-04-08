package main

import (
	"log"
	"os"
	"sync"

	"context"

	"golang.org/x/sync/errgroup"

	// pb_runner_svc "github.com/aglide100/dak-keyword/pb/svc"

	"github.com/aglide100/dak-keyword/pkg/runner/container"
)

func main() {
	if err := realMain(); err != nil {
		os.Exit(1)
	}
}

func realMain() error {
	log.Printf("run runnerd")
	var wait sync.WaitGroup
    wait.Add(2)
 

	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx


	wg.Go(func() error {
		err := container.RunSomeContainer()
		if err != nil {
			return err
		}

		return nil
	})

	return wg.Wait()
}
