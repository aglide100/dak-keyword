package similarity

import (
	"math"
	"strings"
)

func idf(t string, docs []string) float64 {
	df := 0
	for _, doc := range docs {
		if strings.Contains(doc, t) {
			df++
		}
	}

	return math.Log(float64(len(docs)) / float64(df+1))
}

func tf(t string, d string) float64 {
	return float64(strings.Count(d, t))
}


func tfIdf(t string, d string, docs []string) float64 {
	return tf(t, d) * idf(t, docs)
}