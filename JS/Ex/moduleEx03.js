// 직접 모듈 만들고 불러오기
// 모듈을 생성하기 위해서는 exports 전역 객체를 사용하고, 모듈을 불러오기 위해서는 require() 메서드를 사용합니다.
/*
// calc.js
// 첫 번째 방법 : exports에 직접 프로퍼티를 설정
exports.add = function(a, b){
    return a + b;
}

exports.multiply = function(a, b){
    return a * b;
}
*/
/*
모듈을 불러오기 위해서는 require() 함수를 호출하면 되고, 인자로 파일 경로( ./calc )를 전달합니다.
파일 경로는 확장자인 .js를 생략하고 파일명만 전달해도 됩니다.
require() 함수의 반환 값은 exports 객체이며, calc 변수는 exports 객체처럼 사용할 수 있습니다.
*/
const calc1 = require('./calc1.js');
console.log(calc1.add(1,3));
console.log(calc1.multiply(1,3));

/*
// calc2.js
// 두 번째 방법 : 새로운 객체에 프로퍼티를 설정 후 module.export에 할당하기
var calc = {};
calc.add = function(a, b){
    return a + b;
}
calc.multiply = function(a, b){
    return a * b;
}
module.exports = calc;
*/
const calc2 = require('./calc2.js');
console.log(calc2.add(1,3));
console.log(calc2.multiply(1,3));

/*
// calc3.js
실행하면, calc 객체에서 add 메서드를 찾을 수 없다고 합니다.

var calc = {};
calc.add = function(a, b){
    return a + b;
}
calc.multiply = function(a, b){
    return a * b;
}
// 이렇게 변경하면
exports = calc;
*/
const calc3 = require('./calc3.js');
// TypeError: calc3.add is not a function
// console.log(calc3.add(1,3));
// console.log(calc3.multiply(1,3));

/*
그 이유는 Node.js가 모듈을 처리할 때 exports를 속성으로 인식하기 때문입니다.
그래서 exports에 새로운 객체를 할당 해버리면, 노드는 더 이상 exports를 모듈 시스템에서 처리할 수 있는 전역변수가 아닌 다른 변수로 인식하게 됩니다.
따라서 "모듈생성하기 - 첫번째 방법"과 같이 노드가 알고 있는 exports 객체에 프로퍼티를 추가하여 사용하던지, 
아니면 "모듈생성하기 - 두번째 방법"과 같이 module.exports에 새로운 객체를 할당해서 사용해야 합니다.
위의 예제처럼 exports에 직접 객체를 할당해주거나 객체를 직접 정의하면 모듈을 불러올 수 없게 됩니다.

exports  vs  module.exports
"모듈 생성하기"은 모듈을 정의하는 두 가지 방법에 대해 말해줍니다.
이번에는 두 방식에 차이에 대해 살펴볼텐데요, 결론적으로 "두 번째 방법"인 module.exports를 사용해서 객체를 할당해주는 것이 더 좋습니다.
*/

/*
// user.js
module.exports = {
    name: "victolee",
    age: 25
}
exports.name = "victolee22";
*/
const user = require('./user.js');
console.log(user.name); // victolee

/*
user.js에 module.exports와 exports에서 동시에 name 프로퍼티를 추가했을 경우(이런 경우는 없겠지만...), 실행 결과는 "victolee"입니다.
즉, exports.name="victolee22"는 무시 되었습니다.
그 이유는 exports는 단순히 module.exports를 참조할 뿐이며, exports에서 할당된 프로퍼티는 require()에서 module.exports에 추가되도록 처리됩니다.
*/
/*
module.exports에 함수 할당하기
지금까지 requrie()로 모듈을 불러올 때 모두 객체를 전달 받았습니다.
모듈은 반환할 때 객체 뿐만 아니라 함수를 반환할 수도 있습니다.
*/
/*
// fn.js
module.exports = function(){
    return 1234;
}
*/
const fn = require('./fn.js');
console.log("값 : %s", fn());

/*
모듈 생성하기
exports / module.exports
exports는 module.exports를 참조합니다.
일반적으로 module.exports를 통해 모듈을 생성합니다.


모듈 불러오기
require("모듈 파일 경로")
*/
