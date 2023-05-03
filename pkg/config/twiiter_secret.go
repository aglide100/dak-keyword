package config

import (
	"fmt"
	"os"
	"sync"
)

type TwitterSecret struct {
	ConsumerKey string
	ConsumerSecret string
	AccessSecret string
	AccessToken string
	BearerToken string
	TwitterGetter
}

type TwitterGetter interface {
	GetTwitterConsumerKey() (string)
	GetTwitterConsumerSecret() (string)
	GetTwitterAccessToken() (string)
	GetTwitterAccessSecret() (string)
	GetTwitterBearerToken() (string)
	SaveTwitterSecret() ()
}

var lock = &sync.Mutex{}

var singleInstance *TwitterSecret

func GetInstance() *TwitterSecret {
	if singleInstance == nil {
		lock.Lock()
		defer lock.Unlock()

		if singleInstance == nil {
			singleInstance = &TwitterSecret{
				ConsumerKey : os.Getenv("Key"),
				ConsumerSecret : os.Getenv("Key"),
				AccessSecret : os.Getenv("Key"),
				AccessToken : os.Getenv("Key"),
				BearerToken : os.Getenv("BearerToken"),
			}

			fmt.Println("Created twitter api's single instance")
		} else {
			fmt.Println("Twitter api's single instance is already created")
		}
	}
	
	return singleInstance
}

func (getter *TwitterSecret) GetTwitterConsumerKey() (string) {
	return getter.ConsumerKey
}

func (getter *TwitterSecret) GetTwitterConsumerSecret() (string) {
	return getter.ConsumerSecret
}

func (getter *TwitterSecret) GetTwitterAccessSecret() (string) {
	return getter.AccessSecret
}

func (getter *TwitterSecret) GetTwitterAccessToken() (string) {
	return getter.AccessToken
}

func (getter *TwitterSecret) GetTwitterBearerToken() (string) {
	return getter.BearerToken
}