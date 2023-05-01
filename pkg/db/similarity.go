package db

func (db *Database) AddNewCosineSimilarity(doc1id string, doc2id string, score float64) error {
	const q = `
	INSERT INTO cosine_similarity (
		"Doc1_id", "Doc2_id", "Score", "Date"
	) VALUES ($1, $2, $3, now())`
	_, err := db.Conn.Exec(q, doc1id, doc2id, score)
	if err != nil {
		return err
	}

	return nil
}

func (db *Database) AddNewTfidfScore() error {
	const q = `
	INSERT INTO tfidf (
		"Score", "Date", "Worker_id", "Article_id", "Words"
	) VALUES ($1, $2, $3, $4, $5)
	` 
	return nil
}

func (db *Database) AddNewVocabList() error {
	const q = `
	INSERT INTO vocab_list (
		"words", "date"
	)
	`

	return nil
}