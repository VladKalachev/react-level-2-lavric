
import express from 'express';
import createApp from './dist-server/entry-server.js';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';

const server = express();

const template = readFileSync('dist/index.html').toString('utf-8');

server.use(express.static('dist'));

server.get('*', (req, res) => {
  const app = createApp();
  const html = renderToString(app)
  const page = template.replace('<!--ssr-->', html);
  res.end(page);
});

server.listen(8000)