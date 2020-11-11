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