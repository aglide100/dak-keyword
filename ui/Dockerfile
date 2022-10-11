FROM node:16 AS builder

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN apt update && apt install -y wget libvips-dev
RUN apt -y install glib2.0-dev expat gobject-introspection libgtk2.0-doc 
RUN wget https://github.com/libvips/libvips/releases/download/v8.12.2/vips-8.12.2.tar.gz
RUN tar xf vips-8.12.2.tar.gz

RUN cd vips-8.12.2 && ./configure && make && make install && rm -rf vips-8.12.2

RUN npm install

RUN npm run build

RUN npm run export


# RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

FROM nginx:1.21-alpine AS runtime

COPY --from=builder /app/out/ /usr/share/nginx/html

# RUN apk add --update apache2-utils \
#     && rm -rf /var/cache/apk/*

# RUN apk add --no-cache --upgrade bash

#COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /etc/nginx 
CMD nginx -g "daemon off;"

