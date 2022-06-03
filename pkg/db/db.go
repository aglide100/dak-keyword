package db

import (
	"database/sql"
	"fmt"
)


type DB interface {
	ConnectDB(host string, port int, user, password, dbname string) (*Database, error)

}

type Database struct {
	Conn *sql.DB
}


func ConnectDB(host string, port int, user string, password string, dbname string) (*Database, error) {
	psqInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqInfo)
	if err != nil {
		return nil, fmt.Errorf("connecting to db: %v", err)
	}
	
	err = db.Ping()
	if err != nil {
		return nil, err
	}

	// defer db.Close()

	return &Database{Conn: db}, nil
}
