package main

import (
	"fmt"
	"log"
	"os"

	calling "github.com/aglide100/dak-keyword/pkg/clients/similarity"
	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/tfidf"
)

func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%s", err)

		calling.CallGrpcWhenSimilarityHavingErr(os.Getenv("WORKER_ID"), err.Error())
		
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
	jobId := os.Getenv("JOB_ID")

	myDB, err := db.ConnectDB(dbConfig)
	if err != nil {
		return fmt.Errorf("Can't connect DB: %v", err)
	}

	articles, err := myDB.GetPreprocessedTextByWorkerID(workerId)
	if err != nil {
		return err
	}

	documents := []string{}
	for _, val := range articles {
		documents = append(documents, val.Preprocessed_content)
	}

	vocabList, tfidfscore, similarityList := tfidf.CalcTfIdf(documents)

	vocabId, err := myDB.AddNewVocabList(vocabList, workerId, jobId)
	if err != nil {
		return err
	}

	
	for i := range documents {
		vocab_column := []int{}
		score_array := []float64{}

		for j, _ := range vocabList {
			score := tfidfscore[i][j]
			if score != 0 {
				vocab_column = append(vocab_column, j)
				score_array = append(score_array, score)
			}
		}

		err = myDB.AddNewTfIdfScore(workerId, articles[i].Id, vocabId, vocab_column, score_array)
		if err != nil {
			return err
		}
	}

	for i := 0; i < len(documents); i++ {
		comparisonId := []string{}
		for j := 0; j < len(documents); j++ {
			comparisonId = append(comparisonId, articles[j].Id)
		}
		err := myDB.AddNewCosineSimilarity(articles[i].Id, workerId, similarityList[i], comparisonId)
		if err != nil {
			return err
		}
	}

	err = calling.CallGrpcWhenDoneSimilarity(workerId)
	if err != nil {
		return err
	}

	
	return nil
}