package main

import (
	"log"
	"os"

	"github.com/aglide100/dak-keyword/pkg/config"
)

func test() string {
	return os.Getenv("Hello")
}

func main() {
	log.Printf(config.GetInstance().GetTwitterAccessSecret())
	// wg, _ := errgroup.WithContext(context.Background())
	// wg.Go(func() error {
		
	// 	for {
	// 		<-time.After(1*time.Second)
	// 		log.Println("Hello!")
	// 	}
	// })

	// wg.Go(func() error {
	// 	for {
	// 		<-time.After(1*time.Second)
	// 		log.Println("Wro;d!")
	// 	}
	// })

	// wg.Wait()
}