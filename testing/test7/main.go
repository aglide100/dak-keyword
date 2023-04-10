package main

import (
	"log"
	"unicode/utf8"

	"github.com/aglide100/dak-keyword/pkg/scraper"
)

func main() {
	text := scraper.Preprocessing("RT @_myorin_S2: #배민트친소 #배친소 #배달의민족_트친소 #baedar_minzok 배민 이용하시는분 있나요? 저는 엄마가 사줘요.")

	log.Println(text)
	log.Println(utf8.RuneCountInString(text))
}