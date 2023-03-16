package container

type ContainerSpec struct {
	WorkerId string
	JobId string
	Keyword string
	Token string
	Type string
}


type ContainerQueue struct {
	queue []ContainerSpec
}


func NewContainerQueue() *ContainerQueue{
	return &ContainerQueue{}
}

func (q *ContainerQueue) Enqueue(cSpec *ContainerSpec) {
	q.queue = append(q.queue, *cSpec)
}

func (q *ContainerQueue) Dequeue() (*ContainerSpec, bool) {
	if len(q.queue) == 0 {
		return nil, false
	}
	v := q.queue[0]
	q.queue = q.queue[1:]
	return &v, true
}

func (q *ContainerQueue) Len() (int) {
	return len(q.queue)
}