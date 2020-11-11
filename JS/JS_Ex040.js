// 배열과 메서드
/*
arr.splice(start)는 만능 스위스 맥가이버 칼 같은 메서드입니다. 
요소를 자유자재로 다룰 수 있게 해주죠. 
이 메서드를 사용하면 요소 추가, 삭제, 교체가 모두 가능합니다.

arr.splice(index[, deleteCount, elem1, ..., elemN])
첫 번째 매개변수는 조작을 가할 첫 번째 요소를 가리키는 인덱스(index)입니다. 
두 번째 매개변수는 deleteCount로, 제거하고자 하는 요소의 개수를 나타냅니다. 
elem1, ..., elemN은 배열에 추가할 요소를 나타냅니다.
*/
let arr = "한놈,두식이,석삼,너구리".split("");
console.log(arr.length, " : ", arr);
arr = "한놈,두식이,석삼,너구리".split(",");
console.log(arr.length, " : ", arr);
// 두번째 요소를 지우고 싶다!!!
delete arr[1];
console.log(arr.length, " : ", arr);

arr.splice(1, 1);
console.log(arr.length, " : ", arr);
arr.splice(1);
console.log(arr.length, " : ", arr);
arr.splice(0, 1, "두식이", "석삼", "너구리");
console.log(arr.length, " : ", arr);
let arr2 = arr.splice(1, 2); // 잘린내용을 리턴한다.
console.log(arr.length, " : ", arr);
console.log(arr2.length, " : ", arr2);
// 내용 삽입
arr2.splice(1, 0, "complex", "language");
console.log(arr2.length, " : ", arr2);
// 음수 인덱스사용 가능 : 뒤에서 첫번째에 0개를 삭제하고 3, 4를 추가해라  
arr.splice(-1, 0, 3, 4);
console.log(arr.length, " : ", arr);

// arr.slice는 arr.splice와 유사해 보이지만 훨씬 간단합니다.
// arr.slice([start], [end])
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr3.length, " : ", arr3);
console.log(arr3.length, " : ", arr3);
console.log(arr3.slice()); // 전체
console.log(arr3.slice(3));// 이후
console.log(arr3.slice(3, 5));// 3~5사이
console.log(arr3.slice(-3));// 뒤에서 3개
console.log(arr3.length, " : ", arr3);

// concat
// arr.concat은 기존 배열의 요소를 사용해 새로운 배열을 만들거나 
// 기존 배열에 요소를 추가하고자 할 때 사용할 수 있습니다.
// arr.concat(arg1, arg2...)

let arr4 = [1, 2];
console.log(arr4.length, " : ", arr4);
arr4 = arr4.concat(3);
console.log(arr4.length, " : ", arr4);
arr4 = arr4.concat([4, 5, 6, 7]);
console.log(arr4.length, " : ", arr4);
arr4 = arr4.concat([8, 9], [10, 11]);
console.log(arr4.length, " : ", arr4);
arr4 = arr4.concat({ name: '한사람', age: 22 }); // 객체 추가
console.log(arr4.length, " : ", arr4);

// forEach로 반복작업 하기
// arr.forEach는 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해줍니다.

let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//                    값, 인덱스, 배열
arr5.forEach(function (item, index, array) {
    console.log(item, " : ", index, " : ", array[index]);
});
console.log();
arr5.forEach(function (item) {
    console.log("4 * ", item, " = ", 4 * item);
});

/*
find와 findIndex
객체로 이루어진 배열이 있다고 가정해 봅시다. 
특정 조건에 부합하는 객체를 배열 내에서 어떻게 찾을 수 있을까요?
이럴 때 arr.find(fn)을 사용할 수 있습니다.
*/
let arr6 = new Array(10);
for (let i = 0; i < arr6.length; i++) {
    arr6[i] = parseInt(Math.random() * 100);
}
console.log(arr6.length, " : ", arr6);
// 값을 찾는다.
let value = arr6.find(function (item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
    // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
    return item % 4 == 0;
});
console.log(value);
// 위치를 찾는다.
index = arr6.findIndex(function (item, index, array) {
    // true가 반환되면 반복이 멈추고 해당 요소를 반환합니다.
    // 조건에 해당하는 요소가 없으면 undefined를 반환합니다.
    return item % 9 == 0;
});
console.log(index);

