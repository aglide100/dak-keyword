package env

import (
	"log"

	"github.com/joho/godotenv"
)

type Config struct {
	CommonConfig
	TwiiterGetter
}

type CommonConfig interface {
	LoadEnv() (error)
}


type TwiiterGetter interface {
	GetTwitterConsumerKey() (string)
	GetTwitterConsumerSecret() (string)
	GetTwitterAccessToken() (string)
	GetTwitterAccessSecret() (string)
	GetTwitterBearerToken() (string)
	SaveTwitterSecret() ()
}


type EnvConfig interface {
	LoadEnv() (error)
}


func LoadEnv(path string) (*Config, error) {
	// path := ".env"
	// os.Clearenv()

	err := godotenv.Load(path)
	// log.Printf("Load env file! :%v", path)
	if err != nil {
		log.Printf("Can't load .env file!: %s", err)
		return &Config{}, err
	}

	return &Config{}, nil
}