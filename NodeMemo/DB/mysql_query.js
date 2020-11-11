const mysql   = require('mysql');
var config  = require('./db_config.json');
//                                         명령, 콜백함수
var sqlConnection = function sqlConnection(sql, next) {
    // DB 연결
    var connection = mysql.createConnection(config.db);
    // 쿼리 실행
    connection.query(sql, function (err) {
        connection.end(); 
        if (err) {
            throw err;
        }
        // 콜백함수를 실행!!!!!
        next.apply(this, arguments);
    });
}
module.exports = sqlConnection;
