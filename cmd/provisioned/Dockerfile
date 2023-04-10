FROM golang:1.18 AS builder

RUN apt update && apt install -y upx

WORKDIR "/go/src/github.com/aglide100/dak-keyword/"

COPY go.mod .
COPY go.sum .

RUN mkdir -p /opt/bin/provisioned/

RUN go mod tidy \
    && go get -u -d -v ./...

COPY . .

RUN CGO_ENABLED=0 GOOS=linux go build -a -ldflags '-s -w' -o /opt/bin/provisioned/main cmd/provisioned/main.go \    
    && upx --lzma /opt/bin/provisioned/main

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/provisioned /opt/bin/provisioned

CMD [ "/opt/bin/provisioned/main" ]
