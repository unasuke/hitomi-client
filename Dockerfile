FROM node:8.1.4-alpine

WORKDIR /app/hitomi-client

COPY package.json package-lock.json /app/hitomi-client/
RUN npm install

COPY . /app/hitomi-client
