import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 
예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
 */
public class SkillCheck2 {
    public static void main(String[] args) {
        System.out.println(solution(12345));
    }


    public static int[] solution(long n) {
        String str = n + "";
        int[] answer = new int[str.length()];
        int cnt = 0;

         while(n > 0){
            answer[cnt] = (int)(n % 10);
            n /= 10;
            cnt++;
         }

         System.out.println(Arrays.toString(answer));

        return answer;
    }
}