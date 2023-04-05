package main

import (
	"log"
)

func main() {
	err := MakeSomeErr()
	if err != nil {
		switch err.(type) {
		case *ErrorTesting:
			log.Printf("!! %v", err.Error())
		default:
			log.Println("err :%v", err)
		}
	}
}

type ErrorTesting struct {
    message string
}
func NewErrorTesting(message string) *ErrorTesting {
    return &ErrorTesting{
        message: message,
    }
}
func (e *ErrorTesting) Error() string {
    return e.message
}

func MakeSomeErr() error {
	return NewErrorTesting("Error testing")
}