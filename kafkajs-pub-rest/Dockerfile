FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN apk add g++ make python

RUN npm install

COPY . .

EXPOSE 9000

CMD [ "node", "boot.js" ]
