// 문자열
let str1 = "큰따옴표";
let str2 = '작은따옴표';
let str3 = `백틱`;
console.log(str1);
console.log(str2);
console.log(str3);
console.log(`표현식이 가능 : 10 * 10 = ${10 * 10}`);
let str4 = `
첫번째줄
두번째줄
세번째줄
백틱을 이용하면 이렇게 여러줄을 사용할 수 있다.
`
console.log(str4);
console.log("\u{1F60D}"); // 유니코드
console.log("나의 이름은 '구렁이' 입니다");
console.log("나의 이름은 \"구렁이2\" 입니다");

for (s of "Hello Goorung") { // 문자열의 for of 문 : for in 문과 달리 index를 리턴하지 않고 값을 리턴
    console.log(s);
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (i of arr) {
    console.log(i);
}

// slice(a,b) / substring(a,b)의 a,b는 문자열의 인덱스, substr(a,b)의 a는 인덱스, b는 잘라낼 개수

// 첫 글자를 대문자로 변경하기
function ucFirst(str) {
    return str[0].toUpperCase() + str.substring(1);
}
console.log(ucFirst("john"));

// 스팸 문자열 걸러내기
function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) {
        return true;
    }
    return false;
}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));

// 최대길이를 초과하는 문자열을 최대길이만큼 잘라 뒤에 ...붙이기
function truncate(str, maxlength) {
    if (str.length > maxlength) return str.substr(0, maxlength - 3) + '...';
}
console.log(truncate("What I'd like to tell on this topic is:", 20));

// 숫자만 추출하기
function extractCurrencyValue(str) {
    return +str.substr(1); // str에서 첫글자를 제거하고 문자형으로 변환
}
console.log(extractCurrencyValue('$120'));

// 숫자만 추출하기2
function ev(str) {
    let result = '';
    for (s of str) {
        if (s >= '1' && s <= '9') {
            result += s;
        }
    }
    return result;
}
console.log(ev('#2131gsd351'));
