# base image
FROM node:9

WORKDIR /app
COPY . ./

RUN npm install --silent

EXPOSE 8000
CMD ["npm", "start"]