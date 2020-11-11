var Client = require('mongodb').MongoClient;

Client.connect('mongodb://localhost:27017/school', function (error, database) {
    if (error) {
        console.log(error);
    } else {
        db = database.db('school'); // db선택 혹은 생성
        // 1. 저장할 데이터 생성
        var michael = { name: 'Michael', age: 15, gender: 'M' };
        // 2. student 컬렉션의 insert() 함수에 입력
        var student = db.collection('student'); // school이라는 db에 student컬렉션을 생성
        student.insertOne(michael); // studnet컬렉션에 데이터 저장

        // 1. 저장할 데이터를 미리 생성
        var jordan = { name: 'Jordan', age: 16, gender: 'M' };
        var amanda = { name: 'Amanda', age: 17, gender: 'F' };
        var jessica = { name: 'Jessica', age: 15, gender: 'F' };
        var james = { name: 'James', age: 19, gender: 'M' };
        var catherine = { name: 'Catherine', age: 18, gender: 'F' }

        // 2. insertMany() 함수에 배열 형태로 입력
        student.insertMany([jordan, amanda, jessica, james, catherine]); // student 컬렉션에 데이터 배열 저장
        database.close();
    }
});