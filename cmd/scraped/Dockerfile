FROM golang:1.18 AS builder

RUN apt update && apt install -y ca-certificates upx

WORKDIR "/go/src/github.com/aglide100/dak-keyword/"

COPY go.mod .
COPY go.sum .

RUN mkdir -p /opt/bin/scraped/

RUN go mod tidy \
    && go get -u -d -v ./...

COPY . .

# COPY ./keys ./keys

RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-s -w' -o /opt/bin/scraped/main cmd/scraped/main.go \    
    && upx --lzma /opt/bin/scraped/main

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/scraped /opt/bin/scraped
COPY --from=builder /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/

CMD [ "/opt/bin/scraped/main" ]
