var Client = require('mongodb').MongoClient;
/*
Paging 처리
데이터를 처리하다보면 document 의 개수가 많아서 paging 처리를 해야될 경우가 있는데 
아래와 같이 skip( ) 함수와 limit( ) 함수를 함께 사용해서 처리할 수 있습니다.
*/
Client.connect('mongodb://localhost:27017/school', function (error, database) {
    if (error) {
        console.log(error);
    } else {
        db = database.db('school');
        // 1. 수정 대상 쿼리
        var query = { name: 'Michael' };
        // 2. 데이터 수정 명령 : set 명령을 사용하면 특정 field의 값만 변경할 수 있음
        var operator = { name: 'Joe', age: 15, gender: 'M' };
        // 3. 수정 옵션 : upsert 가 true 일 경우 query 대상이 존재하면 update, 없으면 insert 처리
        var option = { upsert: true };
        db.collection('student').update(query, operator, option, function (err, upserted) {
            if (err) {
                console.log(err);
            } else {
                console.log('updated successfully!');
            }
        });
        database.close();
    }
});