#!/bin/bash
docker build -t apid -f ./cmd/apid/Dockerfile .
docker build -t provisioned -f ./cmd/provisioned/Dockerfile .
docker build -t scraped -f ./cmd/scraped/Dockerfile .

