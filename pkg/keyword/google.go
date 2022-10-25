package keyword

import (
	"context"
	"log"

	"github.com/groovili/gogtrends"
)

func GetKeyWordSetFromGoogle(keyword string) ([]string, error) {
	ctx := context.Background()
	
	explore, err := gogtrends.Explore(ctx, 
        &gogtrends.ExploreRequest{
            ComparisonItems: []*gogtrends.ComparisonItem{
                {
                    Keyword: "meta",
                    Geo:     "US",
                    Time:    "today 12-m",
                },
            },
            Category: 0, // Programming category
            Property: "",
        }, "EN")
	if err != nil {
		return nil, err
	}
	log.Printf(explore[3].Title)

	result, err := gogtrends.Related(ctx, explore[3], "EN")
	if err != nil {
		return nil, err
	}
	log.Printf(result[0].Query)

	// dailySearches, err := gogtrends.Related(ctx, explore[3], "EN")
	// if err != nil {
	// 	return nil, err
	// }
	// for _, val := range dailySearches {
	// 	log.Printf(val.Query)
	// }

	// relQ, err := gogtrends.Related(ctx, explore[3], "EN")
	// if err != nil {
	// 	return nil, err
	// }
	// for idx, val := range relQ {	
	// 	log.Printf("relQ["+ strconv.Itoa(idx)+ "] : " + val.Query + " / %s" , val.FormattedValue )
	// }
	// // Compare keywords interest
	// compare, err := gogtrends.Explore(ctx, 
    //     &gogtrends.ExploreRequest{
    //         ComparisonItems: []*gogtrends.ComparisonItem{
    //             {
    //                 Keyword: "Go",
    //                 Geo:     "US",
    //                 Time:    "today 12-m",
    //             },
    //             {
    //                 Keyword: "Python",
    //                 Geo:     "US",
    //                 Time:    "today 12-m",
    //             },
    //             {
    //                 Keyword: "PHP",
    //                 Geo:     "US",
    //                 Time:    "today 12-m",
    //             },                               
    //         },
    //         Category: 31, // Programming category
    //         Property: "",
    //     }, "EN")

	return nil, nil
}

// func GetKeyWordSetFromGoogle(keyword string) ([]string, error) {
// 	log.Printf("Stating get keyword set from google....: %s", keyword)

// 	ctx := context.Background()

// 	explore, err := gogtrends.Explore(ctx, 
// 	    &gogtrends.ExploreRequest{
//             ComparisonItems: []*gogtrends.ComparisonItem{
//                 {
//                     Keyword: keyword,
//                     // Geo:     "KR",
//                     Time:    "today 12-m",
//                 },
//             },
//             Category: 0, // may be all?
//             Property: "",
//         }, "ko")

// 	if err != nil {
// 		return nil, err
// 	}

// 	relQ, err := gogtrends.Related(ctx, explore[3], "ko")
// 	if err != nil {
// 		return nil, err
// 	}
// 	// _, err = gogtrends.Related(ctx, explore[2], "ko")


// 	sort.Slice(relQ, func(i, j int) bool {
// 		return relQ[i].FormattedValue < relQ[j].FormattedValue
// 	})

// 	for idx, val := range relQ {	
// 		log.Printf("relQ["+ strconv.Itoa(idx)+ "] : " + val.Query + " / %s" , val.FormattedValue )
// 	}

// 	// strings.Replace(keyword, " ", "+", -1)
// 	if err != nil {
// 		return nil, err
// 	}

// 	result := []string{}

// 	if len(relQ) > 5 {
// 		for _, val := range relQ[0:4] {
// 			result = append(result, val.Query)
// 		}
// 	} else {
// 		for _, val := range relQ {
// 			result = append(result, val.Query)
// 		}
// 	}
	

// 	return result, nil
// }