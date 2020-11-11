let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

// 뷰템플릿엔진을 ejs로 설정하겠다
app.set('view engine', 'ejs');
// 템플릿의 위치는 views폴더에 있다
app.set('views', './views');

// 채팅룸 이름을 담은 배열
let room = ['room1', 'room2'];
let a = 0;

// chat.ejs로 화면을 만들어라
app.get('/', (req, res) => {
    res.render('chat03');
});

// 서버에 누군가 접속하면 실행
io.on('connection', (socket) => {
    // 서버에서 나가면 실행
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // 채팅방 들어오면 클라에서 방번호와 이름을 받아 
    socket.on('joinRoom', (num, name) => {
        socket.join(room[num], () => {
            console.log(name + ' join a ' + room[num]);
            // 클라로 채팅방에 들어왔다는 이벤트 전송
            io.to(room[num]).emit('joinRoom', num, name);
        });
    });
    
    // 채팅방 나가면 클라에서 방번호와 이름을 받아 
    socket.on('leaveRoom', (num, name) => {
        socket.leave(room[num], () => {
            console.log(name + ' leave a ' + room[num]);
            // 클라로 채팅방을 나갔다는 이벤트 전송
            io.to(room[num]).emit('leaveRoom', num, name);
        });
    });

    socket.on('chat message', (num, name, msg) => {
        a = num;
        io.to(room[a]).emit('chat message', name, msg);
    });
});


// 서버 시작
let host = "127.0.0.1";
let port = 9999;
http.listen(port, () => { console.log(`서버 시작=> http://${host}:${port}`); });