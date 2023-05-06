package main

import (
	"fmt"
	"log"
	"os"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/tfidf"
)

func main() {
	
	if err := realMain(); err != nil {
		log.Printf("err :%s", err)
		os.Exit(1)
	}
}

func realMain() error {
	dbConfig, err := db.GetDBConfig()
	if err != nil {
		log.Println(err)
		return err
	}

	workerId := os.Getenv("WORKER_ID")
	// jobId := os.Getenv("JOB_ID")

	myDB, err := db.ConnectDB(dbConfig)
	if err != nil {
		return fmt.Errorf("Can't connect DB: %v", err)
	}

	res, err := myDB.GetPreprocessedTextByWorkerID(workerId)
	if err != nil {
		log.Println(err)
		return err
	}

	documents := make([]string, len(res))
	for _, val := range res {
		documents = append(documents, val.Preprocessed_content)
	}

	vocabList, tfidf, similarityList := tfidf.CalcTfIdf(documents)

	myDB.AddNewVocabList(vocabList, workerId)
	// myDB.AddNewTfIdfScore()
	log.Println(vocabList)
	
	log.Println(tfidf)

	log.Println(similarityList)

	return nil
}