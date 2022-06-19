FROM node:16.4-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN apt update

RUN wget https://github.com/libvips/libvips/releases/download/v8.10.6-beta/vips-8.10.6.tar.gz

RUN tar xf vips-8.10.6.tar.gz

RUN cd vips-8.10.6 && ./configure && make && make install && rm -rf vips-8.10.6

RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"
