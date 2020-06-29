FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

RUN apt-get update || : && apt-get install python -y

RUN npm install

COPY . .

EXPOSE 4003

CMD [ "node", "init-server.js" ]
