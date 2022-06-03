package env

import (
	"os"
)

var (
	consumerKey string
	consumerSecret string
	accessSecret string
	accsssToken string
	bearerToken string
)

func (con *Config) SaveTwitterSecret() {
	consumerKey = os.Getenv("Key")
	consumerSecret = os.Getenv("Key")
	accessSecret = os.Getenv("Key")
	accsssToken = os.Getenv("Key")
	bearerToken = os.Getenv("BearerToken")
}

func (con *Config) GetTwitterConsumerKey() (string) {
	return consumerKey
}

func (con *Config) GetTwitterConsumerSecret() (string) {
	return consumerSecret
}

func (con *Config) GetTwitterAccessSecret() (string) {
	return accessSecret
}

func (con *Config) GetTwitterAccessToken() (string) {
	return accsssToken
}

func (con *Config) GetTwitterBearerToken() (string) {
	return bearerToken
}