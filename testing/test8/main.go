package main

import (
	"fmt"
	"log"

	"github.com/aglide100/dak-keyword/pkg/keyword"
	"github.com/aglide100/dak-keyword/pkg/tfidf"
)

func main() {
	res, err := keyword.GetKeyWordSetFromDaum("일론머스크")
	if err != nil {
		log.Println("err :%v", err)
	}

	for i, val := range res {
		log.Println("i :%v, val : %v", i, val)
	}
	documents := []string{
		"2개월 이상 월세 연체 시 임대인은 임대차 계약을 해지할 수 있다.",
		"월세를 두번 이상 연체하면 방을 빼셔야 합니다.",
		"계약금은 계약과 동시에 임대인 통장으로 입금하고, 월세도 본 통장으로 매월 입금한다.",
		"월세는 매월 1일에 입금하고, 첫 달은 잔금일로부터 1일까지 계산해서 입금하기로 한다.",
		"월세 외 부가가치세는 별도로 한다.",
		// "Lorem ipsum ", "Lorem ipsum dolor sit amet", 
		// "Fusce non convallis nisi.", 
		// "Maecenas venenatis leo vel tempor semper", 
		// "Donec sed tempor dolor, a fringilla turpis",
	}

	_, result := tfidf.CalcTfIdf(documents)

	for i, _ := range result {
		max, index := 0.0, 0
	    for k, score := range result[i] {
			if i != k {
				if score > max {
					max = score
					index = k
				}
			}
	    }
		fmt.Printf("%v // %v: %f\n", documents[i], documents[index], result[i][index])
	}
}