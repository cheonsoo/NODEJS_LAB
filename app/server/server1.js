const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer((req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.end();
});

server.listen(3000, '127.0.0.1', () => {
  console.log('server is listen on port 3000');
});

app.listen(3000);

app.get("/", (req, res) => {
  res.send('/');
});

app.get("/test", (req, res) => {
  res.send('/test');
});
