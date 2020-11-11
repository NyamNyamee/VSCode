// js는 동적 타입 언어이다. 변수의 타입이 유동적이라서 실행할 때 타입이 결정된다
let message = 'string1';
console.log(typeof (message), message);
message = 44;
console.log(typeof (message), message);
message = true;
console.log(typeof (message), message);

message = 3;
console.log(typeof (message), message);
message = 3.14; // 실수도 정수처럼 그냥 number타입이다
console.log(typeof (message), message);

console.log(typeof (message / 0), message / 0); // number를 0으로 나누면 infinity
message = 'haha';
console.log(typeof (message + 0), message + 0); // string과 number를 + 연산
console.log(typeof (message / 0), message / 0); // string과 number를 그 외 연산

const bigInt = 123456789123456789123456789123456789123456789123456789n; // 큰 숫자이면 뒤에 n를 붙이면 된다
console.log(typeof (bigInt), bigInt); // bigInt타입

let str = "hell";
let str2 = 'singe quotes are ok too';
let phrase = `can embeded another ${str}`; // 따옴표 ' 가 아니라 물결무늬에 있는 역따옴표 백틱 `를 쓰면 가능
console.log(str);
console.log(str2);
console.log(phrase);

let name = "John";
console.log(`안녕 ${name}`); // 백틱 안에서 연산 가능
console.log(`계산 ${1 + 2}`);

let gender = true;
console.log(`성별 : ${gender ? '남' : '여'}`);

let age1 = null; // 일부러 널값을 대입해줌, 대입 안하면 undefined으로 초기화됨
console.log(typeof (age1), age1);
console.log(age1 == null); // 값만 비교
console.log(age1 === null); // 타입까지 비교

let ud; // 선언은 해줬지만 초기화는 안해줌
console.log(typeof (ud), ud);
console.log(ud == undefined); // 값만 비교
console.log(ud === undefined); // 타입까지 비교
// console.log(un2 === undefined); // 아예 선언도 안하면 에러임

fn1 = function (un2) { // 파라미터 괄호 안에서 un2가 선언되었기 때문에 에러가 아님
    console.log(un2 === undefined);
}
fn1(ud);
console.log('\n');

console.log(typeof(fn1)); // function
console.log(typeof('34'*2)); // number
console.log(typeof('34'+2)); // string
console.log(typeof([])); // object
console.log(typeof({})); // object
console.log(typeof(Infinity)); // number
console.log(typeof(NaN)); // number
console.log(typeof undefined) // "undefined"
console.log(typeof 0); // "number"
console.log(typeof 10n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof "foo"); // "string"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Math); // "object"  (1)
console.log(typeof null); // "object"  (2)
console.log(typeof alert); // "function"  (3)