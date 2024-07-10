## Description

Projet Web : Participants :
- Elwin Bassaget

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
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

# Useful commands
generate controller
```
nest generate controller "controller-name"
```
generate module
```
nest generate module "module-name"
```
generate service
```
nest generate service "service-name"
```

# Commandes Prisma

## Automatiser relation via prisma

```
npm run prisma format

```

## Génerer types codegen

```
npm run generate
```

## Apply migrations from Prisma

```
npm run prisma migrate dev --name init
```

## Reset all rows from Database

```
npm run prisma migrate reset
```

## License

Nest is [MIT licensed](LICENSE).
