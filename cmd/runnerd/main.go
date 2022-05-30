package main

import (
	"context"
	"fmt"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/client"
)


func main() {
	ctx := context.Background()
	
	cli, err := client.NewClientWithOpts(client.FromEnv, client.WithAPIVersionNegotiation())
	if err != nil {
		panic(err)
	}

	//list, err := cli.NodeList(ctx, types.NodeListOptions{}) 
	//if err != nil {
	//	panic(err)
	//}
//
	//num := len(list)
//
	//fmt.Println("count of node is should be : ", num)
	// for _, val := range list {
		// fmt.Println(val)
	// }
	//max := uint64(1)

	//svcSpec := swarm.ServiceSpec{
	//	TaskTemplate: swarm.TaskSpec{
	//		RestartPolicy: &swarm.RestartPolicy{
	//			MaxAttempts: &max,
	//			Condition: swarm.RestartPolicyConditionNone,
	//		},
	//	},
	//}
	//createServiceRes, err := cli.ServiceCreate(ctx, svcSpec, types.ServiceCreateOptions{
		
	////}) 
	//if err != nil {
	//	panic(err)
	//}
	//fmt.Println(createServiceRes)



	//res, err := cli.ServiceList(ctx, types.ServiceListOptions{})
	//if err != nil {
	//	panic(err)
	//}
//
	//for _, val := range res {
	//	fmt.Println(val.Spec.Name)
	//}

	images, err := cli.ImageList(ctx, types.ImageListOptions{})
	if err != nil {
		panic(err)
	}

	for _, image := range images {
		fmt.Println(image.ID)
	}
}