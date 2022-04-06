package container


type Container interface {
	BuildImage() error
	RunImage(respID string) error
	StopImage(respID string) error

}