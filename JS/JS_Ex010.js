// 비교 연산자
/*
보다 큼·작음: a > b, a < b.
보다 크거나·작거나 같음: a >= b, a <= b.
같음(동등): a == b. 등호 =가 두 개 연달아 오는 것에 유의하세요. 
a ​​= b와 같이 등호가 하나일 때는 할당을 의미합니다.
같지 않음(부등): 같지 않음을 나타내는 수학 기호 ≠는 자바스크립트에선 a != b로 나타냅니다. 
                할당연산자 = 앞에 느낌표 !를 붙여서 표시합니다.
*/
a = 10, b=13;
console.log(a>b);
console.log(a<b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log();

a = '1', b=1;
console.log(a==b);
console.log(a===b); // 타입이 달라서 false
console.log();


// 문자열 비교, (ABC)(가나다)(123) 순으로 오름차순으로 크다
console.log('Z' > 'A');
console.log('Glow' > 'Glee');
console.log('Bee' > 'Be');
console.log('Bee' > '한글'); // 한글 > 영어
console.log('ㄱ' > 'ㄴ');
console.log();

// null이나 undefined와 비교하기
a = null;
console.log(a == null);
// console.log(x == undefined); // 에러
console.log(typeof(x) == undefined); // 에러아님
console.log(typeof(x) == 'undefined'); // 에러아님

console.log(null == undefined); // 둘다 빈값이라 true
console.log(null === undefined); // null은 object타입이고 undefined는 undefiend타입임
console.log();

console.log( null > 0 );  // (1) false.  null이 0으로 형변환되어 계산
console.log( null == 0 ); // (2) false.  null과 undefined를 비교하는걸 제외하고 이외의 값과 == 하면 0으로 형변환되지 않는고 항상 false
console.log( null >= 0 ); // (3) true.  >= <=비교연산자는 null을 0으로 형변환해서 계산됨
console.log( null <= 0 ); // (3) true.  > < >= <=비교연산자는 null을 0으로 형변환해서 계산됨
console.log();

// 다중 삼항연산자 ?
let age = 18;

let message = (age < 3) ? '아기야 안녕?' :
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

  console.log(message);