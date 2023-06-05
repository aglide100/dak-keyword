package main

import (
	"errors"
	"fmt"
	"unicode/utf8"
)

func main() {
	// config := &db.DBConfig{
	// 	Host : "192.168.0.28", 
	// 	Port : 8888, 
	// 	User : "table_admin", 
	// 	Password : "HelloWorld", 
	// 	Dbname : "keyword", 
	// 	Sslmode : "disable", 
	// 	// Sslmode : "verify-full", 
	// 	// Sslrootcert : "keys/ca.crt", 
	// 	// Sslkey : "keys/client.key", 
	// 	// Sslsert : "keys/client.crt", 
	// }

	// myDB, err := db.ConnectDB(config)
	// if err != nil {
	// 	log.Println("err :%v", err)
	// }

	// res ,err := myDB.GetArticlesByWorkerID("da0ad51f-71b2-4b6e-b800-3b9b3d378821")
	// if err != nil {
	// 	log.Println("err :%v", err)
	// }

	// log.Println(len(res))
	// result := Levenshtein("하하하하", "호호호호",nil,  true)

	// log.Println(result)

	// res := decompose("아")
	
	// res2 := compose(res[len(res)-1], res[len(res)-1], res[len(res)-1]  )
    
	list := []string{"https://t.co/SDFDSFASR3LDg42cfXR3", "https://t.co/SDFDSFASR3", "fdsfdsfds", "fdsfdsfdsfs", "hvrjsefjll", "4fsjviso"}
	
	list = removeSimilar(list, 10)
    fmt.Println(list) 

}

func removeSimilar(arr []string, threshold float64) []string {
	var result []string

	distances := make([][]float64, len(arr))
	for i := range distances {
		distances[i] = make([]float64, len(arr))
		for j := range distances[i] {
			distances[i][j] = Levenshtein(arr[i], arr[j], nil, false)
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

func decompose(s string) []rune {
	var result []rune

	for _, r := range s {
		// 한글 유니코드 범위 내의 문자인지 확인
		if r >= 0xAC00 && r <= 0xD7A3 {
			// 초성
			cho := ((r - 0xAC00) / 28) / 21
			result = append(result, cho+0x1100)

			// 중성
			jung := ((r - 0xAC00) / 28) % 21
			result = append(result, jung+0x1161)

			// 종성
			jong := (r - 0xAC00) % 28
			if jong != 0 {
				result = append(result, jong+0x11A7)
			}
		} else {
			result = append(result, r)
		}
	}

	return result
}



func compose(chosung, jungsung, jongsung rune) (rune, error) {
    const (
        ChosungBase  rune = 0x1100
        JungsungBase rune = 0x1161
        JongsungBase rune = 0x11A7
        JongsungEnd  rune = 0x11FF
    )

    if chosung < ChosungBase || chosung > ChosungBase+27 {
        return 0, errors.New("invalid chosung")
    }

    if jungsung < JungsungBase || jungsung > JungsungBase+20 {
        return 0, errors.New("invalid jungsung")
    }

    if jongsung != 0 && (jongsung < JongsungBase || jongsung > JongsungEnd) {
        return 0, errors.New("invalid jongsung")
    }

    s := ((chosung-ChosungBase)*21 + (jungsung-JungsungBase)) * 28
    if jongsung != 0 {
        s += jongsung - JongsungBase + 1
    }
    return s, nil
}
