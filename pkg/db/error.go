package db

type DuplicateContent struct {
    message string
}
func NewDuplicateContent(message string) *DuplicateContent {
    return &DuplicateContent{
        message: message,
    }
}
func (e *DuplicateContent) Error() string {
    return e.message
}

func MakeSomeErr() error {
	return NewDuplicateContent("Duplicate Content")
}