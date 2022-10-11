#!/bin/bash
# docker stack rm keyword
# docker service rm $(docker service ls -q)

# docker build -t apid -f ./cmd/apid/Dockerfile .
# docker build -t provisioned -f ./cmd/provisioned/Dockerfile .
# docker build -t scraped -f ./cmd/scraped/Dockerfile .
# docker build -t db -f ./cmd/db/Dockerfile .

#cd ui
#docker build -t node .
#cd ..


docker stack deploy -c <(docker-compose -f docker-compose.yml config) keyword
