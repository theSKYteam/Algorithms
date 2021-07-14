/*
  가장 큰 수 - https://programmers.co.kr/learn/courses/30/lessons/42746
*/
module.exports = function solution (numbers) {
  // 조합으로 풀시 시간복잡도 -> O(2^n)
  // 조합으로는 풀 수 없다. O(NLogN), O(N) 을 만족하게 풀어여 한다.

  // 정렬을 사용한 풀이
  // number를 정렬할 때 뒤의 수 와 합쳐서 큰수가 되는 쪽을 선택하게 한다.
  // 뒤로 순위가 밀려날 수록 더했을 때 숫자가 작아지는 수 가 되어야 한다.
  let answer = numbers.map(v => v.toString());
  answer.sort((a, b) => {
    const ab = parseInt(a + b);
    const ba = parseInt(b + a);
    return ba - ab;
  });

  answer = answer.join('');
  // 답이 0일 경우는 문자열로 '0'으로 통과해줘야 한다
  return Number(answer) === 0 ? '0' : answer;
};
