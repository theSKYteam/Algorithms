module.exports = function solution(w, h) {
  function gcd(a, b) {
    // 최대 공약수
    return a % b === 0 ? b : gcd(b, a % b);
  }
  function getRatio(num1, num2) {
    // 비율 계산
    if (num1 < num2) {
      return num2 / num1;
    } else {
      return num1 / num2;
    }
  }
  const gcdNumber = gcd(w, h); // 최대 공약수 계산
  const ratio = getRatio(w, h); // 매칸 찍히는 점의 위치 비율
  let blank = 0; // 지워지는 블럭 갯수
  let start = 0; // 시작 지점
  for (let i = 1; i <= Math.min(w, h) / gcdNumber; i++) {
    // 매 칸마다 지워지는 블럭 계산
    let end = Math.ceil(ratio * i);
    if (i === Math.min(w, h) / gcdNumber) {
      end = Math.max(w, h) / gcdNumber;
    }
    blank += end - start; // 매칸 지워지는 갯수 저장
    start = Math.floor(ratio * i); // 다음 시작지점 설정
  }
  return w * h - blank * gcdNumber; // 최대 공약수 만큼 곱해서 전체 갯수 출력
};

// 다른 풀이
/* 그래프 아래 위는 완벽히 대칭을 이용할 수 있다. */

/*
  그래프 위쪽의 사각형은 무조건 유효하다.
  위 쪽의 사각형의 전체 모양은 아래쪽과 대칭이다. 
  위쪽 전체를 2배하면 같은 결과가 나온다.

  function solution () {
    let blank = 0;
    for (let i = 1; i <= w; i++) {
      blank += Math.ceil((h / w) * i);
    }
    return (w * h - blank) * 2;
  }


  FIXME: 이후에 알았는데, 기울기를 세로 / 가로를 하는가 가로 / 세로를 하는가에 따라서 테스트 케이스를 통과하지 않는 경우도 있다.
 */
