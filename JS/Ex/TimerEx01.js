// 1. Timer를 이용한 작업 스케쥴링(setTimer)
// setTimer : 1회성 콜백 함수의 실행
// 사용법 : timerID = setTimer(callback, delayMilliSeconds, [args]); 
//  clearTimer : 타이머 취소
// 사용법 : clearTimer(timerID);

function simpleTimeout(consoleTimer){
    console.timeEnd(consoleTimer);
}
 
console.time("twoSecond");
console.time("oneSecond");
console.time("fiveSecond");
console.time("50MilliSecond");

setTimeout(simpleTimeout, 2000, "twoSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");


var i=0;
var timer1;
function timer(){
    i++;
    console.log(i, '초');
    if(i>=10) {
        clearTimeout(timer1);
        return;
    }
    setTimeout(timer,1000);
}
timer1 = setTimeout(timer,1000)

