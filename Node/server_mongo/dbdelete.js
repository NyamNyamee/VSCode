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
        // 1. 삭제할 대상 쿼리
        var query = { name: 'Joe' };
        // 2. remove 함수에 입력
        db.collection('student').remove(query, function (err, removed) {
            if (err) {
                console.log(err);
            } else {
                console.log('removed successfully!');
            }
        });
        database.close();
    }
});