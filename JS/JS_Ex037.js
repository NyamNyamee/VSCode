let str = "Hello";
// 기본형인데 객체처럼 메서드를 사용 가능하다!!!
console.log(typeof (str));
console.log(str.toUpperCase()); // HELLO
console.log(str.toLowerCase()); // hello
console.log(str.length); // 5
let n = 1.23456;
console.log(typeof n);
console.log(n);
console.log(n.toFixed(2));
// String/Number/Boolean를 생성자론 쓰지 맙시다.
console.log(typeof (0));
console.log(typeof (new Number(0)));

let n1 = 0;
let n2 = new Number(0);
console.log("n1+2 :", n1 + 2);
console.log("n2+2 :", n2 + 2);
if (n1) { // 0은 거짓이므로 if문은 거짓이다.
    console.log(n1, "나는(n1) 나타날까요?");
}
if (n2) { // Number(0)은 객체다. 객체는 참이다.  실핸된다.
    console.log(n2, "나는(n2) 나타날까요?");
}

// 문자열에 프로퍼티를 추가할 수 있을까요?
let message = "Hello World!!!";
console.log(message);
message.test = 5;
console.log(message.test); // undefined (비 엄격 모드)
let msg = "하하하하";
console.log(msg);
console.log(msg.test); // undefined (비 엄격 모드)

let num = 255;
console.log(num);
// 진법변환
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(8));
console.log(num.toString(16));

// 123456..toString(36)에 있는 점 두 개는 오타가 아닙니다. 
// 위 예시처럼 숫자를 대상으로 메서드 toString을 직접 호출하고 싶다면 숫자 
// 다음에 점 두 개 ..를 붙여야 합니다.


// console.log(123.toString()); // 에러. 숫자에서 메서드 호출 불가!!!
// ..를 쓰면 상수에서도 메서드를 호출가능하다.
console.log(123..toString(16)); // 7b

// 내림, 올림, 반올림, 버림 ...
console.log(Math.floor(4.5), Math.ceil(4.5), Math.round(4.5), Math.trunc(4.5));
console.log(Math.floor(-4.5), Math.ceil(-4.5), Math.round(-4.5), Math.trunc(-4.5));
console.log(parseInt(4.5), parseInt(-4.5)); // 소수를 정수로 변환하면 소수점은 무조건 버림


