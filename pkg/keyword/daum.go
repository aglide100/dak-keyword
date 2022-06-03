package keyword

import (
	"log"
	"net/url"
	"strings"

	"github.com/tidwall/gjson"
)

const daumPrefixFront = `https://suggest.search.daum.net/sushi/pc/get?callback=jQuery36008929946526401802_1649225997914&q=` 
const daumPrefixRear = `&htype=position&_=1649225997921`

func GetKeyWordSetFromDaum(keyword string) ([]string, error) {
	log.Printf("Starting get keyword set from daum... : %s", keyword)

	resp, err := CreateHttpReq(daumPrefixFront + url.QueryEscape(keyword) + daumPrefixRear)
	if err != nil {
		return nil, err
	}

	// var r rune
	r := '('

	result := []string{}

	data := gjson.Get(resp[strings.IndexRune(resp, r) + 1:len(resp) - 2], "subkeys")
	
	if len(data.Array()) > 5 {
		for _, val := range data.Array()[0:4] {
			result = append(result, val.String())
		}
	} else {
		for _, val := range data.Array() {
			result = append(result, val.String())
		}
	}

	return result, nil
}