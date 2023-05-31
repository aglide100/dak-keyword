package main

import (
	"fmt"
	"log"
	"time"

	"github.com/aglide100/dak-keyword/pkg/db"
)

func main() {
	config := &db.DBConfig{
		Host : "192.168.0.28", 
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
		log.Panic(err)
	}

	res, err := myDB.GetAllJob()
	if err != nil {
		log.Panic(err)
	}
	

	fmt.Printf("%s", res[0].Date)

	fmt.Println("----")

	t1, err := time.Parse(time.RFC3339, res[0].Date)
	if err != nil {
		fmt.Printf("%s", err)
	}

	fmt.Printf("%s", t1.Format(time.DateOnly))

}