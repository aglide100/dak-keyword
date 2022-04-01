package keyword

import (
	"log"
	"net/url"

	"github.com/tidwall/gjson"
)

const naverPrefixFront = "https://ac.search.naver.com/nx/ac?q=" 
const naverPrefixRear = "&con=0&frm=nv&r_format=json&q_enc=UTF-8&st=100" 

func GetKeyWordSetFromNaver(keyword string) ([]string, error) {
	log.Printf("Starting get keyword set from naver... : %s", keyword)

	resp, err := CreateHttpReq(naverPrefixFront + url.QueryEscape(keyword) + naverPrefixRear)
	if err != nil {
		return nil, err
	}
	// log.Printf("resp :%s", resp)

	list := gjson.Get(resp, "items")
	

	log.Printf("naver resp: %s", list.String())

	return nil, nil
}
