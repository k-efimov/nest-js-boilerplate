## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.  
Repository for **Dunice Matrix**

## Installation

```bash
$ npm install
```  
  
## Preparing production mode

You need to fill .env file with the following info  

```bash
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_MATRIX=<name of the DB>
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# create database
$ npm run db:create

# run migrations
$ npm run db:migrate

# run seeders
$ npm run db:seed-dev

# reset database
$ npm run db:reset

# drop database
$ npm run db:drop
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```  
  
##Swagger API docs  

This project uses the Nest swagger module for API documentation. NestJS Swagger - www.swagger.io
Swagger docs will be available at localhost:3000/api
