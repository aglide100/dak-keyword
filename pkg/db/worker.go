package db

import (
	"fmt"

	"github.com/aglide100/dak-keyword/pkg/models"
)


func (db *Database) AddNewWorker(workerId string, jobId string, keyword string) error {
	const q =`
	INSERT INTO worker (
		"Worker_id",
		"Job_id",
		"Keyword",
		"Status",
		"Update_at",
		"Create_at"
	) VALUES ($1, $2, $3, $4, now(), now())`

	_, err := db.Conn.Exec(q,
		workerId,
		jobId,
		keyword,
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
		"Status" = $1,
		"Update_at" = now()
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
		Worker_id string
		Status string
		Job_id string
		Keyword string
		Update_at string
		Create_at string
	)

	var workers []*models.Worker

	rows, err := db.Conn.Query(q,
		jobId,
	)
	if err != nil {
		return nil, fmt.Errorf("updating: %v", err)
	}

	for rows.Next() {
		err := rows.Scan(&Worker_id, &Keyword, &Status, &Job_id, &Update_at)
		if err != nil {
			return nil, err
		}

		worker := &models.Worker{
			WorkerId: Worker_id,
			JobId: Job_id,
			Keyword: Keyword,
			Status: Status,
			UpdateAt: Update_at,
			CreateAt: Create_at,
		}
		
		workers = append(workers, worker)
	}

	return workers, nil
}

func (db *Database) DeleteWorker(workerId string) error {
	const q =`
	DELETE 
	FROM worker
	WHERE "Worker_id" = $1
	`

	_, err := db.Conn.Exec(q, workerId)

	if err != nil {
		return fmt.Errorf("deleting: %v", err)
	}

	return nil
}


func (db *Database) GetWorkerCreateTime(workerId string) error {
	const q =`
	SELECT  
	FROM worker
	WHERE "Worker_id" = $1
	`

	_, err := db.Conn.Exec(q, workerId)

	if err != nil {
		return fmt.Errorf("deleting: %v", err)
	}

	return nil
}