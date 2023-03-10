package keyword

import (
	"log"
	"net/url"

	"github.com/tidwall/gjson"
)

const naverPrefixFront = `https://ac.search.naver.com/nx/ac?q=`
const naverPrefixRear = `&con=0&frm=nv&r_format=json&q_enc=UTF-8&st=100`

func GetKeyWordSetFromNaver(keyword string) ([]string, error) {
	log.Printf("Starting get keyword set from naver... : %s", keyword)

	resp, err := CreateHttpReq(naverPrefixFront + url.QueryEscape(keyword) + naverPrefixRear)
	
	if err != nil {
		return nil, err
	}

	list := gjson.Get(resp, "items")

	result := []string{}

	data := gjson.Get(list.String(), "0")
	
	if len(data.Array()) > 5 {
		for _, val := range data.Array()[0:4] {
			result = append(result, gjson.Get(val.String(), "0").String())
		}
	} else {
		for _, val := range data.Array() {
			result = append(result, gjson.Get(val.String(), "0").String())
		}
	}
	return result, nil
}
