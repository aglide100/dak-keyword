package db

import (
	"strconv"

	"github.com/aglide100/dak-keyword/pb/unit/cosine_similarity"
	"github.com/aglide100/dak-keyword/pb/unit/tfidf"
	"github.com/aglide100/dak-keyword/pb/unit/vocab"
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

func (db *Database) GetVocabList(workerId string) (*vocab.Vocab, error) {
	const q = `
	SELECT "id", "Words", "Job_id" FROM vocab_list
	WHERE "Worker_id" = $1
	`

	var id uint64
	var words []string
	var jobId string

	err := db.Conn.QueryRow(q, workerId).Scan(&id, pq.Array(&words), &jobId)
	if err != nil {
		return nil, err
	}

	return &vocab.Vocab{
		VocabId: id,
		WorkerId: workerId, 
		JobId: jobId,
		Words: words,
	}, err
}

func (db *Database) GetCosineSimilarity(workerId string) (*cosine_similarity.CosineSimilarity, error) {
	const q = `
	SELECT "id", "Column_id", "Row_id", "Score" 
	FROM cosine_similarity
	WHERE "Worker_id" = $1
	`

	var (
		id uint64
		column_id []int64
		row_id []int64
		score []float64
	)

	err := db.Conn.QueryRow(q, workerId).Scan(&id, pq.Array(&column_id), pq.Array(&row_id), pq.Array(&score))
	if err != nil {
		return nil, err
	}

	return &cosine_similarity.CosineSimilarity{
		CosineSimilarityId: id,
		WorkerId: workerId,
		ColumnId: column_id,
		RowId: row_id,
		Score: score,
	}, nil
}

func (db *Database) GetTfidfScore(workerId string) ([]*tfidf.Tfidf, error) {
	const q = `
	SELECT "Article_id", "Vocab_column", "Score", "id", "Vocab_id" FROM tfidf
	WHERE "Worker_id" = $1
	AND array_length("Vocab_column", 1) > 0 
	AND array_length("Score", 1) > 0
	`

	var id uint64
	var vocabId uint64
	var vocabColumns []int64
	var scores []float64
	var articleId int64

	rows, err := db.Conn.Query(q, workerId)
	if err != nil {
		return nil, err
	}

	var tfidfList = []*tfidf.Tfidf{}

	for rows.Next() {
		err := rows.Scan(
			&articleId,
			pq.Array(&vocabColumns),
			pq.Array(&scores),
			&id,
			&vocabId,
		)
		if err != nil {
			return nil, err
		}

		newTfidf := &tfidf.Tfidf{
			WorkerId: workerId,
			ArticleId: articleId,
			VocabColumn: vocabColumns,
			Score: scores,
			Id: id,
			VocabId: vocabId,
		}
		tfidfList = append(tfidfList, newTfidf)

	}
	return tfidfList, nil
}