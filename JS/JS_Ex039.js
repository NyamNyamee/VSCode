// 배열!!!!
let ar1 = new Array(1, 2, 3, 4); // 선언과 동시에 초기화
console.log(ar1.length, " : ", ar1);
let ar2 = new Array(10); // 길이기 10인 배열 생성
console.log(ar2.length, " : ", ar2);
let ar3 = []; // 길이가 0인 배열 생성
console.log(ar3.length, " : ", ar3);
let ar4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 선언과 동시에 초기화
console.log(ar4.length, " : ", ar4);

for (let i in ar4) {
    ar4[i] = parseInt(Math.random() * 100);
    console.log(`ar4[${i}]=${ar4[i]}`);
}
console.log();
for (let i of ar4) {
    console.log(`${i}`);
}

// 배열의 타입, 크기가 고정되어 있지 않아서 선언한 배열 길이를 초과해 요소를 대입하는 것도 가능

// 배열의 마지막에 콤마가 들어가도 상관없음
let fruits = [
    "사과",
    "오렌지",
    "자두",
];
console.log(fruits);

// 일반 배열을 큐(FIFO), 스택(FILO)처럼 사용가능
// 배열의 마지막 요소에 값 추가
fruits.push('살구');
fruits.push('포도');
fruits.push('키위');
console.log(fruits);

// 배열의 마지막 요소 추출하고 배열에서 삭제
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);

// 배열의 첫 요소를 추출하고 배열에서 삭제
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

// 배열의 첫 요소에 값 추가
fruits.unshift('멜론');
fruits.unshift('수박');
fruits.unshift('토마토');
console.log(fruits);


let arr = fruits; // 참조를 복사함(두 변수가 한 객체를 참조)
console.log(arr === fruits); // true
arr.push("배"); // arr배열에 배 추가
console.log(fruits); // fruits배열에도 배가 추가됨


fruits[99999] = 5; // 배열의 길이보다 훨씬 큰 숫자를 사용해 프로퍼티를 만듭니다.
fruits.age = 25; // 임의의 이름을 사용해 프로퍼티를 만듭니다.
console.log(fruits);

// 배열의 길이를 늘리고 줄일 수 있음
console.log(fruits.length);
fruits.length = 5; // 배열 길이를 줄이기
console.log(fruits);
fruits.length = 6; // 배열 길이를 늘리기
console.log(fruits)


// 배열 관련 연산
let styles = ["Jazz", "Blues"];
console.log(styles);
styles.push('Rock-n-Roll');
console.log(styles);
styles[parseInt(styles.length / 2)] = "Classics"; // 배열의 길이가 홀수일 때 2로 나누면 실수가 되므로 parseInt로 소수를 버려야 함
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift("Rap", "Raggae");
console.log(styles);

let arr2 = ["a", "b"];
arr2.push(function () {
    console.log(this);
})
arr2[2]();
console.log(typeof arr2);

function getMaxSubSum(arr) {
    sum = 0;

    return sum;
}