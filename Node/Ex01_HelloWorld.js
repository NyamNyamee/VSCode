const http = require('http'); // http 모듈 읽기
// 전역변수 선언
const hostname = '127.0.0.1'; // 서버 주소
const port = 3000; // 포트번호
// 서버 생성
const server = http.createServer((req, res) => {
    res.statusCode = 200; // http응답코드(성공)
    res.setHeader('Content-Type', 'text/html'); // 페이지 형식 지정
    res.end('<h1>Hello World</h1>'); // 출력
});
// 서버 시작
server.listen(port, hostname, () => {
    // 로그출력
    console.log(`Server running at http://${hostname}:${port}/`);
});