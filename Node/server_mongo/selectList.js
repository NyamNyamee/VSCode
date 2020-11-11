var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function (error, database) {
    if (error) {
        console.log(error);
    } else {
        db = database.db('school');
        // 1. 읽어올 document 필드값 정의
        var query = { gender: 'M' }; // where gender='M' 과 의미가 같은 쿼리
        // 2. find( ) 함수에 query 입력
        var cursor = db.collection('student').find(query); // find 안에 조건을 쓰면 해당 조건에 맞는 데이터만 불러옴
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