module.exports = function solution (w, h) {
  function gcd (a, b) { // 최대 공약수
    return a % b === 0 ? b : gcd(b, a % b);
  }
  function getRatio (num1, num2) { // 비율 계산
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
  for (let i = 1; i <= Math.min(w, h) / gcdNumber; i++) { // 매 칸마다 지워지는 블럭 계산
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
