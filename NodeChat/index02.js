let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    // res.send('<h1> Hello world </ h1>');
    res.sendFile(__dirname + '/index.html');
});

// NameSpace 1번
const namespace1 = io.of('/namespace1');
// connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
namespace1.on('connection', (socket) => {
    namespace1.emit('news', { hello: 'Someone connected at namespace1' });
});
// NameSpace 2번
const namespace2 = io.of('/namespace2');
// connection을 받으면, news 이벤트에 hello 객체를 담아 보낸다
namespace2.on('connection', (socket) => {
    namespace2.emit('news', { hello: 'Someone connected at namespace2' });
});



let host = "127.0.0.1";
let port = 9999;
http.listen(port, () => { console.log(`서버 시작=> http://${host}:${port}`); });