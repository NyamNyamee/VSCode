fn1(); // 에러아님. 선언문으로 함수를 만들면 함수먼저 컴파일되기 때문에 먼저 호출해도 됨
// fn2(); // 에러. 선언되기 전 호출

// 함수 선언문 방식으로 함수를 만들기 - 실행 전 컴파일됨.
function fn1() {
    console.log("함수 선언문 방식으로 함수를 만들기");
}
// 함수 표현식으로 함수 만들기 - 실행 시 컴파일됨.
let fn2 = function() {
    console.log("함수 표현식으로 함수 만들기");
}

fn1();
fn2();

console.log(fn1);
console.log(fn2);
console.log(typeof fn1);
console.log(typeof fn2);
