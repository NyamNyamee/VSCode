// bar.js

// ReferenceError: a is not defined
// console.log(a);

/*
이 문제를 해결하는 방안으로, 굳이굳이굳이굳이!! bar.js에 foo.js 모듈을 불러오고자 합니다.
이때, require 함수를 씁니다. require함수로 foo.js를 bar.js로 가지고 옵니다.
*/
// const foo = require('./foo.js') // foo.js, bar.js는 같은 디렉토리.
// console.log(foo.a) // undefined

/*
하지만, 여전히 undefined 문제가 생깁니다.
node bar.js
ReferenceError: a is not defined
왜그럴까요? 여기서 exports의 필요성을 알 수 있습니다.
foo.js에 exports가 없기 때문이라고 합니다.
그래서 저는 foo.js를 다음과 같이 고쳤습니다.
/foo.js
const a = 10
exports.a = a;

그리고 나서 실행해보니 문제없이 원하는 값이 나오게 되었습니다.
*/

const foo = require('./foo.js') // foo.js, bar.js는 같은 디렉토리.
console.log(foo.a) // undefined

/*
require()는 뭐고, exports는 무슨 역할을 하는 것일까요? module.exports와 exports는 무슨 관계일까요?
Require()함수는 module.exports를 리턴한다.
Require()함수의 소스코드는 복잡합니다.
하지만, 요약하자면 다음과 같은 모양새로 구성되어있습니다. 

var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    eval(fileAsStr)                          //line 4
    return module.exports                    //line 5
}
line 1에서는 src의 인자를 받아옵니다
line 2에서는 소스 파일을 읽어서 fileAsStr에 저장합니다.
line 3에서는 module.exports라는 빈 해시를 만들어 둡니다.
line 4에서는 fileAsStr을 eval 합니다. 이 과정은 사실상 src를 복붙한다고 생각하면 좋습니다.

결국 
const foo = require('./foo.js')
한다면

var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    const a = 10
    exports.a = a;                           
    return module.exports                    //line 5
}
이런 모양이 된다는것 입니다.

line 5에서 require는 해당 exports 해시를 아웃풋으로 내보냅니다.

//bar.js
const foo = require('./foo.js')
console.log(foo.a)

위의 코드는 런타임에는 사실 이런 모습이라고 보면 됩니다.

//bar.js
const foo = { a : 10 }
console.log(foo.a)

결국은 foo에서 exports에 들어간 <key,value>들이 require()함수의 아웃풋으로 나오는 것이지요.



require()에 대해서는 이해했으니, 이제 exports로 넘어가 볼까요?
위에서 exports는 foo.js함수의 특정 값을 bar.js로 넘겨주고 싶을 때 등장했는데요.
그 과정이 왜 필요한지 앞선 사례를 통해 재확인해보고자 합니다.

일단, 위에서도 밝혔듯이, require()함수는 다음과 같습니다. (위와 동일)
var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    eval(fileAsStr)                          //line 4
    return module.exports                    //line 5
}

line4의 eval 단계가 일종의 코드 복붙 단계라고 보면 된다고 말씀드렸습니다.
var require = function(src){                 //line 1
    var fileAsStr = readFile(src)            //line 2
    var module.exports = {}                  //line 3
    const a = 10                             //line 4.1
    exports.a = a;                           //line 4.2
    return module.exports                    //line 5
}

여기서 트릭입니다.
exports와 module.exports는 같은 대상을 지칭하고 있는 서로 다른 두 명칭이라는 점입니다.
따라서, 바로 위 스니펫을 다시 해석하자면, 
line 3에서 module.exports의 변수명으로 빈 해시를 만들었고
line 4.2에서 exports에 <key: value>로서 <a : 10>을 넣은 것이며 이는 곧,
module.exports에 <key: value>로서 <a : 10>을 넣은 것과 같습니다.
이 즈음 되면 궁금해집니다. exports와 module.exports는 무슨 차이일까요?

exports와 module.exports의 차이
exports는 단순히 module.exports를 참조할 뿐입니다. 짧은 alias일 뿐입니다. 끝.
공식문서가 그게 다랍니다.

module.exports와 exports는 같은 객체를 바라보고 있으며, exports는 (위에 걸어둔 공식 문서대로 말하자면) module.exports의 shortcut입니다.
*/

