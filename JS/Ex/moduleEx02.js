const Square = require('./square.js');
const mySquare1 = new Square(2);
const mySquare2 = new Square(5);

console.log(`한변의 길이가 2인 정사각형의 넓이 : ${mySquare1.area()}`);
console.log(`한변의 길이가 2인 정사각형의 넓이 : ${mySquare2.area()}`);

const jsonData = require('./json_data.json');
// console.log(jsonData);
console.log(jsonData.squadName);
console.log("멤버");
for(i in jsonData.members){
    console.log(jsonData.members[i].name);
}

console.log(require.main);