# syntax=docker/dockerfile:1

FROM node:18-alpine
LABEL maintainer "npandit165@gmail.com"
LABEL build_date "2024-02-06"
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "app.js"]
EXPOSE 3000