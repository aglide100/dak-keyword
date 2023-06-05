package db

import (
	"fmt"
	"os"
	"time"

	"github.com/aglide100/dak-keyword/pkg/models"
)

func (db *Database) RemoveDuplicateArticle(jobID string) error {
	const q =`
	DELETE FROM article
	WHERE "Article_id" IN (
    SELECT "Article_id"
    FROM (
        SELECT "Article_id", row_number() over (PARTITION BY regexp_replace("Content", 'http\S+'
    , '', 'g')) AS A FROM article WHERE "Job_id" = $1 ) B WHERE A > 1)
	`

	_, err := db.Conn.Exec(q, jobID)
	if err != nil {
		return fmt.Errorf("inserting: %v", err)
	}
	
	return nil
}

func (db *Database) WriteTweetToArticle(tweet models.TweetArticle) error {
	count := 0
	const selectSQL = `
	SELECT COUNT(*) FROM article WHERE "Content" = $1 AND "Job_id" = $2
	`

	err := db.Conn.QueryRow(selectSQL, tweet.Text, os.Getenv("JOB_ID")).Scan(&count)
	if err != nil {
	    return fmt.Errorf("selecting: %v", err)
	}

	if count > 0 {
	    return NewDuplicateContent("Duplicate content")
	}

	const q =`
	INSERT INTO article (
		"Keyword",
		"Content",
		"Platform",
		"Job_id",
		"Worker_id",
		"Author",
		"Create_at",
		"Preprocessed_content"
	) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`

	_, err = db.Conn.Exec(q,
		os.Getenv("Keyword"),
		tweet.Text,
		"tweet",
		os.Getenv("JOB_ID"),
		os.Getenv("WORKER_ID"),
		tweet.Id,
		tweet.Created_at,
		tweet.PreprocessedText,
	)

	// log.Printf("res : %v", res)
	if err != nil {
		return fmt.Errorf("inserting: %v", err)
	}

	return nil
}

func (db *Database) GetArticlesByJobID(jobID string) ([]*models.Article, error) {
	const q = `
	SELECT "Article_id", "Author", "Keyword", "Content", "Platform", "Score_happy", "Score_fear", "Score_embarrassed", "Score_sad", "Score_rage", "Score_hurt", "Score_max_value", "Score_max_name", "Create_at", "Job_id", "Worker_id"
	FROM article
	WHERE "Job_id" = $1
	AND article."Score_max_value" is not null
	AND article."Score_max_name" is not null
	ORDER BY article."Create_at" ASC
	`
	
	rows, err := db.Conn.Query(q, jobID)
	if err != nil {
		return nil, err
	}

	var (
		Id string
		Author string
		Keyword string
		Content string
		Platform string
		Score_happy string
		Score_fear string
		Score_embarrassed string
		Score_sad string
		Score_rage string
		Score_hurt string
		Score_max_value string
		Score_max_name string
		Create_at string
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
			&Score_happy,
			&Score_fear,
			&Score_embarrassed,
			&Score_sad,
			&Score_rage,
			&Score_hurt,
			&Score_max_value,
			&Score_max_name,
			&Create_at,
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
			Score_happy: Score_happy,
			Score_fear: Score_fear,
			Score_embarrassed: Score_embarrassed,
			Score_sad: Score_sad,
			Score_rage: Score_rage,
			Score_hurt: Score_hurt,
			Score_max_value: Score_max_value,
			Score_max_name: Score_max_name,
			Create_at: Create_at,
			Job_id: Job_id,
			Worker_id: Worker_id,
		}

		articles = append(articles, article)
	}

	return articles, nil
}

func (db Database) GetArticlesByOneDay(startDate, endDate time.Time, workerId string) ([]*models.SimplifiedArticle, error) {
	const q = `
		SELECT "Article_id", "Job_id", "Preprocessed_content"
		FROM article
		WHERE "Create_at" >= $1 AND "Create_at" < $2
		AND "Worker_id" = $3
	`

	rows, err := db.Conn.Query(q, startDate, endDate, workerId)
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	var ( 
		Id string
		Job_id string
		Preprocessed_content string
	)

	var articles []*models.SimplifiedArticle
	
	for rows.Next() {
		err := rows.Scan(&Id, &Job_id, &Preprocessed_content)
		if err != nil {
			return nil, err
		}
		newArticle := &models.SimplifiedArticle{
			Id: Id,
			Job_id: Job_id,
			Preprocessed_content: Preprocessed_content,
		}
		articles = append(articles, newArticle)
	}

	return articles, nil
}

