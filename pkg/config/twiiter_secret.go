package config

import (
	"os"
)

type TwiiterConfig struct {
	consumerKey string
	consumerSecret string
	accessSecret string
	accsssToken string
}

var (
	consumerKey string
	consumerSecret string
	accessSecret string
	accsssToken string
)

func (con *Config) SaveTwitterSecret() {
	// con.TwiiterConfig{
	
	// need to fix...
	consumerKey = os.Getenv("Key")
	consumerSecret = os.Getenv("Key")
	accessSecret = os.Getenv("Key")
	accsssToken = os.Getenv("Key")
	
	// consumerKey : os.Getenv("Key"),
	// consumerSecret : os.Getenv("Key"),
	// accessSecret : os.Getenv("Key"),
	// accsssToken : os.Getenv("Key"),
	// }
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