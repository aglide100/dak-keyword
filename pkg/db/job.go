package db

import (
	"fmt"
)


func (db *Database) AddNewJob(id string) error {
	const q =`
	INSERT INTO job (
		id,
		status
	) VALUES ($1, $2)`

	_, err := db.Conn.Exec(q,
		id,
		"pending",
	)

	if err != nil {
		return fmt.Errorf("inserting: %v", err)
	}

	return nil
}

func (db *Database) UpdateJob(id string, status string) error {
	const q =`
	UPDATE job 
	SET 
		status = $1,
	WHERE id = $2
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
	WHERE id = $1
	`

	_, err := db.Conn.Exec(q, id)

	if err != nil {
		return fmt.Errorf("deleting: %v", err)
	}

	return nil
}



