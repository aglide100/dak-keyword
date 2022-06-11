FROM node:16.4-buster-slim

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install --legacy-peer-deps 
# RUN npm install --no-optional

RUN npm run build

EXPOSE 3000

CMD "npm" "run" "start"
