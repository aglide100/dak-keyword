package keyword

import (
	"context"
	"log"
	"net/url"
	"sort"

	"github.com/groovili/gogtrends"
)

func GetKeyWordSetFromGoogle(keyword string) ([]string, error) {
	log.Printf("Stating get keyword set from google....: %s", keyword)

	ctx := context.Background()

	explore, err := gogtrends.Explore(ctx, 
	    &gogtrends.ExploreRequest{
            ComparisonItems: []*gogtrends.ComparisonItem{
                {
                    Keyword: url.QueryEscape(keyword),
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

	relQ, err := gogtrends.Related(ctx, explore[3], "ko")
	if err != nil {
		return nil, err
	}

	sort.Slice(relQ, func(i, j int) bool {
		return relQ[i].FormattedValue < relQ[j].FormattedValue
	})

	// for idx, val := range relQ {	
	// 	log.Printf("relQ["+ strconv.Itoa(idx)+ "] : " + val.Query + " / %s" , val.FormattedValue )
	// }

	// strings.Replace(keyword, " ", "+", -1)
	if err != nil {
		return nil, err
	}

	result := []string{}

	if len(relQ) > 7 {
		for _, val := range relQ[0:6] {
			result = append(result, val.Query)
		}
	} else {
		for _, val := range relQ {
			result = append(result, val.Query)
		}
	}
	

	return result, nil
}