/**
 * server.js — Artifact3 Express application entry point.
 *
 * This is the single HTTP server process for the Artifact3 tutorial. It builds
 * ONE Express application instance, registers TWO `GET` routes, and listens on a
 * single TCP port.
 *
 * Endpoints:
 *   - GET /              -> 200 OK, plain-text body "Hello world"  (baseline, preserved)
 *   - GET /good-evening  -> 200 OK, plain-text body "Good evening" (new feature)
 *
 * Run:
 *   - `npm start`        (wired to `node server.js` via package.json)
 *   - `node server.js`
 *
 * The server binds the port from `process.env.PORT`, defaulting to 3000.
 *
 * Module system: CommonJS (`require`). package.json does not set
 * `"type": "module"`, so `require` is the correct import mechanism.
 */

'use strict';

// Express is the project's single production dependency (declared as
// "express": "^5.2.1" in package.json and installed under node_modules/).
// It provides the application factory `express()`, route registration via
// `app.get()`, the network listener via `app.listen()`, and the response
// helper `res.send()`.
const express = require('express');

// Instantiate exactly one Express application. Both routes below are
// registered on this single app and served from one process.
const app = express();

// Resolve the listening port. Default to 3000 for the tutorial, but allow an
// override via the PORT environment variable so the server can bind a
// different port when the default is unavailable or when a host platform
// injects its own PORT value.
const PORT = process.env.PORT || 3000;

// Baseline endpoint (preserved): GET / responds with the exact literal
// "Hello world". The string must not be re-cased, punctuated, or wrapped.
app.get('/', (req, res) => {
  res.send('Hello world');
});

// New feature endpoint: GET /good-evening responds with the exact literal
// "Good evening". The string must not be re-cased, punctuated, or wrapped.
app.get('/good-evening', (req, res) => {
  res.send('Good evening');
});

// Start the HTTP server and bind the configured port. The single informational
// log line confirms the server is ready and shows the base URL for the tutorial.
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
