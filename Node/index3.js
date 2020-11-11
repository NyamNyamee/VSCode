var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function (request, response) {
    // 1. post로 전달된 데이터를 담을 변수를 선언
    var postdata = '';
    // 2. request객체에 on( ) 함수로 'data' 이벤트를 연결
    request.on('data', function (data) {
        // 3. data 이벤트가 발생할 때마다 callback을 통해 postdata 변수에 값을 저장
        postdata = postdata + data; // 받은 파라미터들을 모두 postdata에 저장
        console.log('postdata = ' + postdata);
    });

    // 4. request객체에 on( ) 함수로 'end' 이벤트를 연결
    request.on('end', function () {
        // 5. end 이벤트가 발생하면(end는 한버만 발생한다) 3번에서 저장해둔 postdata 를 querystring 으로 객체화
        var parsedQuery = querystring.parse(postdata); // 파라미터들이 모인 string형태의 postdata를 분리하여 객체형태로 저장
        // 6. 객체화된 데이터를 로그로 출력
        console.log(parsedQuery);
        // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
        response.writeHead(200, { 'Content-Type': 'text/html' });
        let querys = ''
        for (q in parsedQuery) {
            querys += parsedQuery[q] + ' ';
        }
        response.end('받은쿼리들: ' + querys);
    });

});


// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다
server.listen(8080, function () {
    console.log('Server is running...');
    console.log('http://localhost:8080 으로 접속하라dd');
});