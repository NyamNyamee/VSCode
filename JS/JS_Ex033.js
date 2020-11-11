// 옵셔널 체이닝
let user = {}; // 주소 정보가 없는 사용자
// console.log(user.address.street); // 에러
console.log(user && user.address && user.address.street); // 에러 아님
console.log(user?.address?.street); // 에러