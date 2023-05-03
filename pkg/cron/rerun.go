package cron

import (
	"log"
	"os"

	calling "github.com/aglide100/dak-keyword/pkg/clients/provisioned"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/keyword"
	"github.com/google/uuid"
)


func GetAllReRunJob(db *db.Database) error {
	raws, err := db.GetAllReRunJob()
	log.Printf("Rerun jobs :%v", raws)
	if err != nil {
		return err
	}

	for _, raw := range raws {
		res, err := db.GetJob(raw)
		if err != nil {
			return err
		}

		result, err := keyword.GetKeywords(res.Keyword, "")
		if err != nil {
			log.Printf("Can't get keywordset! %v", err)
			return err
		}
	
		workerIdList := []string{}
	
		for _, value := range result {
			workerId := uuid.New().String()
			workerIdList = append(workerIdList, workerId)
			
			err := db.AddNewWorker(workerId, raw, value)
			if err != nil {
				log.Printf("Can't add worker, err: %v", err)
			}
	
			err = calling.CallMakeScraper(workerId, raw, value, os.Getenv("BearerToken"))
			if err != nil {
				log.Printf("Can't make Scraper, err: %v", err)
			}
			// log.Printf("%v %v",workerId ,value)
		}

	}
	return nil
}
