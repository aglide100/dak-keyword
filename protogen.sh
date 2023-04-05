#!/bin/bash

# protoc -I=. --go_out=plugins=grpc:../../.. pb/unit/job/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/unit/job/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/unit/worker/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/unit/worker/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/unit/article/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/unit/article/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/svc/analyzer/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/svc/analyzer/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/svc/manager/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/svc/manager/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/svc/provision/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/svc/provision/*.proto


 protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/svc/**/*.proto

 protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/unit/**/*.proto


protoc -I=. pb/svc/**/*.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen

protoc -I=. pb/unit/**/*.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen

# python3 -m grpc_tools.protoc -I . --python_out=./analyzer --grpc_python_out=./analyzer ./pb/svc/analyzer/analyzer.proto

python3 -m grpc_tools.protoc -I . --python_out=./analyzer --grpc_python_out=./analyzer ./pb/svc/manager/manager.proto

python3 -m grpc_tools.protoc -I . --python_out=./analyzer --grpc_python_out=./analyzer ./pb/unit/**/*.proto

# path=$(pwd)

# cd ./analyzer

# cp ./pb/svc/analyzer/* $path/analyzer
# cp ./pb/svc/manager/* $path/analyzer

# rm -rf ./pb

# cd ..