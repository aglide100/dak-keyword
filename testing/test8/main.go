package main

import (
	"log"

	"github.com/aglide100/dak-keyword/pkg/keyword"
)

func main() {
	res, err := keyword.GetKeyWordSetFromDaum("일론머스크")
	if err != nil {
		log.Println("err :%v", err)
	}

	for i, val := range res {
		log.Println("i :%v, val : %v", i, val)
	}

}