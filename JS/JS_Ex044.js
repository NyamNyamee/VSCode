let john = { name: "John" };
// 위 객체는 john이라는 참조를 통해 접근할 수 있습니다.
// 그런데 참조를 null로 덮어쓰면 위 객체에 더 이상 도달이 가능하지 않게 되어
// 객체가 메모리에서 삭제됩니다.
// john을 나타내는 객체는 배열의 요소이기 때문에 가비지 컬렉터의 대상이 되지 않습니다.
// array[0]을 이용하면 해당 객체를 얻는 것도 가능합니다.
let array = [john]; // 배열에 john이라는 객체를 담음
john = null; // john객체를 제거
console.log(john); // 제거되었지만
console.log(JSON.stringify(array[0])); // 배열에 있던 객체는 사라지지 않음

// 배열 분해하기
// 이름과 성을 요소로 가진 배열
let arr = ["Bora", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

console.log(firstName); // Bora
console.log(surname);  // Lee

// 배열 뿐만 아니라 모든 이터러블 객체가 분해될 수 있음
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);

let user = {
    name: "John",
    age: 30
};

// 객체의 키와 값 순회하기
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, age:30이 차례대로 출력
}

// 변수 값 교환
let guest = "Jane";
let admin = "Pete";

// 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);

// ...으로 나머지 요소 대입받기
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(name1); // Julius
console.log(name2); // Caesar

// `rest`는 배열입니다.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2

// 기본값 지정 가능
let [name3 = "Guest", surname3 = "Anonymous"] = ["Julius"];
console.log(name3);    // Julius (배열에서 받아온 값)
console.log(surname3); // Anonymous (기본값)

// 객체 분해
let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options; // {분해할 객체의 키를 변수로 사용}

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200


let options2 = {
    title: "Menu",
    width: 100,
    height: 200
};

// { 객체 프로퍼티: 목표 변수 이름 = 기본값 }
let { width: w, height: h, title: t, weight: we = 300 } = options2;

console.log(t);  // Menu
console.log(w);  // 100
console.log(h);  // 200
console.log(we);  // 200

// 구조 분해 할당
let user5 = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = false } = user5;
console.log(name);
console.log(age);
console.log(isAdmin);

// 최대 급여 계산하기
let salaries = {
    "John": 100,
    "Hogu": 300,
    "Pete": 300,
    "Mary": 250
};
function topSalary(salaries) {
    let max = 0;
    let maxName = null;

    for (const [name, salary] of Object.entries(salaries)) { // salaries에 들어있는 이름과 급여를 name, salary변수에 대입
        if (max < salary) { // salary가 max보다 크다면 
            max = salary; // max에 저장
            maxName = name; // maxName에 name저장
        }
    }

    return maxName;
}
console.log(topSalary(salaries));



