const http = require('http'); // 1

http.createServer((request, response) => { // 2
  response.statusCode = 200; // 성공
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World');
}).listen(3000); // 3 포트번호 3000번

console.log('Server running at http://127.0.0.1:3000/');