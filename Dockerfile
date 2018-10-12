FROM node:10-alpine

WORKDIR /app

COPY package.json /app
RUN npm install
COPY . /app
# COPY api /app

CMD npm start
EXPOSE 4000
