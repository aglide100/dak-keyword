package main

import (
	"fmt"
	"log"

	"github.com/aglide100/dak-keyword/pkg/db"
	"github.com/aglide100/dak-keyword/pkg/models"
)

func main() {
	config := &db.DBConfig{
		Host : "192.168.0.28", 
		Port : 8888, 
		User : "table_admin", 
		Password : "HelloWorld", 
		Dbname : "keyword", 
		Sslmode : "disable", 
		// Sslmode : "verify-full", 
		// Sslrootcert : "keys/ca.crt", 
		// Sslkey : "keys/client.key", 
		// Sslsert : "keys/client.crt", 
	}

	myDB, err := db.ConnectDB(config)
	if err != nil {
		log.Println("err :%v", err)
	}

	res ,err := myDB.GetArticlesByWorkerID("e88c84bf-5cc4-4720-8614-6f4b3144a866")
	if err != nil {
		log.Println("err :%v", err)
	}

	var minDistance int = -1
    var minPair [2]*models.Article

    for i, a1 := range res {
        for j, a2 := range res {
            if i >= j {
                continue
            }
            distance := editDistance(a1.Content, a2.Content)
            if minDistance == -1 || distance < minDistance {
                minDistance = distance
                minPair = [2]*models.Article{a1, a2}
            }
        }
    }

    if minDistance == -1 {
        fmt.Println("No pairs found")
    } else {
        fmt.Printf("Min distance: %d\n", minDistance)
        fmt.Printf("Min pair: %v / %v\n", minPair[0].Content, minPair[1].Content)
    }
}


func editDistance(word1, word2 string) int {
    len1, len2 := len(word1), len(word2)
    dp := make([][]int, len1+1)
    for i := 0; i <= len1; i++ {
        dp[i] = make([]int, len2+1)
        dp[i][0] = i
    }
    for j := 0; j <= len2; j++ {
        dp[0][j] = j
    }

    for i := 1; i <= len1; i++ {
        for j := 1; j <= len2; j++ {
            if word1[i-1] == word2[j-1] {
                dp[i][j] = dp[i-1][j-1]
            } else {
                dp[i][j] = min(dp[i-1][j-1], dp[i][j-1], dp[i-1][j]) + 1
            }
        }
    }

    return dp[len1][len2]
}

func min(nums ...int) int {
    min := nums[0]
    for _, num := range nums {
        if num < min {
            min = num
        }
    }
    return min
}