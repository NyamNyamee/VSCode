// 1. fs(파일시스템) 모듈 사용
var fs = require('fs');

// 2. 비동기방식의 파일읽기. 파일을 읽은 후 마지막 파라미터에 넘긴 callback 함수가 호출
fs.readFile('package.json', 'utf-8', function (error, data) {
    console.log('01 readAsync: %s', data); // 읽기가 끝나면 자동으로 실행됨
});
console.log('1번 실행 \n');

// 3. 동기방식의 파일읽기. package.json 파일을 읽은 후 data 변수에 저장하고 나서야 아래 코드 실행
var data = fs.readFileSync('package.json', 'utf-8');
console.log('02 readSync: %s', data);
console.log('2번 실행 \n');