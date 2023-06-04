package similarity

import (
	"sort"
	"strings"
)

func CalcTfIdf(documents []string) ([]string, [][]float64, [][]float64) {
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

	return vocabList, tfIdfScores, similarityList
}