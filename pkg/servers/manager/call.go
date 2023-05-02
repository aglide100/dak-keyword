package manager

import (
	"context"
	"fmt"
	"log"
	"time"

	pb_svc_provision "github.com/aglide100/dak-keyword/pb/svc/provision"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

const maxRetry = 5

func CallMakeScraper(workerId string, jobId string, keyword string, token string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
	if err != nil {
		log.Printf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.CreateScraperReq{
		Keyword: keyword,
		WorkerId: workerId,
		JobId: jobId,
		Token: token,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*10)
	defer cancel()
	
	err = nil
	count := 0
	
	for {
        if count == maxRetry {
            return fmt.Errorf("failed to create scraper after %d retries", maxRetry)
        }

        select {
        case <-ctx.Done():
            // Context에서 에러가 발생한 경우
            if ctx.Err() == context.DeadlineExceeded {
                log.Printf("failed to create scraper: context deadline exceeded, retrying... (%d/%d)", count+1, maxRetry)
            } else {
                log.Printf("failed to create scraper: %v", ctx.Err())
                return ctx.Err()
            }
        default:
            _, err = client.CreateScraper(ctx, in)
            if err != nil {
                log.Printf("failed to create scraper: %v, retrying... (%d/%d)", err, count+1, maxRetry)
                count++
                continue
            }
            return nil
        }
    }


	// if err != nil {
	// 	log.Printf("err in CallMakeScraper %v", err)
	// 	return err
	// }
	// log.Printf("Received msg from Make Scraper %v", res)

	// return nil
}

func CallRemoveScraper(id string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Printf("Can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.RemoveScraperReq{
		Id: id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	
	_, err = client.RemoveScraper(ctx, in)
	if err != nil {
		log.Printf("err in CallRemoveScraper %v", err)
		return err
	}
	// log.Printf("Received msg from Remove Scraper %v", res)

	return nil
}

func CallRemoveAnalyzer(id string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	if err != nil {
		log.Printf("Can't connect grpc service : %v", err)
	}
	defer conn.Close()

	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.RemoveAnalyzerReq{
		Id: id,
	}

	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()

	_, err = client.RemoveAnalyzer(ctx, in)

	if err != nil {
		log.Printf("err in CallRemoveAnalyzer %v", err)
		return err
	}
	// log.Printf("Received msg from Remove Analyzer %v", res)

	return nil
}

func CallMakeAnalysis(id string) (error) {
	conn, err := grpc.Dial(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()), grpc.WithBlock())
	
	if err != nil {
		log.Printf("can't connect grpc server : %v", err)
	}
	defer conn.Close()
	
	client := pb_svc_provision.NewProvisionClient(conn)

	in := &pb_svc_provision.CreateAnalyzerReq{
		ScraperId: id,
	}
	
	ctx, cancel := context.WithTimeout(context.Background(), time.Second*5)
	defer cancel()
	
	err = nil
	count := 0
	for {
		if count == maxRetry {
			break;
		}
		_, err = client.CreateAnalyzer(ctx, in)
		if err != nil {
			log.Println("Can't make analyzer, ", err)
			log.Println("retrying... ", count)
			count++
			continue
		}
		break;
	}

	if err != nil {
		log.Printf("err in CallMakeAnalysis %v", err)
		return err
	}
	// log.Printf("Received msg from Make Analyzer %v", res)

	return nil
}
