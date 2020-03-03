FROM node:latest

EXPOSE 5000
WORKDIR /home/node/app

VOLUME /home/node/app

CMD ["npm","run","start:dev"]

