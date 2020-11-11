// var를 쓰면 변수 재선언 가능
var a = 10;
console.log(a);
var a = 20;
console.log(a);

// let을 쓰면 이미 선언한 변수를 또 선언할 수 없음
let b = 11;
console.log(b);
// let b = 21; // 에러.
b = 21;
console.log(b);

// 상수 선언(자바에서의 final. 한번 선언되면 값 변경 불가)
const PI = 3.14;
console.log(PI);
// PI = 3.14314;
// console.log(PI);

// 한번에 여러개 변수 선언 가능
let user = 'John', age = 25, message = 'Hello';
console.log('이름:' + user + '나이:' + age);