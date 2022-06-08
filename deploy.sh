#!/bin/bash
# docker stack rm keyword
docker service rm $(docker service ls -q)

docker build -t apid -f ./cmd/apid/Dockerfile .
docker build -t provisioned -f ./cmd/provisioned/Dockerfile .
docker build -t scraped -f ./cmd/scraped/Dockerfile .
docker build -t db -f ./cmd/db/Dockerfile .

docker stack deploy --compose-file docker-compose.yml keyword
