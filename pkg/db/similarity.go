package db

import (
	"github.com/lib/pq"
)

func (db *Database) AddNewCosineSimilarity(articleId, workerId string, score []float64, comparisonId []string) error {
	const q = `
	INSERT INTO cosine_similarity (
		"Article_id", "Worker_id", "Comparison_id", "Score"
	) VALUES ($1, $2, $3, $4)`


	_, err := db.Conn.Exec(q, articleId, workerId, pq.Array(comparisonId), pq.Array(score))
	if err != nil {
		return err
	}

	return nil
}

func (db *Database) AddNewTfIdfScore(workerId, articleId string, wordId int64, vocabId []int, score []float64) error {
	const q = `
	INSERT INTO tfidf (
		"Worker_id", "Article_id", "Vocab_id", "Vocab_column", "Score"
	) VALUES ($1, $2, $3, $4, $5)
	` 
	
	_, err := db.Conn.Exec(q, workerId, articleId, wordId, pq.Array(vocabId), pq.Array(score))
	if err != nil {
		return err
	}

	return nil
}

func (db *Database) GetTfIdfScore() error {

	return nil
}

func (db *Database) AddNewVocabList(vocabList []string, workerId string, jobId string) (int64, error) {
	const q = `
	INSERT INTO vocab_list (
		"Words", "Worker_id", "Job_id"
	) VALUES ($1, $2, $3)
	RETURNING "id"
	`
	// _, err := db.Conn.Exec(q, pq.Array(vocabList), workerId, jobId)
	// if err != nil {
	// 	return err
	// }

	var id int64
	err := db.Conn.QueryRow(q, pq.Array(vocabList), workerId, jobId).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil

	// return nil
}