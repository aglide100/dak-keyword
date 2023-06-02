package db

import (
	"strconv"

	"github.com/lib/pq"
)

func (db *Database) AddNewCosineSimilarity(workerId, jobId string, score []float64, rowId, columnId []string) error {
	const q = `
	INSERT INTO cosine_similarity (
		"Worker_id", "Job_id", "Row_id", "Column_id", "Score"
	) VALUES ($1, $2, $3, $4, $5)
	ON CONFLICT ("Worker_id") DO UPDATE SET
		"Score" = EXCLUDED."Score"
	RETURNING "id"
	`

	_, err := db.Conn.Exec(q, workerId, jobId, pq.Array(rowId), pq.Array(columnId), pq.Array(score))
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
	ON CONFLICT ("Article_id") DO NOTHING;
	` 

	// pg is can't convert floating point at pq.Array
	stringScores := make([]string, len(score))
	for i, s := range score {
		stringScores[i] = strconv.FormatFloat(s, 'f', -1, 64)
	}

	_, err := db.Conn.Exec(q, workerId, articleId, wordId, pq.Array(vocabId), pq.Array(stringScores))
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
	ON CONFLICT ("Worker_id") DO UPDATE SET
    	"Words" = excluded."Words",
    	"Job_id" = excluded."Job_id"
	RETURNING "id"
	`

	var id int64
	err := db.Conn.QueryRow(q, pq.Array(vocabList), workerId, jobId).Scan(&id)
	if err != nil {
		return 0, err
	}

	return id, nil
}