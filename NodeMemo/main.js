const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const mysql_query = require('./db/mysql_query');
const moment = require("moment");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// 쿠키 사용 지정
app.use(cookieParser());
// view engine지정
// npm install ejs
app.set('view engine', 'ejs');
// views 폴더지정
app.set('views', 'views');
// 세션을 사용하겠다.
app.use(session({
    secret: 'keyboard cat',  // 암호화
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

// 정적폴더지정 : url로 파일 직접 접근
app.use('/static', express.static(__dirname + '/public'));
// 캐시를 사용하지 않겠다.
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store')
    next()
});
// 이후 서버에서 세션에 접근을 하려면 req.session을 이용하면 됩니다.
app.get('/', (req, res, next) => {
    // 첫번째 화면에는 리스트가 나오게 하자!!!
    res.render('index');
});
app.get('/json', (req, res, next) => {
    // 첫번째 화면에는 리스트가 나오게 하자!!!
    mysql_query('select * from memo order by idx desc', function (err, rows) {
        if (err) {
            throw err;
        }
        for (let row of rows) { // 전체를 돌면서
            row.date = moment(row.regDate).format('YYYY-MM-DD HH:mm'); // 날짜를 원하는 형식으로 추가
        }
        console.log(rows.length);
        res.json(rows);
    });
});
// insert get방식이면 리스트로 보낸다.
app.get('/insert', (req, res, next) => {
    res.redirect('/');
});
// insert post방식이면 저장하고 리스트로 보낸다.
app.post('/insert', (req, res) => {
    // 데이터 받기
    let name = req.body.name;
    let password = req.body.password;
    let content = req.body.content;
    let ip_addr = req.connection.remoteAddress;
    ip_addr = ip_addr.substr(ip_addr.lastIndexOf(':') + 1);
    console.log(name);
    console.log(password);
    console.log(content);
    console.log(ip_addr);
    // 저장하자
    let sql = `INSERT INTO memo VALUES (0,'${name}','${password}','${content}',NOW(),'${ip_addr}')`
    console.log(sql);
    mysql_query(sql, function (err, rows) {
        if (err) {
            throw err;
        }
        res.redirect('/');
    });
});

let port = 9999;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});