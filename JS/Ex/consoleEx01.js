// node console 내장 모듈 

var fs = require('fs');

console.log('hello world');
console.log('hello %s', 'world');
console.log('hello %d', 123);
console.log('hello %.2f', 3.141592);
console.log('숫자: %d + %d = %d', 10, 29, 10+29);
console.log('문자열: %s', 'Hello World!');
console.log('JSON: %j', { name: 'node.js' });
console.log('문자열을', '연결시킬수도 있습니다.');
console.error(new Error('에러가 발생했습니다.'));
const name = 'Will Robinson';
console.warn(`경고!!! ${name}! 경고!!!`);
console.log();
// 실행시간 측정
console.time('timer');
for(var i=0;i<5;i++){
    console.log(i);
}
console.timeEnd('timer');

// 콘솔창 지우기
// console.clear();

// Console 클래스는 구성 가능한 출력 스트림이있는 간단한 로거를 만드는 데 사용
// const { Console } = require('console');
const { Console } = console;

const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new Console({ stdout: output, stderr: errorOutput });
count = 5;
while(count>0){
    logger.log('count: %d', count);
    logger.error('count: %d', count);
    count--;
}
