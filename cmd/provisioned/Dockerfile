FROM golang:1.18 AS builder

COPY ../../ "/go/src/github.com/aglide100/dak-keyword/"
WORKDIR "/go/src/github.com/aglide100/dak-keyword/"

RUN mkdir -p /opt/bin/app/

RUN go mod vendor \
    && go get -u -d -v ./...
    
RUN go build -mod=mod -o /opt/bin/app/ ./cmd/provisioned 

FROM debian:stretch-slim AS runtime
COPY --from=builder /opt/bin/app /opt/bin/app

# RUN apt update && apt install -y ca-certificates
# RUN chmod 644 /usr/local/share/ca-certificates && update-ca-certificates

CMD [ "/opt/bin/app/provisioned" ]
