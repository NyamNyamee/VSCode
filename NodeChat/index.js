var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var nowNickName = "";

app.use(bodyParser.urlencoded({
    extended: true
}));

// 뷰템플릿엔진을 ejs로 설정하겠다
app.set('view engine', 'ejs');
// 템플릿의 위치는 views폴더에 있다
app.set('views', './views');

// 루트에 접근하면 enter.ejs파일로 화면을 띄움
app.get('/', function (req, res) {
    res.render('enter');
});

// chat에 get방식으로 접근하면
app.get('/chat', function (req, res) {
    res.send('루트"/"로 접근하십시오');
});

// chat에 post방식으로 접근하면
app.post('/chat', function (req, res) {
    nowNickName = req.body.nickName; // enter.ejs에서 넘어온 이름을 저장
    console.log('new user : ' + nowNickName);
    res.render('index'); // index.ejs파일로 화면을 띄움
});

var whoIsTyping = [];
var whoIsOn = [];

// 접속이 발생하면
io.on('connection', function (socket) {
    // 닉네임이 있다면 그것으로, 없다면 socket.id로 닉네임을 설정
    var nickName = nowNickName || socket.id;
    // 접속자 명단에 닉네임 추가
    whoIsOn.push(nickName);
    // 클라로 nickName을 담은 selfDate 이벤트를 보냄
    socket.emit('selfData', { nickName: nickName });
    // 클라로 접속자명단 배열을 담은 login이벤트를 보냄
    io.emit('login', whoIsOn);
    
    // 타이핑 중인 사람이 있다면
    if (whoIsTyping.length != 0) {
        // 클라로 타이핑중인 사람의 명단 배열을 담은 typing이벤트를 보냄
        io.emit('typing', whoIsTyping);
    }

    // 클라에서 setNickName이벤트를 받으면
    socket.on('setNickName', function (_nickName) {
        // 현재 닉네임을 이전닉네임으로 저장하고
        var pastNickName = nickName;
        // 현재 닉네임을 새로운 닉네임으로 변경하고
        nickName = _nickName;
        // 타이핑중인 닉네임 명단에 예전 닉네임이 존재한다면
        if (whoIsTyping.indexOf(pastNickName) != -1) {
            // 타이핑 명단을 변경하고
            whoIsTyping.splice(whoIsTyping.indexOf(pastNickName), 1, nickName);
            // 타이핑 명단 배열을 담은 typing이벤트를 클라로 보냄
            io.emit('typing', whoIsTyping);
        }
        
        // 접속중인 명단에 예전 닉네임이 존재한다면
        if (whoIsOn.indexOf(pastNickName) != -1) {
            // 접속중인 명단을 변경하고
            whoIsOn.splice(whoIsOn.indexOf(pastNickName), 1, nickName);
        }
        // 객체를 담아 setNickName이벤트를 클라로 보냄
        io.emit('setNickName', { past: pastNickName, current: nickName, whoIsOn: whoIsOn });
        console.log(socket.id + '  to  ' + nickName);
    });

    // 클라에서 say이벤트를 받으면
    socket.on('say', function (msg) {
        console.log('message: ' + msg);
        // 모든 접속자에게 채팅내용을 전송
        socket.broadcast.emit('chat message', nickName + '  :  ' + msg);
        // 'me : 메시지'를 담은 mySaying이벤트를 다시 클라로 전송
        socket.emit('mySaying', 'ME  :  ' + msg);
    });

    // 클라에서 typing이벤트를 받으면
    socket.on('typing', function () {
        // 타이핑 명단에 닉네임이 존재하지 않으면
        if (!whoIsTyping.includes(nickName)) {
            // 배열에 추가
            whoIsTyping.push(nickName);
            console.log('who is typing now');
            console.log(whoIsTyping);
            // 타이핑 명단을 담은 typing이벤트를 클라로 보냄
            io.emit('typing', whoIsTyping);
        }
    });

    // 클라에서 quitTyping이벤트를 받으면
    socket.on('quitTyping', function () {
        // 타이핑중인 명단이 비어있으면
        if (whoIsTyping.length == 0) {
            console.log('emit endTyping');
            // 클라로 endTyping 이벤트 전송
            io.emit('endTyping');
        }
        else {
            // 타이핑중인 명단에 닉네임을 찾아
            var index = whoIsTyping.indexOf(nickName);
            console.log(index);
            // 존재한다면
            if (index != -1) {
                // 타이핑 명단에서 제거
                whoIsTyping.splice(index, 1);
                // 타이핑 명단이 비어있다면
                if (whoIsTyping.length == 0) {
                    console.log('emit endTyping');
                    // 클라로 endTyping이벤트 전송
                    io.emit('endTyping');
                }
                // 타이핑 명단이 비어있지 않다면
                else {
                    io.emit('typing', whoIsTyping);
                    console.log('emit quitTyping');
                    console.log('whoIsTyping after quit');
                    console.log(whoIsTyping);
                }
            }
        }
    });


    // 접속을 끊을 시
    socket.on('disconnect', function () {
        console.log(nickName + ' : DISCONNECTED');
        // 접속자 명단에서 제거
        whoIsOn.splice(whoIsOn.indexOf(nickName), 1);
        // 클라로 logout이벤트 전송
        io.emit('logout', { nickNameArr: whoIsOn, disconnected: nickName });

        if (whoIsTyping.length == 0) {
            //if it's empty
            io.emit('endTyping');
        }
        else {
            //if someone was typing
            var index = whoIsTyping.indexOf(nickName);
            if (index != -1) {
                whoIsTyping.splice(index, 1);

                //if no one is typing now
                if (whoIsTyping.length == 0) {
                    io.emit('endTyping');
                }

                //if someone else is still typing
                else {
                    io.emit('typing', whoIsTyping);
                    console.log('emit popTyping');
                    console.log(whoIsTyping);
                }
            }
        }
    });
});


// 서버 시작
let host = "127.0.0.1";
let port = 9999;
http.listen(port, () => { console.log(`서버 시작=> http://${host}:${port}`); });