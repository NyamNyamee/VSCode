let user = {
    name: '한사람',
    age: 33
};
console.log(user);
// 객체에 메서드 추가
user.sayHi = function () {
    console.log("안녕하세요!");
};
console.log(user);
// 메서드 호출
user.sayHi();
// 함수 선언
function sayHi() {
    console.log("안녕하세요2!");
};
// 객체에 메서드 추가
user.sayHi = sayHi; // 함수를 등록
user.sayHi();

// 객체 선언시 메서드 추가도 가능하다.
let user2 = {
    name: '한사람',
    age: 33,
    sayHi: function () {
        console.log("안녕하세요3!");
        // name이란 변수를 인식하지 못하여 에러!!!!
        // console.log(name + "씨 안녕하세요3!");
    },
    // 위의 단축구문
    sayHi2() {
        // 이때는 나자신의 이름이라고 지정해주면 된다.
        // this : 나자신을 나타내는 숨겨진 필드
        console.log(this.name + "씨 안녕하세요4!");
    }
};
user2.sayHi();
user2.sayHi2();

let user3 = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(user3.name + "씨 반갑습니다."); // 'this' 대신 'user'를 이용함
    }
};
user3.sayHi(); // 가능 : ?

let admin = user3;
admin.sayHi();
user3 = null;
// admin.sayHi(); // TypeError: Cannot read property 'name' of null

let user4 = {
    name: "John",
    age: 30,
    sayHi() {
        console.log(this.name + "씨 반갑습니다."); // 'this' 이용함
    }
};
user4.sayHi();

let admin2 = user4;
admin2.sayHi();
user4 = null;
admin2.sayHi();

let user5 = {
    firstName: "보라",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user5.sayHi(); // 보라


