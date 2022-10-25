package scraper

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/models"
)

type Scraper struct {
	AccessToken
	Twitter
	Worker
	db *db.Database
}

type AccessToken struct {
	Token string
}

type Worker struct {
	id string
}

type Twitter interface {
	GetRecentSearch(keyword string) ([]models.TweetArticle, error) 
	GetFullArchiveRecentSearch(keyword string) (error)
}

func NewScraper(token string, db *db.Database, workerId string) *Scraper {
	return &Scraper{
		AccessToken : AccessToken{Token: token},
		db: db,
		Worker: Worker{id: workerId},
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

	if res.StatusCode == 429 {
		log.Printf("Too many request, 15min sleep")
		time.Sleep(15 * 60 * time.Second)
		CallGrpcCallUpdateJob(s.Worker.id, "Too many request, 15min sleep")
		
		result, err := s.CreateHttpReq(url)
		
		CallGrpcCallUpdateJob(s.Worker.id, "Collecting...")
		if err != nil {
			return "", err
		}

		return result, nil
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
