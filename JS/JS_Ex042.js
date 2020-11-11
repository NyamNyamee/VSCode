let map = new Map();
console.log(map.size); // 맵 크기
map.set('name', 'one');
map.set('age', 25);
map.set('age', 27); // 같은 키가 있으면 기존 키의 값이 수정됨
map.set('gender', true);
map.set(1, '하하'); // 문자형 이외의 타입으로도 키 지정 가능
console.log(map);
console.log(map.get('age'));
map.delete(1); // 키가 1인 요소 삭제
console.log(map);
// map.clear(); 맵의 모든 요소 삭제
console.log(map.size); // 맵 크기

// 체이닝
map.set('1', 'str1')
    .set(1, 'num1')
    .set(true, 'bool1');
console.log(map);

console.log(map.keys()); // map의 키를 모은 객체 리턴
console.log(map.values()); // map의 값를 모은 객체 리턴
console.log(map.entries()); // map의 [키, 값]을 쌍으로 모은 객체 리턴

let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// 각 (키, 값) 쌍을 대상으로 함수를 실행
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value} / ${map}`); // cucumber: 500 ...
});

// 배열 형식으로 map 생성
let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
console.log(map1);
console.log(map1.get('1'));

// 객체를 map으로 변경하기
let obj = {
    name: "John",
    age: 30
};
let map2 = new Map(Object.entries(obj));
console.log(map2);

// map을 객채로 변경하기
let obj1 = Object.fromEntries(map2);
console.log(obj1);

