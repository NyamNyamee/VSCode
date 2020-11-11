// Express의 미들웨어 불러오기
var express = require('express');
var http = require('http')
var path = require('path');
var bodyParser = require('body-parser')
var serveStatic = require('serve-static');

//express 객체 생성
var app = express();

// body-parser : post로 요쳥했을 때의 요청 파라미터 확인 방법을 제공
// body-parser를 이용해 application/x=www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));
// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

// 회원가입
app.post('/adduser', function (req, res) {
    console.log('adduser called.....');

    var paramId = req.body.id;
    var paramPassword = req.body.password;
    var paramName = req.body.name;

    var member = { 'userid': paramId, 'password': paramPassword, 'username': paramName }
    console.log('넘어온 정보: ', member);
    memberInsert(connectDB(), member);
    res.redirect('/public/index.html');
});
// 로그인
app.post('/loginOk', function (req, res) {
    console.log('loginOk called.....');

    var paramId = req.body.id;
    var paramPassword = req.body.password;

    var member = { 'userid': paramId, 'password': paramPassword}
    console.log('넘어온 정보: ', member);
    selectByUserid(connectDB(), member);
    res.redirect('/public/index.html');
});


// HTML폴더의 파일명들을 주소로 사용
app.use('/public', serveStatic(path.join(__dirname, 'HTML')));
var host = 'localhost';
var port = 3000;

http.createServer(app).listen(3000, function () {
    console.log(`http://${host}:${port}`);
    console.log(`http://${host}:${port}/public/index.html`);



    /*
    // console.log(connectDB());
    var conn = connectDB();
    selectList(conn);
    selectByIdx(conn, 1);
    selectByUserid(conn, 'admin');
    selectByUserid(conn, 'admin2'); // 없는 id
    memberInsert(conn, { 'userid': 'inwoo', 'password': '1234', 'username': '구렁이' });
    */
});

// mysql 연결함수
var connectDB = function () {
    const mysql = require('mysql');
    const connection = mysql.createConnection({ // 연결할 db정보
        host: 'localhost',
        user: 'jspUser',
        password: '123456',
        database: 'mydb2'
    });

    connection.connect(); // db에 연결

    return connection;
}

// 모든회원정보얻기
var selectList = function (conn) {
    conn.query('SELECT * FROM member', (error, rows) => {
        if (error) throw error;

        console.log('rows = ', rows);
    });
}

var selectByIdx = function (conn, idx) {
    conn.query(`SELECT * FROM member where idx='${idx}'`, (error, rows) => {
        if (error) throw error;

        console.log(`member[${idx}] = `, rows);
    });
}

var selectByUserid = function (conn, member) {
    conn.query(`SELECT * FROM member where userid='${member.userid}'`, (error, rows) => {
        if (error) throw error;

        console.log(`member['${member.userid}'] = `, rows);

        // row가 존재한다면 비밀번호 비교해서 세션에 저장
        console.log(rows.length);
        if(rows.length > 0){
            console.log(rows[0].userid, rows[0].PASSWORD, rows[0].username);
        } 
    });
}

// insert
var memberInsert = function (conn, member) {
    conn.query(`insert into member (userid, password, username) values ('${member.userid}', '${member.password}', '${member.username}')`, (error, rows) => {
        if (error) throw error;

        console.log(`${member.userid} 저장완료!`);
    });
}

/*
DDL
CREATE TABLE member(
    idx INT PRIMARY KEY AUTO_INCREMENT,
    userid VARCHAR(100) NOT NULL,
    PASSWORD VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL
);

INSERT INTO member VALUES(0, 'admin', '123456', 'king');
SELECT * FROM member;
*/