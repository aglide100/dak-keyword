FROM golang:1.18 AS builder

COPY . "/go/src/github.com/aglide100/dak-keyword/"
WORKDIR "/go/src/github.com/aglide100/dak-keyword/"

RUN mkdir -p /opt/bin/app/

RUN go mod vendor \
    && go get -u -d -v ./...
    
RUN go build -mod=mod -o /opt/bin/app/ ./cmd/scraped

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/app /opt/bin/app

COPY ./keys ./keys

RUN apt update && apt install -y ca-certificates
#WORKDIR /opt/bin/app/
CMD [ "/opt/bin/app/scraped" ]
