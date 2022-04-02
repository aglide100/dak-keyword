package main

import (
	"log"
	"os"
)

func main() {
	if err := realMain(); err != nil {
		os.Exit(1)
	}
}

func realMain() error {
	log.Printf("run topicd")

	return nil
}