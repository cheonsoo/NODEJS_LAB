const http = require('http');
const express = require('express');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {
  res.send('home');
});

app.get('/hello', (req, res, next) => {
  res.send({ msg: 'hello' });
});

app.get('/items', (req, res, next) => {
  let arr = [];
  for (let i = 0; i < 30; i++) {
    const id = Math.round(Math.random() * 100000);
    arr.push({
      id: id,
      name: `name-${id}`
    });
  }

  res.send({
    data: arr
  });
});

app.listen(port);
