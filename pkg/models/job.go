package models

import (
	pb_unit_job "github.com/aglide100/dak-keyword/pb/unit/job"
	"github.com/go-playground/validator/v10"
)

type Job struct {
	Id string `validate:"required"`
	Status string `validate:"required"`
	Keyword string `validate:"required"`
	Owner string `validate:"required"`
	Date string `validate:"required"`
}

func ValidateJob(job Job) error {
	v := validator.New()

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