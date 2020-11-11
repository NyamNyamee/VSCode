const fs = require('fs');
/*
파일시스템 함수들은 파일I/O와 디렉토리I/O함수에 관한 것이다. 
모든 파일싀스템 함수들은 동기/비동기 함수를 제공한다. 
이 둘의 차이점을 설명하면 동기는 값을 함수안에서 바로 리턴하며(함수이름에 Sync가 붙음), 
I/O작업이 수행하는 동안 다른 코드가 실행되는 것을 막는다.
*/
var data = 'Hello FileSystem';
fs.writeFile('text.txt', data, 'utf8', function(err) {
    console.log('비동기적 파일 쓰기 완료');
});
 
fs.writeFileSync('text2.txt', data, 'utf8');
console.log('동기적 파일 쓰기 완료');