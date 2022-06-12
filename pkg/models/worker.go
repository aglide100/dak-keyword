package models

import (
	pb_unit_worker "github.com/aglide100/dak-keyword/pb/unit/worker"
	"github.com/go-playground/validator/v10"
)

type Worker struct {
	WorkerId string `validate:"required"`
	Status string `validate:"required"`
	JobId string `validate:"required"`
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
	return &pb_unit_worker.Worker{
		WorkerId: worker.WorkerId,
		Status: worker.Status,
		JobId: worker.JobId,
	}
}