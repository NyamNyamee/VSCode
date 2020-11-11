// node console 내장 모듈 
// count() : 특정 내부 카운터를 유지 하고 주어진 label로 호출 된 횟수를 출력합니다 .
console.count()
console.count('default')
console.count('abc')
console.count('xyz')
console.count('abc')
console.count()

// console.countReset() 내부 카운터를 재설정합니다
console.countReset('abc')
console.count('abc')
console.countReset()
console.count()

console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['a']);
console.table([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }], ['b']);