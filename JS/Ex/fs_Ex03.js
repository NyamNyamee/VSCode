var fs = require('fs');
// 예외처리하기 
// 파일 읽기
try {
    // 존재하지 않는 파일을 읽으려 합니다.
    var data = fs.readFileSync('nonExist.txt', 'utf8');
    console.log(data);
}
catch(err) {
    console.log(err);
}
 
// 파일 쓰기
try {
    fs.writeFileSync('/unauthorized.txt', 'Hello World', 'utf8');
    console.log('파일 쓰기 성공');
}
catch(err) {
    console.log(err);
}