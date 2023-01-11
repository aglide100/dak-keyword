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
		workerId := os.Getenv("WORKER_ID")
		scraper.CallGrpcCallWhenScraperHaving(workerId, err.Error())
		os.Exit(1)
	}
}

func realMain() error {
	// config, err := env.LoadEnv("./env/test1.env")
		// if err != nil {
			// log.Printf("Can't load env file :%v", err)
		// }
	// config.SaveTwitterSecret()

	dbAddr := os.Getenv("DB_ADDR")
	dbPort := os.Getenv("DB_PORT")
	dbUser := os.Getenv("DB_USER")
	dbPasswd := os.Getenv("DB_PASSWORD")
	dbName := os.Getenv("DB_NAME")
	workerId := os.Getenv("WORKER_ID")

	dbport, err := strconv.Atoi(dbPort)
	if err != nil {
		fmt.Errorf("Can't read dbPort!: %v %v", dbPort, err)
		dbport = 8432
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

	err = scraper.CallGrpcCallWhenStaring(workerId)
	if err != nil {
		return err
	}
	
	// myScraper := scraper.NewScraper("Mock", myDB)
	// result := myScraper.GetMockTweets(os.Getenv("Keyword"))
	log.Printf("%v", os.Getenv("BearerToken"))
	myScraper := scraper.NewScraper(os.Getenv("BearerToken"), myDB, workerId)
	result, err := myScraper.GetRecentSearch(os.Getenv("Keyword"), "")
	if err != nil {
		return err
	}

	for _, value := range result {
		// log.Printf("--------------------   %d", idx)
		// log.Printf("id : %v", value.Id)
		// log.Printf("date : %v", value.Created_at)
		// log.Printf("text : %v", value.Text)
		myScraper.WriteTweetOnDB(value)
	}

	// time.Sleep(20 * time.Second)   
	err = scraper.CallGrpcCallWhenDone(workerId)
	if err != nil {
		return err
	}

	return nil
}