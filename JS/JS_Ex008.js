/*
형 변환
함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 변환됩니다. 
이런 과정을 "형 변환(type conversion)"이라고 합니다.
*/

'use strict';
let value = true;
console.log(typeof value); // boolean
// 문자형으로 형변환
value = String(value); // 변수 value엔 문자열 "true"가 저장됩니다.
console.log(typeof value); // string
console.log(value=='true'); // true
console.log(value==true);   // false

// 숫자형으로 변환
console.log('23' + 2);  // 232 : 숫자가 문자로 자동변환
console.log('23' - 2);  // 21  : 문자가 숫자로 자동변환
console.log('23' * 2);  // 46
console.log('23' / 2);  // 11.5 --> 정수 나누기 정수의 결과는 실수이다.
console.log('23' % 2);  // 1
console.log();

value = 'haha'
console.log(typeof value);
// 숫자형으로 변환
value = Number(value); 
console.log(value);
console.log(typeof value);


value = '22'
console.log(typeof value);
// 숫자형으로 변환
value = value * 1
console.log(typeof value);
console.log();

let age = Number("임의의 문자열 123");
age = Number(age);
console.log(typeof age, age); // NaN
age = Number("2002 월드컵");
console.log(typeof age, age); // NaN
if(isNaN(age)){
    console.log('age는 숫자가 아닙니다.')
}else{
    console.log('age는 숫자입니다.')
}
console.log();
/*
전달받은 값	    형 변환 후
undefined	    NaN
null	        0
true and false	1 과 0
string	        문자열의 처음과 끝 공백이 제거됩니다. 
                공백 제거 후 남아있는 문자열이 없다면 0, 
                그렇지 않다면 문자열에서 숫자를 읽습니다. 변환에 실패하면 NaN이 됩니다.
*/
console.log('undefined : ', Number(undefined));
console.log('null : ', Number(null));
console.log('true : ', Number(true));
console.log('false : ', Number(false));
console.log('   123  : ', Number('   123   '));
console.log('      : ', Number('       '));
console.log('  123a    : ', Number('   123a    '));
console.log();

/*
논리형으로 변환
Boolean()사용
불린형으로 변환 시 적용되는 규칙은 다음과 같습니다.
숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 
값들은 false가 됩니다. 그 외의 값은 true로 변환됩니다.
*/
value = 'true'
console.log(typeof value);
// 논리형으로 변환
value = Boolean(value);
console.log(typeof value);
console.log(Boolean('qwerty'));  // true
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(123));       // true
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean("0"));       // true
console.log(Boolean(" "));       // true
console.log();



console.log();

