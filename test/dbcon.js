const mysql = require('mysql');
const { first } = require('underscore');
const connection = mysql.createConnection({ // 연결할 db정보
  host: 'localhost',
  user: 'jspUser',
  password: '123456',
  database: 'mydb2'
});

connection.connect(); // db에 연결

connection.query('SELECT * from Person', (error, rows, fields) => {
  if (error) throw error;
  console.log('Person info is: ', rows);
});

console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
connection.query('SELECT * from Person where age>=20 and age<30', (error, rows, fields) => {
  if (error) throw error;
  console.log('Person(20~29) info is: ', rows);
});

console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
connection.query('SELECT * from Person', (error, rows, fields) => {
  if (error) throw error;
  console.log('Person(age) info is: ', rows.age);
});

connection.end();