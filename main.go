package main

import (
	"log"

	"github.com/aglide100/go-scraper/pkg/config"
	"github.com/aglide100/go-scraper/pkg/keyword"
)

func main() {
	log.Println("Starting scraper...")
	result, err := keyword.GetKeywords("고양이")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
	}

	files, err := config.ReadEnvList()
	log.Printf("files :%v", files)

	var apiKeys = []*config.Config{}

	for _, val := range files {
		log.Printf("file :%v", val)
		config, err := config.LoadEnv("./env/" + val)
		if err != nil {
			log.Printf("Can't load env file :%v", err)
		}
		config.SaveTwitterSecret()

		apiKeys = append(apiKeys, config)
	}

	log.Printf("%s", result)

	log.Printf("key: %v", apiKeys[0].GetTwitterAccessSecret())
	log.Printf("key: %v", apiKeys[1].GetTwitterAccessSecret())
}
