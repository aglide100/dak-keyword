package db

import (
	"fmt"
	"os"

	"github.com/aglide100/dak-keyword/pkg/models"
)

func (db *Database) WriteTweetToArticle(tweet models.TweetArticle) error {
	const q =`
	INSERT INTO article (
		"Keyword",
		"Content",
		"Platform",
		"Job_id",
		"Worker_id",
		"Author"
	) VALUES ($1, $2, $3, $4, $5, $6)`

	_, err := db.Conn.Exec(q,
		os.Getenv("Keyword"),
		tweet.Text,
		"tweet",
		os.Getenv("JOB_ID"),
		os.Getenv("WORKER_ID"),
		tweet.Id,
	)

	// log.Printf("res : %v", res)
	if err != nil {
		return fmt.Errorf("inserting: %v", err)
	}

	if err != nil {
		return fmt.Errorf("reading ID: %v", err)
	}

	return nil
}