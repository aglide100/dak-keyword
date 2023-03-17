package config

import (
	"os"
)

var (
	ConsumerKey string
	ConsumerSecret string
	AccessSecret string
	AccessToken string
	BearerToken string
)

// 옵션? 쿼터량
func (con *Config) SaveTwitterSecret() {
	ConsumerKey = os.Getenv("Key")
	ConsumerSecret = os.Getenv("Key")
	AccessSecret = os.Getenv("Key")
	AccessToken = os.Getenv("Key")
}

func (con *Config) GetTwitterConsumerKey() (string) {
	return ConsumerKey
}

func (con *Config) GetTwitterConsumerSecret() (string) {
	return ConsumerSecret
}

func (con *Config) GetTwitterAccessSecret() (string) {
	return AccessSecret
}

func (con *Config) GetTwitterAccessToken() (string) {
	return AccessToken
}

func (con *Config) GetTwitterBearerToken() (string) {
	return BearerToken
}