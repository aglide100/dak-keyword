package generate

import (
	"math/rand"
	"time"
)

var letterRunes = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
		
func RandStringRunes(n int) string {
	rand.Seed(time.Now().UnixNano())
	b := make([]rune, rand.Intn(20+n))
	for i := range b {
		b[i] = letterRunes[rand.Intn(len(letterRunes))]
	}
	return string(b)
}