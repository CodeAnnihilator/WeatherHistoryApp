# WeatherHistoryApp

Weather data visualization service, contains information about temperature and precipitation changes for last 120 years in one of certain Russian cities.

live demo: [https://weather-history-app-frontend.herokuapp.com](https://weather-history-app-frontend.herokuapp.com)

## Description

- This is a technical test task for a russian banking company, called Tinkoff [www.tinkoff.ru](www.tinkoff.ru)
- Task requirements are located here: [www.drive.google.com/drive/folders/0B8QiH7KmtQTYN0hPVE5vS2liTDQ](www.drive.google.com/drive/folders/0B8QiH7KmtQTYN0hPVE5vS2liTDQ)

## Get Started

Get latest docker & docker-compose:
1. [https://www.docker.com/](https://www.docker.com/)
2. [https://docs.docker.com/compose/](https://docs.docker.com/compose/)

## Development Mode

Start dev server:
```
./bin/develop.sh
```
Wait for docker to complete, then open [http://localhost:8000](http://localhost:8000)

## Production Mode

Start production server:
```
./bin/deploy.sh
```
Wait for docker to complete, then open [http://localhost:8000](http://localhost:8000)

## Install New Dependencies
```sh
# frontend
./bin/npm_frontend.sh install [package] --save-dev

# backend
./bin/npm_backend.sh install [package] --save
```

## Development/Production Mode Start Manually

If you have some troubles using docker, you can simply start development/production manually, by using npm scripts in frontend/backend folders. Don't forget to install dependencies first, using npm install.

##### Frontend Scripts
These scripts are in /frontend folder

```sh
# start dev server
npm run development

# build/rebuild and start production build
npm start
```

##### Backend Script
This script is in /backend folder
```sh
# start backend. There is no separation in between development and production
npm start
```