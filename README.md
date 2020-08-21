# DD-trace with fastify3 problem repo

## Description

Sample repo demonstrating a problem where dd-trace negatively interferes with fastify3.

## Installation

```bash
$ yarn install
$ yarn dev
```

## expected

Fastify should boot up just as usual

## Actual

dd-trace patches fastify so that it no longer works

```
init tracer
creating fastify

/Users/rainer/git/fastify-dd-trace-bug/src/app.ts:7
const app = fastify();
                   ^
TypeError: fastify_1.default is not a function
    at Object.<anonymous> (/Users/rainer/git/fastify-dd-trace-bug/src/app.ts:7:20)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Module.m._compile (/Users/rainer/git/fastify-dd-trace-bug/node_modules/ts-node/src/index.ts:858:23)
    at Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/rainer/git/fastify-dd-trace-bug/node_modules/ts-node/src/index.ts:861:12)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at Module.require (/Users/rainer/git/fastify-dd-trace-bug/node_modules/require-in-the-middle/index.js:43:24)
    at require (internal/modules/cjs/helpers.js:74:18)
```
