package main

import (
	"log"

	"github.com/aglide100/go-scraper/pkg/keyword"
)


func main() {
	log.Println("Starting scraper...")
	result, err := keyword.GetKeyWordSetFromNaver("시디즈 의자")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
	}

	log.Printf("%s", result)

	result, err = keyword.GetKeyWordSetFromGoogle("시디즈 의자")
	if err != nil {
		log.Printf("Can't get keywordset! %v", err)
	}

	log.Printf("%s", result)
}