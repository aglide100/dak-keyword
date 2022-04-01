package keyword

import (
	"log"
	"io/ioutil"
	"net/http"
	"errors"
)

func CreateHttpReq(url string) (string, error) {
	log.Printf("Create http req: %s", url)

	req, err := http.NewRequest("GET", url, nil) 
	if err != nil {
		return "", err
	}

	// print header
	// if reqHeadersBytes, err := json.Marshal(req.Header); err != nil {
	// 	log.Println("Could not Marshal Req Headers")
	// } else {
	// 	log.Println(string(reqHeadersBytes))
	// }

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