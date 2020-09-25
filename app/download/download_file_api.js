const http = require("http");
const express = require("express");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const app = express();

app.get("/download", ( req, res, next ) => {
  res.setHeader('Content-disposition', 'attachment; filename=test.png');
  res.setHeader('Content-type', 'image/png');
  const filePath = "/Users/mansoo/Workspace/mansoo/NODEJS_LAB/app/download/test_1592805502631.png";
  const filestream = fs.createReadStream(filePath);
  filestream.pipe(res);
});

app.listen( port );