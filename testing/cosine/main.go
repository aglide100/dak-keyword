package main

import (
	"fmt"
	"log"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/similarity"
)

func main() {
	config := &db.DBConfig{
		Host : "192.168.0.26", 
		Port : 8888, 
		User : "table_admin", 
		Password : "HelloWorld", 
		Dbname : "keyword", 
		Sslmode : "disable", 
		// Sslmode : "verify-full", 
		// Sslrootcert : "keys/ca.crt", 
		// Sslkey : "keys/client.key", 
		// Sslsert : "keys/client.crt", 
	}

	myDB, err := db.ConnectDB(config)
	if err != nil {
		log.Println("err :%v", err)
	}

	res ,err := myDB.GetArticlesByWorkerID("1a88b949-976e-43a5-a2c2-fc92a2285e43")
	if err != nil {
		log.Println("err :%v", err)
	}

	documents := []string{}


	for _, article := range res {
		documents = append(documents, article.Content)
	}

	vocabList, tfidfscore, similarityList := similarity.CalcTfIdf(documents)

	for _, word := range vocabList {
		log.Println(word)
	}
	
	for i := range documents {
		fmt.Printf("Document %d:\n", i+1)
		fmt.Printf("%v:\n", documents[i])

		for j, word := range vocabList {
			score := tfidfscore[i][j]
			if score > 0 {
				fmt.Printf("\t%s: %.4f\n", word, score)
			}
		}
		fmt.Println()
	}

	for i := 0; i < len(documents); i++ {
		for j := i + 1; j < len(documents); j++ {
			fmt.Printf("Cosine similarity between document %d and document %d: %f\n", i+1, j+1, similarityList[i][j])
		}
	}

	log.Println(len(res))

}
 