const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const crypto = require("crypto");
const id = crypto.randomBytes(16).toString("hex");

const version = "v0.0.2";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Node Example App ${version}, id: ${id}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
