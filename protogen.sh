#!/bin/bash

protoc --go_out=../../.. --go-grpc_out=../../.. pb/unit/**/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/svc/analyzer/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/svc/analyzer/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/svc/manager/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/svc/manager/*.proto

# protoc -I=. --go_out=plugins=grpc:../../.. pb/svc/provision/*.proto
protoc --go_out=../../.. --go-grpc_out=../../.. pb/svc/provision/*.proto

# for react
# protoc \
#  --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
#  --js_out="import_style=commonjs,binary:./ui/gen" \
#  --ts_out="service=grpc-web:./ui/gen" \
#  pb/svc/manager/article.proto

# protoc \
#  --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
#  --js_out="import_style=commonjs,binary:./ui/gen" \
#  --ts_out="service=grpc-web:./ui/gen" \
#  pb/svc/manager/worker.proto

protoc \
 --plugin="protoc-gen-ts=./ui/node_modules/.bin/protoc-gen-ts" \
 --js_out="import_style=commonjs,binary:./ui/gen" \
 --ts_out="service=grpc-web:./ui/gen" \
 pb/svc/manager/job.proto

protoc -I=. pb/svc/manager/article.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/svc/manager/worker.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/svc/manager/job.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/svc/manager/similarity.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen

protoc -I=. pb/unit/article/article.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/unit/worker/worker.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/unit/job/job.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/unit/cosine_similarity/cosine_similarity.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/unit/tfidf/tfidf.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen
protoc -I=. pb/unit/vocab/vocab.proto --js_out=import_style=commonjs:./ui/gen --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./ui/gen

# python3 -m grpc_tools.protoc -I . --python_out=./analyzer --grpc_python_out=./analyzer ./pb/svc/analyzer/analyzer.proto

python3 -m grpc_tools.protoc -I . --python_out=./analyzer --grpc_python_out=./analyzer ./pb/svc/manager/analyzer.proto

# python3 -m grpc_tools.protoc -I . --python_out=./analyzer --grpc_python_out=./analyzer ./pb/unit/**/*.proto
