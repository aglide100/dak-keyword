FROM golang:1.18 AS builder

RUN apt update && apt install -y ca-certificates upx

WORKDIR "/go/src/github.com/aglide100/dak-keyword/"

COPY go.mod .
COPY go.sum .

RUN mkdir -p /opt/bin/similarity/

RUN go mod tidy \
    && go get -u -d -v ./...

COPY . .

# COPY ./keys ./keys

RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-s -w' -o /opt/bin/similarity/main cmd/similarity/main.go \    
    && upx --lzma /opt/bin/similarity/main

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/similarity /opt/bin/similarity
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

CMD [ "/opt/bin/similarity/main" ]
