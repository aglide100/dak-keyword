package keyword

import (
	"log"
	"net/url"

	"github.com/PuerkitoBio/goquery"
)

const bingPrefixFront = `https://www.bing.com/AS/Suggestions?pt=page.serp&bq=%EC%95%88%EB%85%95&mkt=ko-kr&qry=`
const bingPrefixRear = `&asv=1&cp=2&msbqf=false&cvid=4DF5D2D628F64E85858510C7911432F1`

func GetKeyWordSetFromBing(keyword string) ([]string, error) {
	log.Printf("Starting get keyword set from bing... : %s", keyword)

	res, err := CreateHttpRes(bingPrefixFront + url.QueryEscape(keyword) + bingPrefixRear)
  	if err != nil {
		return nil, err
  	}

  	doc, err := goquery.NewDocumentFromReader(res.Body)
  	if err != nil {
		return nil, err
  	}
	
	result := []string{}

	doc.Find(".sa_tm_text").Each(func(_ int, tr *goquery.Selection) {
		// log.Printf("tr :%v", tr.Text())
		result = append(result, tr.Text())
	})

	return result, nil
}