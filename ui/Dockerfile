FROM ghcr.io/aglide100/docker-node-with-libvips--16:latest AS builder

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

RUN npm run build

RUN npm run export

# RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

FROM nginx:1.21-alpine AS runtime

COPY --from=builder /app/out/ /usr/share/nginx/html

# RUN apk add --update apache2-utils \
#     && rm -rf /var/cache/apk/*

RUN apk add --no-cache --upgrade bash
COPY nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /etc/nginx/template/env/

COPY env.template /etc/nginx/template/env/
COPY entrypoint.sh .

RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

WORKDIR /etc/nginx 
CMD nginx -g "daemon off;"