package main

import (
	"fmt"
	"log"
	"os"

	calling "github.com/aglide100/dak-keyword/pkg/clients/scraper"
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/scraper"
)


func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%s", err)
		workerId := os.Getenv("WORKER_ID")
		calling.CallGrpcWhenScraperHavingErr(workerId, err.Error())
		os.Exit(1)
	}
}

// Execute just once
func realMain() error {
	// config, err := env.LoadEnv("./env/test1.env")
		// if err != nil {
			// log.Printf("Can't load env file :%v", err)
		// }
	// config.SaveTwitterSecret()

	dbConfig, err := db.GetDBConfig()
	if err != nil {
		log.Println(err)
		return err
	}

	workerId := os.Getenv("WORKER_ID")
	jobId := os.Getenv("JOB_ID")

	
	myDB, err := db.ConnectDB(dbConfig)
	if err != nil {
		return fmt.Errorf("Can't connect DB: %v", err)
	}

	err = calling.CallGrpcWhenStaring(workerId)
	if err != nil {
		return err
	}

	myScraper := scraper.NewScraper(os.Getenv("BearerToken"), myDB, workerId)
	result, err := myScraper.GetRecentSearch(os.Getenv("Keyword"), "")
	if err != nil {
		return err
	}

	result = scraper.RemoveSimilar(result, 10)

	for _, value := range result {
		err := myScraper.WriteTweetOnDB(value)

		if err != nil {
			switch err.(type) {
			case *db.DuplicateContent:
				// pass
			default:
				calling.CallGrpcWhenScraperHavingErr(workerId, err.Error())
			}
		}
	}

	// err = myScraper.MakeUniqueArticle(jobId)
	// if err != nil {
	// 	return err
	// }

	err = calling.CallGrpcWhenDone(workerId, jobId)
	if err != nil {
		return err
	}

	return nil
}