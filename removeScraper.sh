#!/bin/bash

docker service rm $(docker service ls | grep scraper_ | awk '{print $2}')
