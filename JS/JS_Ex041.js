// 배열과제
/*
border-left-width를 borderLeftWidth로 변경하기
"my-short-string"같이 여러 단어를 대시(-)로 구분한 문자열을 카멜 표기법을 사용한 문자열 
"myShortString"로 변경해주는 함수를 작성해보세요.
대시는 모두 지우고 각 단어의 첫 번째 글자는 대문자로 써주면 됩니다.
*/

function camelize(str) {
    let arr = str.split("-");
    for (i in arr) {
        if (i == 0)
            arr[i] = arr[i];
        else
            arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
    }
    return arr.join("");
}

console.log(camelize("border-left-width"));
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');
function camelize(str) {
    return (
        str
            .split("-")
            .map((item, index) => index == 0 ? item : item.charAt(0).toUpperCase() + item.substring(1))
            .join("")
    );
}
console.log(camelize("border-left-width"));
console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

/*
특정 범위에 속하는 요소 찾기
배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에 집어넣고, 
해당 요소를 출력해주는 함수 filterRange(arr, a, b)를 작성해봅시다.
새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운 배열이어야 합니다.
*/
function filterRange(ar, a, b) {
    return ar.filter(function (item) {
        return item >= a && item <= b;
    });
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (조건에 맞는 요소)
console.log(arr); // 5,3,8,1 (기존 배열은 변경되지 않았습니다.)

/*
배열 arr의 요소 중 a와 b 사이에 속하지 않는 요소는 삭제해주는 함수 filterRangeInPlace(arr, a, b)를 작성해보세요. 
배열의 모든 요소(i)는 다음 조건을 만족해야 합니다. 
a ≤ arr[i] ≤ b
*/
function filterRangeInPlace(arr, a, b) {
    /*
    for(let i=0;i<arr.length;i++){
        if(arr[i]<a || arr[i]>b){ // 배열에서 요소가 삭제되면 인덱스가 앞으로 당겨지기 때문에 i--해줘야 함
            arr.splice(i,1);
            i--;
        }
    }
    */
    for (let i = arr.length - 1; i >= 0; i--) { // 뒤에서부터 지워가면 인덱스를 i--해줄 필요가 없음
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
        }
    }
}
filterRangeInPlace(arr, 1, 4);
console.log(arr);

// 배열 내림차순 정렬
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
console.log(arr2);

// 배열 복사본 정렬
let arr3 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
    let arr2;
    arr2 = arr.splice(0);
    arr2.sort();
    return arr2;
}
console.log(arr3);
console.log(copySorted(arr3));

// 기능확장 가능 계산기
function Calculator() {
    this.methods = { // methods라는 객체 생성
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) { // calculate함수 생성
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}
let calc = new Calculator;
console.log(calc.calculate("3 + 7"));
console.log(calc.calculate("3 - 7"));
console.log(calc.calculate("3 * 7"));
console.log(calc.calculate("3 / 7"));
let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log(result);

// 이름 매핑하기
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(item => item.name);

console.log(names); // John, Pete, Mary

// 객체 매핑하기
let john2 = { name: "John", surname: "Smith", id: 1 };
let pete2 = { name: "Pete", surname: "Hunt", id: 2 };
let mary2 = { name: "Mary", surname: "Key", id: 3 };

let users2 = [john2, pete2, mary2];

let usersMapped = users.map(user => ({ // 중괄호를 꼭 소괄호로 감싸줘야 한다
    fullName: `${user.name} ${user.surname}`, id: user.id
}));
console.log(usersMapped);

// 나이를 기준으로 객체 정렬하디
let john3 = { name: "John", age: 25 };
let pete3 = { name: "Pete", age: 30 };
let mary3 = { name: "Mary", age: 28 };

let arr4 = [pete3, john3, mary3];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age); // 나이순 오름차순 정렬
}
sortByAge(arr4);

// now: [john, mary, pete]
console.log(arr4[0].name); // John
console.log(arr4[1].name); // Mary
console.log(arr4[2].name); // Pete

// 배열 요소 무작위로 섞기
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
let arr5 = [1, 2, 3];
shuffle(arr5);
console.log(arr5);
shuffle(arr5);
console.log(arr5);
shuffle(arr5);
console.log(arr5);

// 평균 나이 구하기
let john5 = { name: "John", age: 25 };
let pete5 = { name: "Pete", age: 30 };
let mary5 = { name: "Mary", age: 29 };

let users3 = [john5, pete5, mary5];
function getAverageAge(arr) {
    return Math.round(users.reduce((prev, arr) => prev + arr.age, 0) / users.length);
}
console.log(getAverageAge(users3));

// 중복 없는 요소 찾아내기
function unique(arr) {
   let result = [];
   for(str of arr){
       if(!result.includes(str)){
           result.push(str);
       }
   }
   return result;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(strings);
console.log(unique(strings)); // Hare, Krishna, :-O

