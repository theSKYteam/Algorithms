/*
  멀쩡한 사각형 - https://programmers.co.kr/learn/courses/30/lessons/62048
  풀이에 참고한 링크
    - https://leedakyeong.tistory.com/entry/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%A9%80%EC%A9%A1%ED%95%9C-%EC%82%AC%EA%B0%81%ED%98%95-in-python
    - https://velog.io/@ajufresh/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%A9%80%EC%A9%A1%ED%95%9C-%EC%82%AC%EA%B0%81%ED%98%95-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4-Java
*/
module.exports = function solution (w, h) {
  // 입력의 크기가 1억 이므로 O(N) 이하로 풀어야 한다

  // w : 8, h: 12 일 때
  // 대각선으로 자를 때 같은 패턴이 반복되는 지점, x,y가 교차되는 점은 다음과 같다
  // (2,3), (4, 6), (6, 9), (8, 12)
  // 위 패턴이 4번 반복된다.
  // 또한 4는 8과 12의 최대 공약수 이다

  // 하나의 패턴에서 나오는 블럭의 크기는 아래식과 같다
  // (w / gcd) * (h / gcd) => (8 / 4) * (16 / 4) => 2 * 3 = 6
  // 하나의 패턴에서 잘리는 사각형의 개수는 w + h - 1 -> 2 + 3 - 1
  // 1을 빼는 이유는 가로세로 기준으로 잘리는 영역이 겹치기 때문
  // 최종적으로 다음과 같은 식을 도출할 수 있다.
  // 전체 크기 - ((넓이/최대공약수 + 높이/최대공약수 - 1) * 최대공약수)

  // 유클리드 호제법을 사용한 최대 공약수를 구하는 함수
  const funcGcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return funcGcd(b, a % b);
    }
  };
  const gcd = funcGcd(w, h);
  return w * h - (w / gcd + h / gcd - 1) * gcd;
};
