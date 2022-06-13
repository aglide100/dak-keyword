package models

import (
	"log"

	pb_unit_worker "github.com/aglide100/dak-keyword/pb/unit/worker"
	"github.com/go-playground/validator/v10"
)

type Worker struct {
	WorkerId string `validate:"required"`
	Status string `validate:"required"`
	JobId string `validate:"required"`
	Parent_keyword string
	Keyword string
}

func ValidateWorker(worker Worker) error {
	v := validator.New()

	err := v.Struct(worker)
	if err != nil {
		return err
	}

	return nil
}

func WorkerToPbUnit(worker *Worker) (*pb_unit_worker.Worker) {
	log.Printf("worker :%v", worker)
	return &pb_unit_worker.Worker{
		WorkerId: worker.WorkerId,
		Status: worker.Status,
		Keyword: worker.Keyword,
		JobId: worker.JobId,
	}
}