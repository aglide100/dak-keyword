#!/bin/bash

docker service rm $(docker service ls | grep analyzer_ | awk '{print $2}')