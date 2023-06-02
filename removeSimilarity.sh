#!/bin/bash

docker service rm $(docker service ls | grep similarity_ | awk '{print $2}')