package scraper

import (
	"github.com/aglide100/dak-keyword/pkg/models"
)

func (s Scraper) WriteTweetOnDB(tweet models.TweetArticle) error {
	err := s.db.WriteTweetToArticle(tweet)
	if err != nil {
		return err
	}

	return nil
}

func (s Scraper) MakeUniqueArticle(jobId string) error {
	err := s.db.RemoveDuplicateArticle(jobId)
	if err != nil {
		return err
	}

	return nil
}