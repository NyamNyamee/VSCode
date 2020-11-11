let user1 = new Object(); // '객체 생성자' 문법
console.log(typeof user1);

let user2 = {};  // '객체 리터럴' 문법
console.log(typeof user2);
// 속성추가
user2.name = '한사람';
user2['age'] = 33;
console.log(user2);
// 속성 호출
console.log(user2.name);
console.log(user2['age']);

let user3 = {name:'한사람', age:22};
console.log(user3) 
user3.gender = true;
console.log(user3) 
// 속성 삭제
delete user3.age;
console.log(user3) 
// 속성추가 : 공백이 있는 이름은 반드시 따옴표를 써야 한다.
// user3[likes birds] = true; 에러다!!
user3["likes birds"] = true;
// 공백이있는 이름은 반드시 []를 이용해야 한다.
//console.log(user3.likes birds)에러다!!
console.log(user3['likes birds']);
// 키값을 변수명에 넣었을 경우에도 반드시 []를 사용해야 한다.
let key = "likes birds";
console.log(user3.key); // undefined
console.log(user3[key]);

for(key in user3){
    console.log(key, " : ", user3[key]);
}

// 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 
// 이를 계산된 프로퍼티(computed property) 라고 부릅니다.

let name = 'age';
user4 = {
    [name] : 44
};
console.log(user4);
console.log(user4.name); // undefined
console.log(user4.age);


console.log(user3);
user3[name] = 22;
console.log(user3);
// 수정
user3[name] = 33;
console.log(user3);

// 객체를 리턴하는 함수
function makeUser(name, age){
    return {
        name : name, age : age
    };
}
user5 = makeUser('두사람',44);
console.log(user5);

function makeUser2(name, age, gender){
    return {
        // name:name이 아니라 name만 써도 된다. 그러면 키값을 변수명으로 가짐
        name, age, gender, 
        // 함수도 멤버로 가진다.
        view : function(){
            return name + "(" + age + "세, " + (gender?"남":"여") + ")";
        }
    };
}
user6 = makeUser2('두사람',44, true);
console.log(user6);
// 멤버함수 호출
console.log(user6.view());

// 예약어를 키로 사용해도 괜찮습니다.
let obj = {
    for: 1,
    let: 2,
    return: 3
};
console.log(obj.for + obj.let);

// ‘in’ 연산자로 프로퍼티 존재 여부 확인하기
console.log(obj.while);
console.log(obj.while === undefined);
console.log("while" in obj);
if(obj.while === undefined){
    console.log('while속성은 없습니다.');
}

if(!("while" in obj)){
    console.log('while속성은 없습니다.');
}



  




