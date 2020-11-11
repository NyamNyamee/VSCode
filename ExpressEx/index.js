// express모듈 읽기
const express = require('express')
// 어플리케이션 객체 생성
const app = express();
// 포트번호 지정
const port = 3000

// 주소로 직접 접근가능한 폴더 지정
app.use(express.static('public'));

// 주소 생성
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/hi', (req, res) => {
    res.send('Hello Express 한글은?')
})

// 포트번호를 넘겨서 서버 시작
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    console.log(`Example app listening at http://localhost:${port}/hello.html`)
})