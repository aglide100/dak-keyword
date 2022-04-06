package main

import (
	"os"
	"log"
	"context"
	"golang.org/x/sync/errgroup"
)

func main() {
	if err := realMain(); err != nil {
		log.Printf("err: %s", err)
		// log.Fatal(err)
		os.Exit(1)
	}
}

func realMain() error {

	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx

	wg.Go(func() error {
		// wrapped grpc srv
		log.Printf("received rpc req!")

		return nil
	})

	return nil
}