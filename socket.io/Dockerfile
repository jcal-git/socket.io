FROM node:alpine 

WORKDIR /src/app

COPY . .

RUN npm i

EXPOSE 4001

CMD ["node", "boot.js"]