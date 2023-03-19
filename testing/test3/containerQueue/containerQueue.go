package containerQueue

type ContainerSpec struct {
	WorkerId string
	Keyword string
}


type ContainerQueue struct {
	queue chan *ContainerSpec
}


func NewContainerQueue() *ContainerQueue{
	return &ContainerQueue{
		queue: make(chan *ContainerSpec, 100),
	}
}

func (q *ContainerQueue) Enqueue(cSpec *ContainerSpec) {
	q.queue <- cSpec
}

func (q *ContainerQueue) Dequeue() (*ContainerSpec, bool) {
	select {
    case cSpec := <-q.queue:
        return cSpec, true
    default:
        return nil, false
    }
}

func (q *ContainerQueue) Len() (int) {
	return len(q.queue)
}