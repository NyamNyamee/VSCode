// 첫 번째는 두 번째 (ES6)에 대한 속기 구문입니다.
const {PI} = Math;
// console.log(PI);
// const PI = Math.PI;
// console.log(PI);

// Node.js 모듈 시스템에서 각 파일은 별도의 모듈로 처리됩니다. 
// exports개체 에 대한 추가 속성을 지정하여 함수와 개체가 모듈의 루트에 추가됩니다 .
module.exports.area = (r) => PI * r ** 2;
exports.circumference = (r) => 2 * PI * r;

