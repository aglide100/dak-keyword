package main

import (
	"flag"
	"fmt"
	"log"
	"net"
	"os"
	"strconv"
	"sync"
	"time"

	"context"

	"golang.org/x/sync/errgroup"
	"google.golang.org/grpc"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"

	"github.com/aglide100/dak-keyword/pkg/container"
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/servers/provision"
)

var (
	provisionedAddr = flag.String("provision grpc addr", "0.0.0.0:50012", "grpc address")
)

func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%v", err)
		os.Exit(1)
	}
}

func realMain() error {
	flag.Parse()
	provisionedL, err := net.Listen("tcp", fmt.Sprintf("%s", *provisionedAddr))
	if err != nil {
		return err
	}
	defer provisionedL.Close()

	var wait sync.WaitGroup
    wait.Add(1)

	var opts []grpc.ServerOption
	
	dbAddr := os.Getenv("DB_ADDR")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPasswd := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	
	dbport, err := strconv.Atoi(dbPort)
	if err != nil {
		return fmt.Errorf("Can't read dbPort!: %v %v", dbPort, err)
	}

	twitterToken := os.Getenv("BearerToken")

	grpcServer := grpc.NewServer(opts...)

	q := container.NewContainerQueue()

	c, err := container.NewController(10, q, twitterToken)
	if err != nil {
		return err
	}

	dbConfig := &db.DBConfig{
		Host : dbAddr, 
		Port : dbport, 
		User : dbUser, 
		Password : dbPasswd, 
		Dbname : dbName, 
		Sslmode : "disable", 
		// Sslmode : "verify-full", 
		// Sslrootcert : "keys/ca.crt", 
		// Sslkey : "keys/client.key", 
		// Sslsert : "keys/client.crt", 
	}


	provisionSrv := provision.NewProvisionServiceServer(c, *dbConfig)

	pb_svc_provision.RegisterProvisionServer(grpcServer, provisionSrv)

	wg, ctx := errgroup.WithContext(context.Background())
	_ = ctx

	wg.Go(func() error {
		for {
			select {
            case <-time.Tick(1 * time.Second):
                for q.Len() > 0 {
					if (c.GetCurrentAnalyzerCount() < c.GetMaxAnalyzerCount()) {
						cSpec, ok := q.Dequeue()
						if ok {
							log.Printf("Dequeue %v", cSpec)
						} else {
							log.Println("Can't dequeue from queue")
							continue
						}

						if (cSpec.Type == "Scraper") {
							err, countErr := c.CreateNewScraper(cSpec.WorkerId, cSpec.JobId, cSpec.Keyword, dbConfig)
							if err != nil {
								log.Println("Can't make scraper in queue %v", err)
								q.Enqueue(cSpec)
							}

							if (countErr) {
								log.Println("Queue is full..? %v", err)
								q.Enqueue(cSpec)
							}
						} 

						if (cSpec.Type == "Analyzer") {
							err, countErr := c.CreateNewAnalyzer(cSpec.WorkerId, cSpec.Keyword, dbConfig)
							if err != nil {
								log.Println("Can't make analyzer in queue %v", err)
								q.Enqueue(cSpec)
							}
	
							if (countErr) {
								log.Println("Queue is full..? %v", err)
								q.Enqueue(cSpec)
							}
						}
					}
				}
            }
		}
	})

	wg.Go(func() error {
		log.Printf("Starting normal grpcServer at: %s" ,*provisionedAddr)
		err := grpcServer.Serve(provisionedL)
		if err != nil {
			log.Fatalf("failed to serve: %v", err)
			return err
		}

		return nil
	})
	

	return wg.Wait()
}
