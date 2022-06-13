package db

import (
	"fmt"

	"github.com/aglide100/dak-keyword/pkg/models"
)


func (db *Database) AddNewWorker(workerId string, jobId string, keyword, parentKeyword string) error {
	const q =`
	INSERT INTO worker (
		"Worker_id",
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
	WHERE "Worker_id" = $2
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

func (db *Database) GetAllWorker(jobId string) ([]*models.Worker, error) {
	const q =`
	SELECT * FROM worker
	WHERE "Job_id" = $1
	`

	var (
		WorkerId string
		Status string
		JobId string
		Parent_keyword string
		Keyword string
	)

	var workers []*models.Worker

	rows, err := db.Conn.Query(q,
		jobId,
	)
	if err != nil {
		return nil, fmt.Errorf("updating: %v", err)
	}

	for rows.Next() {
		err := rows.Scan(&WorkerId, &Status, &JobId, &Parent_keyword, &Keyword)
		if err != nil {
			return nil, err
		}

		worker := &models.Worker{
			WorkerId: WorkerId,
			Status: Status,
			JobId: jobId,
			Parent_keyword: Parent_keyword,
			Keyword: Keyword,
		}

		workers = append(workers, worker)
	}

	return workers, nil
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