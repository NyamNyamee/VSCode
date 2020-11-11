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
        var query = {}
        // 1. skip - 선택된 document 중에서 건너뛸 개수
        // 2. limit - 선택된 document 중에서 skip 다음 부터 가져올 개수
        // 현재 document 의 개수가 6개이면 2개를 건너띄고 3번째 부터 2개(3번과 4번)를 가져온다.
        var cursor = db.collection('student').find(query).skip(2).limit(2); // 전체 데이터 중 3,4번 데이터를 가져옴
        cursor.each(function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                if (doc != null) {
                    console.log(doc);
                }
            }
        });
        database.close();
    }
});