// filter
// 조건을 충족하는 요소가 여러 개라면 arr.filter(fn)를 사용하면 됩니다.
let oddArr = arr6.filter(function (item, index, array) {
    return item % 2 != 0;
});
console.log(oddArr.length, " : ", oddArr);


/*
map
arr.map은 유용성과 사용 빈도가 아주 높은 메서드 중 하나입니다.
map은 배열 요소 전체를 대상으로 함수를 호출하고, 함수 호출 결과를 배열로 반환해줍니다.
*/
let doubleArr = arr6.map(function (item, index, array) {
    return item * 2;
});
console.log(doubleArr.length, " : ", doubleArr);
let boolArr = arr6.map(function (item, index, array) {
    return item % 2 == 0;
});
console.log(boolArr.length, " : ", boolArr);

/*
정렬
arr.sort(fn);
*/
console.log("정렬전 : ", arr6);
arr7 = arr6.sort(); // 자신이 변한다. 오름차순
console.log("정렬후 : ", arr6);
console.log("정렬후 : ", arr7);
// 내림차순
arr7.sort(function (first, second) {
    return second - first;
});
console.log("정렬후 : ", arr7);

arr = "한놈,두식이,석삼,너구리".split(",");
console.log(arr);
arr.sort();
console.log(arr);
// 내림차순
arr.sort(function (first, second) {
    // 0,-1, 1을 리턴하게 만든다.
    return second > first ? 1 : second < first ? -1 : 0;
});
console.log(arr);
arr = [
    { name: "한사람", age: 24 },
    { name: "두사람", age: 33 },
    { name: "두사람", age: 54 },
    { name: "세사람", age: 33 },
    { name: "네사람", age: 21 },
]
console.log(arr);
arr.sort() // 객체 배열은 그냥은 정렬이 안됨!!!
console.log(arr);
// 반드시 함수를 써야 함
arr.sort(function (a, b) {
    return a.age - b.age;
});
console.log(arr);
// 나이가 같으면 이름 내림차순으로 해라!!!
arr.sort(function (a, b) {
    if (a.age == b.age) {
        return (a.name < b.name ? 1 : -1)
    } else {
        return a.age - b.age;
    }
});
console.log(arr);
// 문자열로 취급
arr = [1, 2, 15];
console.log(arr);
arr.sort();
console.log(arr);
// 숫자로 취급
arr.sort(function (a, b) {
    return a - b;
});
console.log(arr);
// 화살표 함수도 가능
arr.sort((a, b) => b - a);
console.log(arr);

arr = [4, 1, 6, 3, 8];
arr.reverse(); // 뒤집기
console.log(arr);

let names = 'Bilbo, Gandalf, Nazgul';
arr = names.split(', ');
for (let name of arr) {
    console.log(`${name}에게 보내는 메시지`);
}

arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2); // 두번째 인수는 개수
console.log(arr);

// 결합
arr = ['Bilbo', 'Gandalf', 'Nazgul'];
let str = arr.join(';');
console.log(str);
str = arr.join('|-|');
console.log(str);

/*
arr.reduce와 arr.reduceRight도 이런 메서드들과 유사한 작업을 해줍니다. 
그런데 사용법이 조금 복잡합니다. 
reduce와 reduceRight는 배열을 기반으로 값 하나를 도출할 때 사용됩니다.

let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
인수로 넘겨주는 함수는 배열의 모든 요소를 대상으로 차례차례 적용되는데, 
적용 결과는 다음 함수 호출 시 사용됩니다.

함수의 인수는 다음과 같습니다.
accumulator – 이전 함수 호출의 결과. initial은 함수 최초 호출 시 사용되는 초깃값을 나타냄(옵션)
item – 현재 배열 요소
index – 요소의 위치
array – 배열
*/
arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current, 0); // 초기값 0
console.log(result);

result = arr.reduce((sum, current) => sum * current, 1); // 초기값 1
console.log(result);

