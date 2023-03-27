package scraper

import (
	"log"
	"net/url"
	"strconv"
	"time"

	"github.com/aglide100/dak-keyword/pkg/models"
	"github.com/tidwall/gjson"
)

// maxResult is between 10-100
const maxResult = 100
// Twitter limit 3200 per oncs
const limitResult = 32
const twitterv2api = `https://api.twitter.com/2/`

func (s Scraper) GetMockTweets(keyword string) ([]models.TweetArticle) {
	var articles []models.TweetArticle

	for i:=0; i<5; i++ { 
		articles = append(articles, models.TweetArticle{
			Id: strconv.Itoa(i),
			Text: "안녕하세요!!!!"+keyword,
			Created_at: time.Now().String(),
		})
	}

	return articles
}

func (s Scraper) GetRecentSearch(keyword string, nextToken string, injectNum ...int) ([]models.TweetArticle, error) {
	var num int
	if len(injectNum) == 0 {
		num = 0
	} else {
		num = injectNum[0]
	}

	if num == limitResult {
		return nil, nil
	}

	log.Printf("Starting get recent tweets.... %v", injectNum)

	var resp string
	var err error

	url := twitterv2api + "tweets/search/recent?query=" + url.QueryEscape(keyword) + "&max_results=" + strconv.Itoa(maxResult)

	if len(nextToken) > 1 {
		resp, err = s.CreateHttpReq(url + "&next_token=" + nextToken + "&tweet.fields=id,created_at,text")
		if err != nil {
			return nil, err
		}	
	} else {
		resp, err = s.CreateHttpReq(url + "&tweet.fields=id,created_at,text")
		if err != nil {
			return nil, err
		}	
	}

	meta := gjson.Get(resp, "meta")
	data := gjson.Get(resp, "data")

	var articles []models.TweetArticle

	data.ForEach(func(key, value gjson.Result) bool {
		newArticle := models.TweetArticle{
			Id: gjson.Get(value.String(), "id").String(),
			Text: gjson.Get(value.String(), "text").String(),
			Created_at: gjson.Get(value.String(), "created_at").String(),
		}

		articles = append(articles, newArticle)

		return true
	})


	if len(gjson.Get(meta.String(), "next_token").String()) > 1 {
		result, err := s.GetRecentSearch(keyword, gjson.Get(meta.String(), "next_token").String(), num+1)
		if err != nil {
			log.Printf("error: %v", err)
		}

		for _, v := range result {
			articles = append(articles, v)
		}
	}

	return articles, err
}


// needs academic api.....
func (s Scraper) GetFullArchiveRecentSearch(keyword string) (error) {
	log.Printf("Starting get recent tweets....")
	
	resp, err := s.CreateHttpReq(twitterv2api+ "tweets/search/all?query=" + url.QueryEscape(keyword))
	if err != nil {
		return err
	}

	log.Printf("resp: %v", resp)
	return nil
}