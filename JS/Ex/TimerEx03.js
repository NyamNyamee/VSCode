// 1. Timer를 이용한 작업 스케쥴링(setTimer)
// setTimer : 1회성 콜백 함수의 실행
// 사용법 : timerID = setTimer(callback, delayMilliSeconds, [args]); 
//  clearTimer : 타이머 취소
// 사용법 : clearTimer(timerID);

// 2. Timer를 이용한 주기적 작업 스케쥴링(setInterval)
// setInterval: 주기적 콜백 함수의 실행
// 사용법 : timerID = setInterval(callback, delayMilliSeconds, [args]); 
// clearInterval : 타이머 취소
// 사용법 : clearInterval(timerID);

// 3. Timer를 이용한 즉시 실행후 주기적 작업 스케쥴링(setImmediate)
// setImmediate: 호출과 함께 콜백 함수를 실행후 주기적 실행
// 사용법 : timerID = setImmediate(callback, delayMilliSeconds, [args]); 
// clearImmediate : 타이머 취소
// 사용법 : clearImmediate(timerID);
var i=0;
var timer1;
function timer(){
    i++;
    console.log(i, '초');
    if(i>=10) {
        clearImmediate(timer1);
        return;
    }
    // timer1 = setImmediate(timer, 10000); 
}
timer1 = setImmediate(timer, 10000); 
