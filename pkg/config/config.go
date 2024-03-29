package config

import (
	"io/ioutil"
	"log"

	"github.com/joho/godotenv"
)

type CommonConfig interface {
	LoadEnv() (error)
}

type Config struct {
	CommonConfig
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

func ReadEnvList() ([]string, error) {
	files, err := ioutil.ReadDir("./env")
	if err != nil {
		return nil, err
	}
	
	var list []string;
	for _, f := range files {
		list = append(list, f.Name())
	}

	return list, nil
}