let set = new Set(); // 중복을 허용하지 않는 셋

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// 어떤 고객(john, mary)은 여러 번 방문할 수 있습니다.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// 셋에는 유일무이한 값만 저장됩니다.
console.log(set);
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // // John, Pete, Mary 순으로 출력됩니다.
}

// 중복 요소 제거
function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
console.log(values);

// 애너그램 걸러내기
function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // 단어를 소문자로 바꾸고 글자 단위로 쪼갠 후, 알파벳 순으로 정렬한 다음에 다시 합칩니다.
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));


// 반복 가능한 객체의 키
let map = new Map();
map.set("name", "John");

let keys = map.keys();
console.log(typeof keys, keys); // 타입이 배열이 아니라 이터레이터임

keys = Array.from(map.keys());
console.log(typeof keys, keys); // 타입이 배열임

keys.push("more");
console.log(keys); // name, more