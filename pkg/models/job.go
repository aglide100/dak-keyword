package models

import (
	pb_unit_job "github.com/aglide100/dak-keyword/pb/unit/job"
	"github.com/go-playground/validator/v10"
)

type Job struct {
	Id string 
	Status string 
	Keyword string `validate:"required"`
	Owner string `validate:"required"`
	Date string 
}


func ValidateJob(job Job) error {
	v := validator.New()

	// const layout = "2006-01-02T03:04:05.999Z"

	// _, err := time.Parse(layout, job.Date)
	// if err != nil {
	// 	fmt.Println(err)
	// 	return err
	// }

	err := v.Struct(job)
	if err != nil {
		return err
	}

	return nil
}

func JobToPbUnit(job *Job) (*pb_unit_job.Job) {
	return &pb_unit_job.Job{
		Id: job.Id,
		Status: job.Status,
		Keyword: job.Keyword,
		Owner: job.Owner,
		Date: job.Date,
	}
} 