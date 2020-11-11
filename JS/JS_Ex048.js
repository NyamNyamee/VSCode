// JSON 다루기
// JSON.stringify – 객체를 JSON으로 바꿔줍니다.
// JSON.parse – JSON을 객체로 바꿔줍니다.
let user = {
  name: "John",
  age: 30,
  // 문자열로 출력하려면 다음과 같이 메서드 작성해준다.
  toString() {
    return `{"name": "${this.name}", "age": ${this.age}}`;
  }
};
console.log(user);
console.log(user.toString());
// JSON을 string으로 만든다.
let jsonString = JSON.stringify(user);
console.log(typeof (jsonString), ":", jsonString);
// string을 json으로 만든다.
let jsonData = JSON.parse(jsonString);
console.log(typeof (jsonData), ":", jsonData);