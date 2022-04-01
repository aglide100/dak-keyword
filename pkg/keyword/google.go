package keyword

import (
	"context"
	"log"
	"sort"
	"strconv"

	"github.com/groovili/gogtrends"
)

func GetKeyWordSetFromGoogle(keyword string) ([]string, error) {
	log.Printf("Stating get keyword set from google....: %s", keyword)

	ctx := context.Background()

	explore, err := gogtrends.Explore(ctx, 
	    &gogtrends.ExploreRequest{
            ComparisonItems: []*gogtrends.ComparisonItem{
                {
                    Keyword: keyword,
                    Geo:     "KR",
                    Time:    "today 12-m",
                },
            },
            Category: 0, // may be all?
            Property: "",
        }, "ko")

	if err != nil {
		return nil, err
	}

	// for idx, val := range explore {
	// 	log.Printf("explore["+ strconv.Itoa(idx)+ "] : "+ val.Title)
	// }
	

	// relT, err := gogtrends.Related(ctx, explore[2], "ko")

	// for idx, val := range relT {
	// 	log.Printf("relT["+ strconv.Itoa(idx)+ "] : "+ val.Topic.Title)
	// }

	relQ, err := gogtrends.Related(ctx, explore[3], "ko")
	if err != nil {
		return nil, err
	}

	sort.Slice(relQ, func(i, j int) bool {
		return relQ[i].FormattedValue < relQ[j].FormattedValue
	})

	for idx, val := range relQ {	
		log.Printf("relQ["+ strconv.Itoa(idx)+ "] : " + val.Query + " / %s" , val.FormattedValue )
	}

	// strings.Replace(keyword, " ", "+", -1)
	if err != nil {
		return nil, err
	}

	return nil, nil
}