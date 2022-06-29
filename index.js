const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const PORT = 8333;
const server = http.createServer(requestListener);

server.listen(PORT);

console.log(`Listening on ${PORT}\nGo to http://localhost:${PORT} to test`);
