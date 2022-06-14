package scraper

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/models"
)

type Scraper struct {
	AccessToken
	Twitter
	db *db.Database
}

type AccessToken struct {
	Token string
}

type Twitter interface {
	GetRecentSearch(keyword string) ([]models.TweetArticle, error) 
	GetFullArchiveRecentSearch(keyword string) (error)
}

func NewScraper(token string, db *db.Database) *Scraper {
	return &Scraper{
		AccessToken : AccessToken{Token: token},
		db: db,
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

func (s Scraper) MakeUniqueTweet(list []models.TweetArticle) ([]models.TweetArticle) {
	keys := make(map[string]bool)
	ue := []models.TweetArticle{}

	for idx, value := range list {
		log.Printf("idx : %v, text: %v, date : %v", idx, value.Text, value.Created_at)
		if _, saveValue := keys[value.Text]; !saveValue{
			keys[value.Text] = true
			ue = append(ue, value)
		}
	
	}

	return ue
}
