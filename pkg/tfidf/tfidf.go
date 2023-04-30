package tfidf

import (
	"math"
	"sort"
	"strings"
)

func tf(t string, d string) float64 {
	return float64(strings.Count(d, t))
}

func idf(t string, docs []string) float64 {
	df := 0
	for _, doc := range docs {
		if strings.Contains(doc, t) {
			df++
		}
	}

	return math.Log(float64(len(docs)) / float64(df+1))
}

func tfIdf(t string, d string, docs []string) float64 {
	return tf(t, d) * idf(t, docs)
}

func cosineSimilarity(vec1 []float64, vec2 []float64) float64 {
    var vec1Size float64 = 0.0
    var vec2Size float64 = 0.0

    for _, val := range vec1 {
        vec1Size += val * val
    }
    vec1Size = math.Sqrt(vec1Size)

    for _, val := range vec2 {
        vec2Size += val * val
    }
    vec2Size = math.Sqrt(vec2Size)

    dotProduct := 0.0
    for i, val := range vec1 {
        dotProduct += val * vec2[i]
    }

    return dotProduct / (vec1Size * vec2Size)
}

func CalcTfIdf(documents []string) ([]string, [][]float64) {
	vocab := make(map[string]bool)
	for _, doc := range documents {
		words := strings.Split(doc, " ")
		for _, word := range words {
			vocab[word] = true
		}
	}

	vocabList := make([]string, 0, len(vocab))
	for word := range vocab {
		vocabList = append(vocabList, word)
	}

	sort.Strings(vocabList)
	
	N := len(documents)
	tfIdfScores := make([][]float64, N)
	for i, doc := range documents {
		tfIdfScores[i] = make([]float64, len(vocabList))
		for j, word := range vocabList {
			tfIdfScores[i][j] = tfIdf(word, doc, documents)
		}
	}
	
	similarityList := make([][]float64, N)
	for i := range similarityList {
		similarityList[i] = make([]float64, N)
	}
	

	for i := 0; i < N; i++ {
		for j := 0; j < N; j++ {
			if (i == j) {
				similarityList[i][j] = 1
			} else {
				similarityList[i][j] = cosineSimilarity(tfIdfScores[i], tfIdfScores[j])
			}
		}
	}

	return vocabList, similarityList
}