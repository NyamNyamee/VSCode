let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.send('<h1> Hello world </ h1>');
    res.sendFile(__dirname + '/index01.html');
});

// 이벤트 등록: 누군가 접속시 실행할 내용
io.on('connection', (socket) => {
    console.log('a user connected');
    // 클라에서 넘어온 이벤트를 받아 실행
    socket.on('chat message', (msg) => {
        // console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    // 이벤트 등록: 누군가 나갔을때 실행할 내용
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



let host = "127.0.0.1";
let port = 9999;
http.listen(port, () => { console.log(`서버 시작=> http://${host}:${port}`); });