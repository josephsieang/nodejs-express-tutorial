const http = require('http');

// Using http event emmiter
const server = http.createServer();

// Subscribe to server event emitter
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(5000);
