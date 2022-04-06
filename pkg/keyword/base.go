package keyword

import (
	"errors"
	"io/ioutil"
	"log"
	"net/http"
)

var providers = []string{"naver", "google", "daum"}

func GetKeywords(keyword string) ([]string, error) {
	naver, err := GetKeyWordSetFromNaver(keyword)
	if err != nil {
		log.Printf("Can't get keywordset from naver! %v", err)
	}
	// log.Printf("naver %v", naver)

	google, err := GetKeyWordSetFromGoogle(keyword)
	if err != nil {
		log.Printf("Can't get keywordset from google! %v", err)
	}
	// log.Printf("google %v", google)

	daum, err := GetKeyWordSetFromDaum(keyword)
	if err != nil {
		log.Printf("Can't get keywordset from daum! %v", err)
	}

	// bing, err := GetKeyWordSetFromBing(keyword)
	// if err != nil {
	// 	log.Printf("Can't get keywordset from bing! %v", err)
	// }

	keywords, err := MergeKeywords(naver, google, daum)
	if err != nil {
		log.Printf("Can't merge keyword! %v", err)
	}

	keywords = MakeSliceUniqe(keywords)

	return keywords, nil
}

func CreateHttpReq(url string) (string, error) {
	log.Printf("Create http req: %s", url)

	req, err := http.NewRequest("GET", url, nil) 
	if err != nil {
		return "", err
	}

	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer res.Body.Close()

	if res.StatusCode != 200 {
		return "", HandleHttpStatusErr(res)
	}

	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return "", err
	}

	return string(data), nil
}

func HandleHttpStatusErr(res *http.Response) (error) {
	data, err := ioutil.ReadAll(res.Body)
	if err != nil {
		return  err
	}

	return errors.New("status code error! "+ string(data) )
}

func MergeKeywords(keywords ...[]string) ([]string, error) {
	checkList := []string{}

	for _, val := range keywords {
		checkList = append(checkList, val...)
	}

	return checkList, nil
}

func MakeSliceUniqe(slice []string) []string {
	keys := make(map[string]struct{})
	res := make([]string, 0)

	for _, val := range slice {
		if _, ok := keys[val]; ok {
			continue
		} else {
			keys[val] = struct{}{}
			res = append(res, val)
		}
	}

	return res
}