package main

import (
	"log"

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
		log.Println("err :%v", err)
	}

	err = myDB.GetSimilarity("")
	if err != nil {
		log.Println("err :%v", err)
	}

}