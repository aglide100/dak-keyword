package scraper

import (
	"fmt"
	"unicode/utf8"

	"github.com/aglide100/dak-keyword/pkg/models"
)

func RemoveSimilar(arr []models.TweetArticle, threshold float64) []models.TweetArticle {
	var result []models.TweetArticle

	distances := make([][]float64, len(arr))
	for i := range distances {
		distances[i] = make([]float64, len(arr))
		for j := range distances[i] {
			distances[i][j] = Levenshtein(arr[i].Text, arr[j].Text, nil, false)
		}
	}
	deleted := make([]bool, len(arr))
	for i := range arr {
		if deleted[i] {
			continue
		}
		var similar []int
		for j := i + 1; j < len(arr); j++ {
			if !deleted[j] && distances[i][j] <= threshold {
				similar = append(similar, j)
			}
		}

		var maxSim float64 = -1
		var maxSimIdx int = -1
		for _, idx := range similar {
			if distances[i][idx] > maxSim {
				maxSim = distances[i][idx]
				maxSimIdx = idx
			}
		}
		if maxSimIdx != -1 {
			result = append(result, arr[maxSimIdx])
			deleted[maxSimIdx] = true
		} else {
			result = append(result, arr[i])
		}
	}

	return result
}

const minLengthThreshold = 32

func Levenshtein(a string, b string, cost map[[2]string]int, debug bool) float64 {
	if len(a) == 0 {
		return float64(utf8.RuneCountInString(b))
	}

	if len(b) == 0 {
		return float64(utf8.RuneCountInString(a))
	}

	if a == b {
		return 0
	}

	if cost == nil {
        cost = make(map[[2]string]int)
    }

	substitution_cost := func(c1, c2 string) uint16 {
        if c1 == c2 {
            return 0
        }
        return uint16(cost[[2]string{c1, c2}])
    }

	s1 := []rune(a)
	s2 := []rune(b)

	if len(s1) > len(s2) {
		s1, s2 = s2, s1
	}
	lenS1 := len(s1)
	lenS2 := len(s2)

	var x []uint16
	if lenS1+1 > minLengthThreshold {
		x = make([]uint16, lenS1+1)
	} else {
		x = make([]uint16, minLengthThreshold)
		x = x[:lenS1+1]
	}

	for i := 1; i < len(x); i++ {
		x[i] = uint16(i)
	}

	_ = x[lenS1]

	matrix := make([][]uint16, lenS2+1)
	for i := range matrix {
		matrix[i] = make([]uint16, lenS1+1)
		matrix[i][0] = uint16(i)
	}
	for j := range matrix[0] {
		matrix[0][j] = uint16(j)
	}

	for i := 1; i <= lenS2; i++ {
		prev := uint16(i)
		for j := 1; j <= lenS1; j++ {
			current := x[j-1] 
			if s2[i-1] != s1[j-1] {

				substitution := prev + substitution_cost(string(s1[j-1:j]), string(s2[i-1:i]))
				current = min(substitution, x[j-1]+1, x[j]+1)
			}
			x[j-1] = prev
			prev = current

			if debug {
				if j == 1 {
					fmt.Printf("[%2d]", i)
				}
				fmt.Printf("%2d ", matrix[i][j])
			}
			matrix[i][j] = current
		}
		x[lenS1] = prev

		if debug {
			fmt.Println()
		}
	}

	if debug {
		fmt.Println("\n[Result]")
		for i := range matrix {
			fmt.Println(matrix[i])
		}
	}

	return float64(x[lenS1])
}

func min(nums ...uint16) uint16 {
    if len(nums) == 0 {
        return 0
    }
    res := nums[0]
    for _, num := range nums[1:] {
        if num < res {
            res = num
        }
    }
    return res
}