var fs = require('fs');
// 비동기식 : 모두 읽었을때 콜백함수가 실행된다.
fs.readFile('./Ex/json_data.json', 'utf8', function (err, data) {
    // 파일 다 읽었을 대 호출 됨
    if (err) {
        console.log('에러발생!!!');
        console.log(err);
    } else {
        console.log(typeof data);
        console.log(typeof JSON.parse(data));
        data = JSON.parse(data);
        for (key in data.members) {
            console.log(key, " : ", data.members[key]);
        }
    }
});