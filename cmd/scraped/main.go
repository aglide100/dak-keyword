package main

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/scraper"
)


func main() {
	if err := realMain(); err != nil {
		log.Printf("err :%s", err)
		os.Exit(1)
	}
}

func realMain() error {
	// config, err := env.LoadEnv("./env/test1.env")
		// if err != nil {
			// log.Printf("Can't load env file :%v", err)
		// }
	// config.SaveTwitterSecret()

	log.Printf(os.Getenv("Keyword"))

	dbAddr := os.Getenv("DB_ADDR")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPasswd := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	
	dbport, err := strconv.Atoi(dbPort)
	if err != nil {
		return fmt.Errorf("Can't read dbPort!: %v %v", dbPort, err)
	}
	// log.Printf("%v", dbName)
	
	myDB, err := db.ConnectDB(&db.DBConfig{
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
	})
	if err != nil {
		return fmt.Errorf("Can't connect DB: %v", err)
	}
	
	myScraper := scraper.NewScraper("Mock", myDB)
	result := myScraper.GetMockTweets(os.Getenv("Keyword"))
	log.Printf("%d", len(result))
	// myScraper := scraper.NewScraper(config.GetTwitterBearerToken())
	// result, err := myScraper.GetRecentSearch("J.Walker", "")
	// if err != nil {
		// return err
	// }

	// result := myScraper.GetMockTweets()


	// log.Printf("result : %v", result)

	// for idx, value := range result {
	// 	log.Printf("--------------------   %d", idx)
	// 	log.Printf("id : %v", value.Id)
	// 	log.Printf("date : %v", value.Created_at)
	// 	log.Printf("text : %v", value.Text)
	// }

	err = scraper.CallGrpcCallDone()
	if err != nil {
		return err
	}

	return nil
}