// 기본 연산자와 수학
let x = 1;
console.log('x = ',  x );
x = -x;  // 단항연산 :  : 연산대상(피연산자)이 1개인 연산
console.log('x = ',  x );
let y = 3;
console.log('y - x = ',  y - x ); // 이항연산 : 연산대상(피연산자)이 2개인 연산
//  삼항연산 : 연산대상(피연산자)이 3개인 연산
console.log('x>y?true:false = ', x>y ? true : false );
console.log();
/*
자바스크립트에서 지원하는 수학 연산자는 다음과 같습니다.

덧셈 연산자 +,
뺄셈 연산자 -,
곱셈 연산자 *,
나눗셈 연산자 /,
나머지 연산자 %,
거듭제곱 연산자 **
*/
console.log('x + y = ', x + y);
console.log('x - y = ', x - y);
console.log('x * y = ', x * y);
console.log('x / y = ', x / y);
console.log('x % y = ', x % y);
console.log('x ** y = ', x ** y);
console.log('2 + 2 + "1" = ', 2 + 2 + "1"); // 2+2=4 먼저 계산되고, 4+"1"이 되어 41이 나옴
console.log('"" + 2 + 2 + "1" = ', "" + 2 + 2 + "1"); // ""+2가 먼저 계산되고, "2"+2가 다음 계산되고, "22"+"1"이 계산되어 221이 딤
console.log();
console.log(+x);
console.log(-y);
console.log(+true);  //  true가 숫자 1로 변경되고 +연산이( * 1)처리되어 결과가 1이다.
console.log(-"0");   //  -0
console.log(typeof -"0");   //  number타입
console.log();

let apples = "2";
let oranges = "3";
console.log(apples + oranges);
console.log(+apples + +oranges); // 이 방법 추천. Number함수를 불러 형변환 하는거보다 빠름
console.log(Number(apples) + Number(oranges));
console.log();

let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // 괄호 안에 식 먼저 계산되어 a에 2 + 1이 대입되고, 3-3이 되어 c는 0이 된다
console.log(a);
console.log(b);
console.log(c);
console.log();

a += 4;
b *= 2;
c /= 3;
console.log(a);
console.log(b);
console.log(c);
console.log();

// 증감 연산자 ++, --
a = b = c = 10;
a++; b++; c = a + b;
console.log(a, b, c); // 11 11 20
--a; --b; c = a + b;
console.log(a, b, c); // 10 10 20

c = a++ + ++b;
console.log(a, b, c); // 11 11 21

c = --a + b--;
console.log(a, b, c); // 10 10 21

// 비트 연산자
// 비트 AND ( & )
// 비트 OR ( | )
// 비트 XOR ( ^ )
// 비트 NOT ( ~ )
// 왼쪽 시프트(LEFT SHIFT) ( << )
// 오른쪽 시프트(RIGHT SHIFT) ( >> )
// 부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )
a = 5, b = 3;
console.log(a&b);
console.log(a|b);
console.log(a^b);
console.log(~a);
console.log("-----------");

a = 1; // 01(2)
for(i = 1; i <= 10; i++){
    console.log(a<<i); // 왼쪽으로 1칸,2칸~10칸까지 밀기
}
a = 1024; // 10000000000(2)
for(i = 1; i <= 10; i++){
    console.log(a>>i); // 오른쪽으로 1칸,2칸~10칸까지 밀기
}
console.log("-----------");

a = 24;
console.log(a >> 2);
console.log(a >>> 2);

a = -24;
console.log(a >> 2);
console.log(a >>> 2);

a = 10;
console.log("a=" + a);
a = 0b10; // 2진수 10
console.log("a=" + a);
a = 010; // 8진수 10
console.log("a=" + a);
a = 0x10; // 16진수 10
console.log("a=" + a);
console.log();

// 콤마(,) 연산자
// 한 줄에서 세 개의 연산이 수행됨
for (a = 1, b = 3, c = a * b; a < 10; a++) {
    console.log(b, a, c);
}

let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
alert(a + b); // 12
alert(+a + +b); // 12