func (db Database) GetPreprocessedTextByWorkerID(workerID string) ([]*models.SimplifiedArticle, error) {
	const q = `
	SELECT "Article_id", "Job_id", "Preprocessed_content"
	FROM article
	WHERE "Worker_id" = $1
	`
	
	rows, err := db.Conn.Query(q, workerID)
	if err != nil {
		return nil, err 
	}

	var ( 
		Id string
		// Worker_id string
		Job_id string
		Preprocessed_content string
	)
	var articles []*models.SimplifiedArticle

	for rows.Next() {
		err := rows.Scan(
			&Id, 
			// &Worker_id, 
			&Job_id, 
			&Preprocessed_content,
		)
		if err != nil {
			return nil, err
		}

		article := &models.SimplifiedArticle{
			Id: Id,
			Worker_id: workerID,
			Job_id: Job_id,
			Preprocessed_content: Preprocessed_content,
		}
		
		articles = append(articles, article)
	}

	return articles, nil
	
}

func (db *Database) GetArticlesByWorkerID(workerID string) ([]*models.Article, error) {
	const q = `
	SELECT "Article_id", "Author", "Keyword", "Content", "Platform", "Score_happy", "Score_fear", "Score_embarrassed", "Score_sad", "Score_rage", "Score_hurt", "Score_max_value", "Score_max_name", "Create_at", "Job_id", "Worker_id"
	FROM article
	WHERE "Worker_id" = $1
	`
	
	rows, err := db.Conn.Query(q, workerID)
	if err != nil {
		return nil, err
	}

	var (
		Id string
		Author string
		Keyword string
		Content string
		Platform string
		Score_happy string
		Score_fear string
		Score_embarrassed string
		Score_sad string
		Score_rage string
		Score_hurt string
		Score_max_value string
		Score_max_name string
		Create_at string
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
			&Score_happy,
			&Score_fear,
			&Score_embarrassed,
			&Score_sad,
			&Score_rage,
			&Score_hurt,
			&Score_max_value,
			&Score_max_name,
			&Create_at,
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
			Score_happy: Score_happy,
			Score_fear: Score_fear,
			Score_embarrassed: Score_embarrassed,
			Score_sad: Score_sad,
			Score_rage: Score_rage,
			Score_hurt: Score_hurt,
			Score_max_value: Score_max_value,
			Score_max_name: Score_max_name,
			Create_at: Create_at,
			Job_id: Job_id,
			Worker_id: Worker_id,
		}

		articles = append(articles, article)
	}

	return articles, nil
}



func (db *Database) GetCountByHour(jobId string) ([]*models.ArticleCount, error) {
	const q = `
	SELECT to_char("Create_at"::timestamp, 'YYYY-MM-DD HH24') AS "Create_at_time",
       "Score_max_name",
       COUNT(*) AS "Count"
	FROM article
	WHERE "Job_id" = $1
	AND "Score_max_name" IS NOT NULL AND "Score_max_value" IS NOT NULL
	GROUP BY "Create_at_time", "Score_max_name";
	`
	
	rows, err := db.Conn.Query(q, jobId)
	if err != nil {
		return nil, err
	}

	var (
		Create_at_time string
		Count uint32
		Score_max_name string
	)

	var articleCounts []*models.ArticleCount

	for rows.Next() {
		err := rows.Scan(
			&Create_at_time,
			&Score_max_name,
			&Count,
		)
		if err != nil {
			return nil, err
		}

		articleCount := &models.ArticleCount{
			Create_at_time:Create_at_time,
			Count:Count,
			Score_max_name:Score_max_name,
		}

		articleCounts = append(articleCounts, articleCount)
	}

	return articleCounts, nil
}

func (db *Database) GetCountByDay(jobId string) ([]*models.ArticleCount, error) {
	const q = `
	SELECT to_char("Create_at"::timestamp, 'YYYY-MM-DD') AS "Create_at_time",
       "Score_max_name",
       COUNT(*) AS "Count"
	FROM article
	WHERE "Job_id" = $1
	AND "Score_max_name" IS NOT NULL AND "Score_max_value" IS NOT NULL
	GROUP BY "Create_at_time", "Score_max_name";
	`
	
	rows, err := db.Conn.Query(q, jobId)
	if err != nil {
		return nil, err
	}

	var (
		Create_at_time string
		Count uint32
		Score_max_name string
	)

	var articleCounts []*models.ArticleCount

	for rows.Next() {
		err := rows.Scan(
			&Create_at_time,
			&Score_max_name,
			&Count,
		)
		if err != nil {
			return nil, err
		}

		articleCount := &models.ArticleCount{
			Create_at_time:Create_at_time,
			Count:Count,
			Score_max_name:Score_max_name,
		}

		articleCounts = append(articleCounts, articleCount)
	}

	return articleCounts, nil
}