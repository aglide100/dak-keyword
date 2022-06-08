package db

import "fmt"


func (db *Database) AddNewWorker(workerId string, jobId string, keyword, parentKeyword string) error {
	const q =`
	INSERT INTO worker (
		"Id",
		"Job_id",
		"Keyword",
		"Parent_keyword",
		"Status"
	) VALUES ($1, $2, $3, $4, $5)`

	_, err := db.Conn.Exec(q,
		workerId,
		jobId,
		keyword,
		parentKeyword,
		"pending",
	)

	if err != nil {
		return fmt.Errorf("inserting: %v", err)
	}

	return nil
}

func (db *Database) UpdateWorker(workerId string, status string) error {
	const q =`
	UPDATE worker 
	SET 
		"Status" = $1
	WHERE "Id" = $2
	`
	
	_, err := db.Conn.Exec(q,
		status,
		workerId,
	)

	if err != nil {
		return fmt.Errorf("updating: %v", err)
	}

	return nil
}

func (db *Database) DeleteWorker(workerId string) error {
	const q =`
	DELETE 
	FROM worker
	WHERE "Id" = $1
	`

	_, err := db.Conn.Exec(q, workerId)

	if err != nil {
		return fmt.Errorf("deleting: %v", err)
	}

	return nil
}