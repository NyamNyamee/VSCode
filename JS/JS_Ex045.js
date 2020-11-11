// Date 객체와 날짜
let today = new Date();
console.log(today);
console.log(today.toTimeString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toLocaleString());

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(50 * 365 * 24 * 60 * 60 * 1000);
console.log(date2);
console.log(date2 - date1);
console.log(new Date(date2 - date1));

// new Date(datestring) : 인수가 하나인데, 문자열이라면 해당 문자열은 자동으로 구문 분석(parsed)됩니다. 
let date3 = new Date("2020-10-02");
console.log(date3);
let date4 = new Date("2020-01-01");
console.log(date4);
// new Date(year, month, date, hours, minutes, seconds, ms)
let date5 = new Date(2011, 0, 1, 0, 0, 0, 0); // 2010-12-31T15:00:00.000Z
console.log(date5);
let date6 = new Date(2020, 10, 1); // 2020-10-31T15:00:00.000Z
console.log(date6);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
console.log(today.getFullYear()); // 년자리 연도
console.log(today.getYear()); // 1900년 이후 연도수
console.log(today.getMonth()); // 월(0~11)
console.log(today.getDate()); // 일
console.log(today.getDay());  // 요일
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMinutes());
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')


/*
날짜 생성하기
2012년 2월 20일, 오전 3시 12분을 나타내는 Date 객체를 만들어보세요(시간대는 로컬).
그리고 alert 함수를 이용해 생성한 객체를 출력하세요.
*/
let date7 = new Date(2012, 1, 20, 3, 12); // 월값은 -1해야 한다.
console.log(date7.toLocaleString());

/*
요일 보여주기
날짜를 입력하면 ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’ 형식으로 요일을 보여주는 함수 getWeekDay(date)를 만들어보세요.
*/
function getWeekDay(date) {
    return "일,월,화,수,목,금,토".split(",")[date.getDay()] + "요일";
}
console.log(getWeekDay(today));
for (let day = 1; day <= 31; day++) {
    console.log("2020-10-", day, " : ", getWeekDay(new Date(2020, 9, day))); // 2020년 10월 달력
}

// 유럽 기준 달력
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // 일요일(숫자 0)은 유럽에선 7입니다.
        day = 7;
    }
    return day;
}
let date01 = new Date(2020, 9, 22);
console.log(date01.toLocaleDateString());
console.log(getLocalDay(date01));

// n일 전 출력하기
function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}
console.log(getDateAgo(date01, 2));

// 달의 마지막 일
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0); // year년 month+1월 0일이 되서 year년 month월 마지막 일자로 변함
    return date.getDate();
}
console.log(getLastDayOfMonth(2020, 2));

// 오늘 몇 초가 지났을까
function getSecondsToday() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    return Math.round(diff / 1000 / 60);
}
console.log(getSecondsToday() + '분 지났습니다');

// 오늘 몇 초가 남았을까
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000 / 60);
}
console.log(getSecondsToTomorrow() + '분 남았습니다');

// 상대 날짜 출력하기
function formatDate(date) {
    let diff = new Date() - date; // 차이(ms)
    let sec = Math.floor(diff / 1000); // 차이를 초로 변환
    let min = Math.floor(sec / 60); // 차이를 분으로 변환

    if (sec < 1) { // 차이가 1초 미만이라면
        return '현재';
    }
    if (sec < 60) {
        return sec + '초 전';
    }
    if (min < 60) {
        return min + '분 전';
    }

    // 날짜의 포맷을 변경
    // 일, 월, 시, 분 앞에 0을 추가해줌
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // 모든 컴포넌트의 마지막 숫자 2개를 가져옴

    // 컴포넌트를 조합
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}
console.log(formatDate(new Date(new Date - 1))); // "현재"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30초 전"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5분 전"
// 어제를 나타내는 날짜를 "일.월.연 시:분" 포맷으로 출력
console.log(formatDate(new Date(new Date - 86400 * 1000))); // 하루 전