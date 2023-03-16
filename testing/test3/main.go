package main

import (
	"context"
	"log"
	"os"
	"strconv"
	"sync"
	"time"

	"github.com/aglide100/dak-keyword/testing/test3/containerQueue"
	"golang.org/x/sync/errgroup"
)


func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%v", err)
		os.Exit(1)
	} 
}

func realMain() error {

	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx
	var wait sync.WaitGroup
    wait.Add(1)

	q := containerQueue.NewContainerQueue()

	go func ()  {

		var i = 0;
		for {
			q.Enqueue(&containerQueue.ContainerSpec{
				WorkerId: strconv.Itoa(i),
				Keyword: "4567",
			})
			i++
			log.Printf("Enqueue!")


			time.Sleep(5*time.Second)
		}
	}()


	go func() {
        for {
            select {
            case <-time.Tick(1 * time.Second):
                for q.Len() > 0 {
					cSpec, ok := q.Dequeue()
					
					if ok {
						log.Printf("Dequeue %v", cSpec)
					}
				}
            }
        }
    }()

	wait.Wait()
    return wg.Wait()
}