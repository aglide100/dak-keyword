package scraper

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/aglide100/dak-keyword/pkg/model"
)

type Scraper struct {
	AccessToken
	Twitter
}

type AccessToken struct {
	Token string
}

type Twitter interface {
	GetRecentSearch(keyword string) ([]model.TweetArticle, error) 
	GetFullArchiveRecentSearch(keyword string) (error)
}

func NewScraper(token string) *Scraper {
	return &Scraper{
		AccessToken : AccessToken{Token: token},
	}
}


func (s Scraper) CreateHttpReq(url string) (string, error) {
	log.Printf("Create http req: %s", url)

	req, err := http.NewRequest("GET", url, nil) 
	if err != nil {
		return "", err
	}
	req.Header.Set("authorization", "Bearer " + s.AccessToken.Token)

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	if res.StatusCode != 200 {
		return "", HandleHttpStatusErr(res)
	}

	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return "", err
	}

	return string(data), nil
}

func HandleHttpStatusErr(res *http.Response) (error) {
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return  err
	}

	return errors.New("status code error! "+ string(data) )
}

func (s Scraper) MakeUniqueTweet(list []model.TweetArticle) ([]model.TweetArticle) {
	keys := make(map[string]bool)
	ue := []model.TweetArticle{}

	for idx, value := range list {
		log.Printf("idx : %v, text: %v, date : %v", idx, value.Text, value.Created_at)
		if _, saveValue := keys[value.Text]; !saveValue{
			keys[value.Text] = true
			ue = append(ue, value)
		}
	
	}

	return ue
}