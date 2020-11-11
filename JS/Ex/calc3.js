// calc3.js
/*
실행하면, calc 객체에서 add 메서드를 찾을 수 없다고 합니다.
*/
var calc = {};
calc.add = function(a, b){
    return a + b;
}
calc.multiply = function(a, b){
    return a * b;
}
// 이렇게 변경하면
exports = calc;