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

	q := containerQueue.NewContainerQueue(10, 5)

	go func ()  {

		var i = 0;
		for {
			err := q.EnqueueFromQueue(&containerQueue.ContainerSpec{
				WorkerId: strconv.Itoa(i),
				Keyword: "4567",
			})
			if err == nil {
				log.Printf("Enqueue!")
			}

			i++


			time.Sleep(1*time.Second)
		}
	}()


	go func() {
        for {
            select {
            case <-time.Tick(3 * time.Second):
				log.Printf(strconv.Itoa(q.LenQueue()))
				cSpec := q.DequeueFromQueue()

				log.Printf("Dequeue %v", cSpec)

				q.EnqueueFromRunning(cSpec)

				log.Printf("Dequeue from running %v", q.DequeueFromRunning(cSpec.WorkerId))
				// 
				
            }
        }
    }()

	wait.Wait()
    return wg.Wait()
}