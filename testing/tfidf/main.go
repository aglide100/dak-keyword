package main

import (
	"fmt"
	"log"
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

    return math.Log(float64(len(docs)) / float64(df)) // df+1 제거
}

func tfIdf(t string, d string, docs []string) float64 {
    idfValue := idf(t, docs)
    if idfValue < 0 {
        idfValue = 0
    }
    return tf(t, d) * idfValue
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

// 구현 참고
// https://velog.io/@dy6578ekdbs/NLP-%EB%AC%B8%EC%9E%A5-%EC%9C%A0%EC%82%AC%EB%8F%84-%EC%B8%A1%EC%A0%95-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4-%EA%B2%80%EC%B6%9C
// golang에서 형태소분석이 불가능한것은 아니지만 한국어 분석에 있어서, kiwi라이브러리가 이용가능하지만 cpp기반의 api호출기반임으로 직접 설치하여야 하는 문제점이 있음
func main() {

	documents := []string{
		"2개월 이상 월세 연체 시 임대인은 임대차 계약을 해지할 수 있다.",
		"월세를 두번 이상 연체하면 방을 빼셔야 합니다.",
		"계약금은 계약과 동시에 임대인 통장으로 입금하고, 월세도 본 통장으로 매월 입금한다.",
		"월세는 매월 1일에 입금하고, 첫 달은 잔금일로부터 1일까지 계산해서 입금하기로 한다.",
		"월세 외 부가가치세는 별도로 한다.",
		// "Lorem ipsum ", "Lorem ipsum dolor sit amet", 
		// "Fusce non convallis nisi.", 
		// "Maecenas venenatis leo vel tempor semper", 
		// "Donec sed tempor dolor, a fringilla turpis",
	}

	vocab := make(map[string]bool)
	for _, doc := range documents {
		words := strings.Split(doc, " ")
		for _, word := range words {
			log.Println(word)
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
	
	fmt.Println(vocabList)
	for idx, word := range tfIdfScores {
		fmt.Printf("%v", word)
    	for _, score := range tfIdfScores {
    	    fmt.Printf("\t\t%.4f", score[idx])
    	}
    	fmt.Println()
	}

	for i := 0; i < len(documents); i++ {
		for j := i + 1; j < len(documents); j++ {
			similarity := cosineSimilarity(tfIdfScores[i], tfIdfScores[j])
			fmt.Printf("Cosine similarity between document %d and document %d: %f\n", i+1, j+1, similarity)
		}
	}
}