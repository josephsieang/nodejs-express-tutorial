const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf-8');
    // res.end(text);
    // Inspect network will see transfer encoding as chunked
    const fileStream = fs.createReadStream('./content/big.txt', 'utf-8');
    fileStream.on('open', () => {
      fileStream.pipe(res); // push data into writeable stream
    });
    fileStream.on('error', (error) => console.log(error));
  })
  .listen(5000);
