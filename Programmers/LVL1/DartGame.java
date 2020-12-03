/*
카카오톡 게임별의 하반기 신규 서비스로 다트 게임을 출시하기로 했다. 
다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
갓 입사한 무지는 코딩 실력을 인정받아 게임의 핵심 부분인 점수 계산 로직을 맡게 되었다. 다트 게임의 점수 계산 로직은 아래와 같다.

다트 게임은 총 3번의 기회로 구성된다.
각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
*/

public class DartGame {
    public static void main(String[] args) {
        System.out.println(solution("1S2D*3T"));
    }

    public static int solution(String dartResult) {
        int answer = 0;

        // 다트게임의 결과를 char배열로 저장
        char[] darts = dartResult.toCharArray();
         // 각 회의 점수를 저장할 배열
        int[] score = new int[3];
        // score의 인덱스 역할을 할 변수. cnt가 숫자를 만나면 +1씩 증가되고, 인덱스가 0~2여야 하므로 초기값은 -1으로 설정해줘야 함
        int cnt = -1; 

        for (int i = 0; i < darts.length; i++) {
            if (darts[i] >= '0' && darts[i] <= '9') // 숫자라면
            {
                cnt++; // 숫자를 만나면 cnt를 올려 새로운 게임스코어의 인덱스를 변경
                if (darts[i] == '1' && darts[i + 1] == '0') // 숫자가 10이라면
                {
                    score[cnt] = 10;
                    i++;
                } 
                else // 숫자가 10이 아니라면
                {
                    score[cnt] = darts[i] - '0'; // 숫자로 변경해 score에 저장
                }
            } 
            else if (darts[i] == 'D') 
            {
                score[cnt] *= score[cnt];
            } 
            else if (darts[i] == 'T') 
            {
                score[cnt] *= score[cnt] * score[cnt];
            } 
            // 스타상일때
            else if (darts[i] == '*') {
                // 첫번째 회가 아니라면 이전 회의 점수도 두배 해줌
                if (cnt > 0) 
                {
                    score[cnt - 1] *= 2;
                }
                // 현재 회의 점수 두배
                score[cnt] *= 2;
            } 
            // 아차상일때 현재 회의 점수를 음수로 변경
            else if (darts[i] == '#') 
            {
                score[cnt] *= -1;
            }
        }
        // 각 회의 점수를 기록해놓은 score의 요소를 전부 더해줌
        for (int i = 0; i < score.length; i++) 
        {
            answer += score[i];
        }
        System.out.println(answer);
        return answer;
    }
}