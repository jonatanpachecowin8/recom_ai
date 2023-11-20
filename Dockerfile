FROM node:18-bullseye

WORKDIR /app

COPY . .

RUN npm install

ENV PORT=3000
EXPOSE 8000

CMD [ "node","server.js" ]