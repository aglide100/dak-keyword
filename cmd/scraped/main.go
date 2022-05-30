package main

import (
	"log"
	"os"

	"github.com/aglide100/dak-keyword/pkg/env"
	"github.com/aglide100/dak-keyword/pkg/scraper"
)


func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%s", err)
		os.Exit(1)
	}
}
func realMain() error {
	config, err := env.LoadEnv(".env")
		if err != nil {
			log.Printf("Can't load env file :%v", err)
		}
	config.SaveTwitterSecret()

	myScraper := scraper.NewScraper(config.GetTwitterBearerToken())
	result, err := myScraper.GetRecentSearch("J.Walker", "")
	if err != nil {
		return err
	}

	// result := myScraper.GetMockTweets()


	// log.Printf("result : %v", result)

	for idx, value := range result {
		log.Printf("--------------------   %d", idx)
		log.Printf("id : %v", value.Id)
		log.Printf("date : %v", value.Created_at)
		log.Printf("text : %v", value.Text)
	}
	
	return nil
}