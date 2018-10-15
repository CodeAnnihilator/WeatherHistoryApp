# base image
FROM node:9

WORKDIR /app
COPY . ./

RUN npm install babel-cli -S
RUN npm install --silent

EXPOSE 3000
CMD ["npm", "serve"]