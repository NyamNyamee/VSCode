function min(x,y){
    return x < y ? x : y;
}
function max(x,y){
    return x > y ? x : y;
}
function power(x, n){
    let result = 1;
    while(n>0){
        result *= x;
        n--;
    }
    return result;
}
function sum(){
    let s;
    if(arguments.length>0){ // 인수가 있다면
        if(typeof(arguments[0])==='string'){
            s = "";
        }else{
            s = 0;
        }
        // 자바스크립트 함수에는 모든 인수를 받아주는 배열 arguments가 숨어있다.
        for(i in arguments){
            s += arguments[i];
        }
    }
    return s;
}

// 함수를 인수로 받는 함수
function minmax(fn, x, y){
    return fn(x,y);
}

// 함수를 리턴하는 함수
function fn(x){
    return function(){
        return (x*x);
    }
}

function count(x) {
    return function () {
        return ++x;
    }
}