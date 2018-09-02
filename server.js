import express from 'express';
import React from 'preact-compat';
import render from 'preact-render-to-string';
import { ServerLocation } from 'preact-router';
import fs from 'fs';
import App from './src/js/app';

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync('dist/index.html').toString();
const parts = html.split('Loading App...');

const server = express();

server.use('/dist', express.static('dist'));
server.use((req, res) => {
  const reactMarkup = (
    <ServerLocation url={req.url}>
      <App />
    </ServerLocation>
  );
  res.send(`${parts[0]}${render(reactMarkup)}${parts[1]}`);
  res.end();
});

server.listen(PORT);
console.log(`Listening on Port ${PORT}`);
