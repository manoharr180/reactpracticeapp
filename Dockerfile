FROM node:16.14.2
# FROM node:16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY   ./ /app/

CMD [ "npm", "start"]