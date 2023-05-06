package db

import (
	"github.com/lib/pq"
)

func (db *Database) AddNewCosineSimilarity(doc1id string, doc2id string, score float64) error {
	const q = `
	INSERT INTO cosine_similarity (
		"Article_id", "Comparison_id", "Score", "Date"
	) VALUES ($1, $2, $3, now())`
	_, err := db.Conn.Exec(q, doc1id, doc2id, score)
	if err != nil {
		return err
	}

	return nil
}

func (db *Database) AddNewTfIdfScore(date string, workerId string, articleId string, wordId string, row []int, column []int, score []float64) error {
	const q = `
	INSERT INTO tfidf (
		"Date", "Worker_id", "Article_id", "Word_id", "Row", "Column", "Score"
	) VALUES ($1, $2, $3, $4, $5)
	` 
	
	_, err := db.Conn.Exec(q, date, workerId, articleId, wordId, pq.Array(row), pq.Array(column), pq.Array(score))
	if err != nil {
		return err
	}

	return nil
}

func (db *Database) GetTfIdfScore() error {

	return nil
}

func (db *Database) AddNewVocabList(vocabList []string, workerId string) error {
	const q = `
	INSERT INTO vocab_list (
		"Words", "Worker_id"
	) VALUES ($1, $2)
	`
	_, err := db.Conn.Exec(q, pq.Array(vocabList), workerId)
	if err != nil {
		return err
	}

	return nil
}