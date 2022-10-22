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

	return nil
}

func (db *Database) GetArticles(id string) ([]*models.Article, error) {
	const q = `
	SELECT * FROM article
	WHERE "Job_id" = $1
	AND article."Score_max_value" is not null
	`
	
	rows, err := db.Conn.Query(q, id)
	if err != nil {
		return nil, fmt.Errorf("Querying: %v", err)
	}

	var (
		Id string
		Author string
		Keyword string
		Content string
		Platform string
		Score_pos string
		Score_neg string
		Score_neut string
		Score_comp string
		Score_none string
		Score_max_value string
		Score_max_name string
		Job_id string
		Worker_id string	
	)

	var articles []*models.Article

	for rows.Next() {
		err := rows.Scan(
			&Id,
			&Author,
			&Keyword,
			&Content,
			&Platform,
			&Score_pos,
			&Score_neg,
			&Score_neut,
			&Score_comp,
			&Score_none,
			&Score_max_value,
			&Score_max_name,
			&Job_id,
			&Worker_id,

		)
		if err != nil {
			return nil, err
		}

		article := &models.Article{
			Id: Id,
			Author: Author,
			Keyword: Keyword,
			Content: Content,
			Platform: Platform,
			Score_pos: Score_pos,
			Score_neg: Score_neg,
			Score_neut: Score_neut,
			Score_comp: Score_comp,
			Score_none: Score_none,
			Score_max_value: Score_max_value,
			Score_max_name: Score_max_name,
			Job_id: Job_id,
			Worker_id: Worker_id,
		}

		articles = append(articles, article)
	}

	return articles, nil
}