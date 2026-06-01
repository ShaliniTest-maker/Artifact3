# Artifact3

A minimal Node.js tutorial server built with [Express](https://expressjs.com/) that exposes two plain-text HTTP `GET` endpoints. It is a small, beginner-friendly example of standing up a single Express application that serves multiple routes from one process.

## Prerequisites

- [Node.js](https://nodejs.org/) **18 or higher** (required by Express 5).
- **npm** — bundled with Node.js; used to install dependencies and run the server.

## Installation

Install the project dependencies from the repository root:

```bash
npm install
```

This installs Express (`^5.2.1`) and generates `package-lock.json` together with the `node_modules/` directory.

## Running the server

Start the server with:

```bash
npm start
```

This runs `node server.js`. By default the server listens on `http://localhost:3000`. You can override the port by setting the `PORT` environment variable:

```bash
PORT=8080 npm start
```

## Endpoints

| Method | Path | Response |
| ------ | --------------- | -------------- |
| `GET` | `/` | `Hello world` |
| `GET` | `/good-evening` | `Good evening` |

With the server running, you can exercise both endpoints using `curl`:

```bash
curl http://localhost:3000/             # -> Hello world
curl http://localhost:3000/good-evening # -> Good evening
```
