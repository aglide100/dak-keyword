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

    return math.Log(float64(len(docs)) / float64(df)) // df+1 제거
}

func tf(t string, d string) float64 {
	return float64(strings.Count(d, t))
}

func tfIdf(t string, d string, docs []string) float64 {
    idfValue := idf(t, docs)
    if idfValue < 0 {
        idfValue = 0
    }
    return tf(t, d) * idfValue
}