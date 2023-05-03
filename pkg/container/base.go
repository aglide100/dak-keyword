package container

import (
	"log"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/docker/docker/client"
)

type Container interface {
	BuildImage() error
	RunImage(respID string) error
	StopImage(respID string) error
	CreateNewScraper(workerId string, jobId string, keyword string, dbConfig *db.DBConfig) error
	CreateNewAnalyzer(workerId string, keyword string, dbConfig *db.DBConfig) error
	CreateNewSimilarity(workerId string, dbConfig *db.DBConfig) error
	EnsureImage(image string) error
	RemoveScraper(id string) error
	RemoveAnalyzer(id string) error
	GetCurrentContainerCount() int 
	GetLimitContainerCount() int
}

type Controller struct {
	cli *client.Client
	currentContainerCount chan int
	containerMaximum int
	twitterToken string
	cQueue *ContainerQueue
	Container
}

func NewController(containerMaximum int, cQueue *ContainerQueue, twitterToken string) (controller *Controller, err error) {
	newController := new(Controller)
	newController.cli, err = client.NewClientWithOpts(client.FromEnv)

	newController.containerMaximum = containerMaximum
	newController.currentContainerCount = make(chan int)
	newController.twitterToken = twitterToken
	newController.cQueue = cQueue

	if err != nil {
		return nil, err
	}
	return newController, nil
}

func (c *Controller) IncreaseCurrentContainerCount() {
	current := <- c.currentContainerCount
	
	current++

	c.currentContainerCount <- current
}


func (c *Controller) DecreaseCurrentContainerCount() {
	current := <- c.currentContainerCount
	
	current--

	if (current < 0) {
		log.Println("current is minus...")
		current = 0
	}

	c.currentContainerCount <- current
}

func (c *Controller) GetLimitContainerCount() int {
	return c.containerMaximum
}

func (c *Controller) GetCurrentContainerCount() int {
	log.Printf("%v", c.currentContainerCount)
	select {
    case current := <-c.currentContainerCount:
        return current
    default:
        return 0
    }
}