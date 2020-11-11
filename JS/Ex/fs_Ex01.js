const fs = require('fs');
/*
파일시스템 함수들은 파일I/O와 디렉토리I/O함수에 관한 것이다. 
모든 파일싀스템 함수들은 동기/비동기 함수를 제공한다. 
이 둘의 차이점을 설명하면 동기는 값을 함수안에서 바로 리턴하며(함수이름에 Sync가 붙음), 
I/O작업이 수행하는 동안 다른 코드가 실행되는 것을 막는다.
*/
// 동기식 : 차례대로 실행된다.
let data = fs.readFileSync('./message.txt', 'utf8');
// 모두 읽을때까지 기다린다.
console.log(typeof data);
console.log("동기식 :", data);

// 비동기식 : 모두 읽었을때 콜백한수가 실행된다.
fs.readFile('./message.txt', 'utf8', function (err, data) {
    // 파일 다 읽었을 대 호출 됨
    if(err){
        console.log('에러발생!!!');
        console.log(err);
    }else{
        console.log(typeof data);
        console.log("비동기식 :",data);
    }
});
console.log('완료'); // 이것이 먼저 실행됨!!!

/*
아래 목록은 FS API의 비동기 함수들 전부이다. 이 함수들은 동기함수를 가지고 있지만, 읽기 쉽게 하기 위해 목록에서 뺐다.

Read & write a file (fully buffered)
fs.readFile(filename, [encoding], [callback])
fs.writeFile(filename, data, encoding='utf8', [callback])
Read & write a file (in parts)
fs.open(path, flags, [mode], [callback])
fs.read(fd, buffer, offset, length, position, [callback])
fs.write(fd, buffer, offset, length, position, [callback])
fs.fsync(fd, callback)
fs.truncate(fd, len, [callback])
fs.close(fd, [callback])
Directories: read, create & delete
fs.readdir(path, [callback])
fs.mkdir(path, mode, [callback])
fs.rmdir(path, [callback])
Files: info
fs.stat(path, [callback])
fs.lstat(path, [callback])
fs.fstat(fd, [callback])
fs.realpath(path, [callback])
Readable streams
fs.ReadStream
Event: 'open'
fs.createReadStream(path, [options])
Writable streams
fs.WriteStream
Event: 'open'
file.bytesWritten
fs.createWriteStream(path, [options])
Files: rename, watch changes & change timestamps
fs.rename(path1, path2, [callback])
fs.watchFile(filename, [options], listener)
fs.unwatchFile(filename)
fs.watch(filename, [options], listener)
fs.utimes(path, atime, mtime, callback)
fs.futimes(path, atime, mtime, callback)
Files: Owner and permissions
fs.chown(path, uid, gid, [callback])
fs.fchown(path, uid, gid, [callback])
fs.lchown(path, uid, gid, [callback])
fs.chmod(path, mode, [callback])
fs.fchmod(fd, mode, [callback])
fs.lchmod(fd, mode, [callback])
Files: symlinks
fs.link(srcpath, dstpath, [callback])
fs.symlink(linkdata, path, [callback])
fs.readlink(path, [callback])
fs.unlink(path, [callback])

아마도 주로 비동기 형태를 많이 사용하겠지만, 동기 형태가 더 적절한 케이스도 있다(예를 들어 서버 시작 시 설정 파일을 읽는 작업). 
비동기 작업 시에는 작업이 시작되고 금방 끝날 수 있기 때문에 조금 더 생각을 하고 작업할 필요가 있다.
*/
