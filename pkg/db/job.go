package db

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/aglide100/dak-keyword/pkg/models"
)


func (db *Database) AddNewJob(jobId string, keyword string, owner string) error {
	const q =`
	INSERT INTO job (
		"Id", "Status", "Keyword", "Owner", "Date"
	) VALUES ($1, $2, $3, $4, now())`

	_, err := db.Conn.Exec(q,
		jobId,
		"add scraper",
		keyword,
		owner,
	)

	if err != nil {
		return fmt.Errorf("inserting: %v", err)
	}

	return nil
}

func (db *Database) GetJob(jobId string) (*models.Job, error) {
	const q =`
	SELECT * FROM job 
	WHERE "Id" = $1`

	job := new(models.Job)

	err := db.Conn.QueryRow(q, jobId).Scan(
		&job.Id,
		&job.Status,
		&job.Keyword,
		&job.Owner,
		&job.Date,
	)
	if err == sql.ErrNoRows {
		return nil, err
	}

	if err != nil {
		return nil, err
	}

	return job, nil
}

func (db *Database) GetAllJob() ([]*models.Job, error) {
	const q = `
	SELECT 
	("Id", "Status", "Keyword", "Owner", "Date") FROM job`

	var (
		Id string
		Status string
		Keyword string
		Owner string
		Date string
	)

	var jobs []*models.Job

	rows, err := db.Conn.Query(q)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		err := rows.Scan(&Id, &Status, &Keyword, &Owner, &Date)
		if err != nil {
			return nil, err
		}

		job := &models.Job{
			Id: Id,
			Status: Status,
			Keyword: Keyword,
			Owner: Owner,
			Date: Date,
		}

		log.Println(job)

		jobs = append(jobs, job)
	}
	
	return jobs, nil
}

func (db *Database) UpdateJob(id string, status string) error {
	const q =`
	UPDATE job 
	SET 
		"Status" = $1
	WHERE "Id" = $2
	`
	
	_, err := db.Conn.Exec(q,
		status,
		id,
	)

	if err != nil {
		return fmt.Errorf("updating: %v", err)
	}

	return nil
}

func (db *Database) DeleteJob(id string) error {
	const q =`
	DELETE 
	FROM job
	WHERE "Id" = $1
	`

	_, err := db.Conn.Exec(q, id)

	if err != nil {
		return fmt.Errorf("deleting: %v", err)
	}

	return nil
}
func (db *Database) GetAllReRunJob() ([]string, error) {
	const q = `
	SELECT ("Id") FROM job
	WHERE "AutoReRun" = false;`

	var (
		Id string
	)

	var jobs []string

	rows, err := db.Conn.Query(q)
	if err != nil {
		return nil, err
	}

	for rows.Next() {
		err := rows.Scan(&Id)
		if err != nil {
			return nil, err
		}

		jobs = append(jobs, Id)
	}
	
	return jobs, nil
}