package main

import (
	"log"

	"github.com/aglide100/dak-keyword/pkg/container"
)

const (
	address = "0.0.0.0:50011"
)

func main() {
	log.Printf("starting testing !")

	myCon, err := container.NewController()
	if err != nil {
		log.Println(err)
	}

	err = myCon.CreateNewJobSVC("aaa")
	if err != nil {
		log.Println(err)
	}
}