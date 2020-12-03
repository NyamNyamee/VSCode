import java.util.Date;

/*
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 
예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.
*/

public class SkillCheck4 {
    public static void main(String[] args) {
        System.out.println(solution(5, 24));
        
    }

    public static String solution(int a, int b) {
        // 요일 배열에 요일 담기
        String[] day_of_week = { "FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU" };
        int[] day_of_month = { 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
        int answer_day_point = 0;

        // 몇번째 날짜인지 계산해서 요일 배열에서 확인 월(a), 일(b)
        a = a - 1;
        for (int i = 0; i < a; i++) {
            answer_day_point += day_of_month[i];
        }
        answer_day_point += (b - 1);

        return day_of_week[answer_day_point % 7];
    }

}
