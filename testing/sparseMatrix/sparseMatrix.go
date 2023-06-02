package main

import (
	"fmt"

	"github.com/aglide100/dak-keyword/pkg/tfidf"
)

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
	_, _, similarityList := tfidf.CalcTfIdf(documents)

	// row, column, result := SparseMatrix(len(documents), len(vocabList), tfidfscore)

	// for i := range result {
	// 	fmt.Printf("%v / ", row[i])

	// 	fmt.Printf("%v / ", column[i])

	// 	fmt.Printf("%v \n", result[i])
	// }

	row, column, result := SparseMatrix(len(documents), len(documents), similarityList)

	for i := range result {
		fmt.Printf("%v / ", row[i])

		fmt.Printf("%v / ", column[i])

		fmt.Printf("%v \n", result[i])
	}

}

func SparseMatrix(n int, m int, array [][]float64) ([]int, []int, []float64) {
	row := make([]int, 0, n*m)
	column := make([]int, 0, n*m)
	value := make([]float64, 0, n*m)

	i := 0
	for i < n {
		j := 0
		for j < m {
			if array[i][j] != 0 {
				row = append(row, i)
				column = append(column, j)
				value = append(value, array[i][j])
			}
			j++
		}
		i++
	}


	return row, column, value
}