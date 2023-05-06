package container

import (
	"errors"
	"log"
)

type ContainerSpec struct {
	WorkerId string
	JobId string
	Keyword string
	Token string
	Type string
}

type ContainerQueue struct {
	running chan *ContainerSpec
	queue chan *ContainerSpec
	currentContainerCount chan int
	containerMaximum int
	length int
}


func NewContainerQueue(length int, containerMaximum int) *ContainerQueue{
	return &ContainerQueue{
		// when using unbuffered channel, logic is blocked..
		queue: make(chan *ContainerSpec, length),
		running: make(chan *ContainerSpec, length),
		currentContainerCount: make(chan int, containerMaximum),
		containerMaximum: containerMaximum,
		length: length,
	}
}

func (q *ContainerQueue) EnqueueFromRunning(cSpec *ContainerSpec) error {
	if (len(q.running) > q.containerMaximum) {
		log.Println("Running is full")
		return errors.New("Running is full...")
	} else {
		q.running <- cSpec
		return nil
	}
}

func (q *ContainerQueue) DequeueFromRunning() (*ContainerSpec) {
	select {
	case cSpec := <- q.running:
		return cSpec
	default: 
		log.Println("Running queue is empty")
		return nil
	}
}

func (q *ContainerQueue) EnqueueFromQueue(cSpec *ContainerSpec) error {
	if (len(q.running) > q.containerMaximum) {
		log.Println("Queue is full")
		return errors.New("Queue is full...")
	} else {
		q.queue <- cSpec
		return nil
	}
}

func (q *ContainerQueue) DequeueFromQueue() (*ContainerSpec) {
	select {
	case cSpec := <- q.queue:
		return cSpec
	default: 
		log.Println("Queue is empty")
		return nil
	}
}



// func (q *ContainerQueue) Enqueue(cSpec *ContainerSpec) {
// 	if len(q.queue) == q.length {
// 		log.Println("Queue is full...")
// 		return
// 	}

// 	select {
// 	case current := <-q.currentContainerCount:
// 		if current >= q.containerMaximum {
// 			q.currentContainerCount <- current
// 			log.Println("Container queue is full")
// 			return
// 		}
// 		current++
// 		q.currentContainerCount <- current
// 	default:
// 		q.currentContainerCount <- 1
// 	}

// 	q.queue <- cSpec
// }

// func (q *ContainerQueue) Dequeue() (*ContainerSpec, bool) {
// 	select {
// 	case current := <-q.currentContainerCount:
// 		current--
// 		q.currentContainerCount <- current
// 	default:
// 		q.currentContainerCount <- 1
// 	}

// 	select {
// 	case cSpec := <-q.queue:
// 		return cSpec, true
// 	default:
// 		return nil, false
// 	}
// }

func (q *ContainerQueue) LenRunning() int {
	return len(q.running)
}

func (q *ContainerQueue) LenQueue() int {
	return len(q.queue)
}

func (q *ContainerQueue) GetLimitContainerCount() int {
	return q.containerMaximum
}

func (q *ContainerQueue) GetCurrentContainerCount() int {
	select {
	case current := <-q.currentContainerCount:
		q.currentContainerCount <- current
		return current
	default:
		return 0
	}
}