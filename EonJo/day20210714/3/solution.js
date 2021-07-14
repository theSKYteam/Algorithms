/*
  입국심사 - https://programmers.co.kr/learn/courses/30/lessons/43238
*/
module.exports = function solution (n, times) {
  // 검색 범위가 매우 넓음으로 이분탐색법을 적용하여 풀이한다.
  // 최소, 최대값을 정의하고 이 안에서 범위를 절반씩 줄여가면서 탐색한다.

  // 최소 최대값 정의
  const MIN = 1;
  const MAX = Math.max(...times) * n;
  let answer = MAX;

  const binerySearch = (n, start, end) => {
    if (start > end) {
      return;
    }

    // 중앙 값을 구한다
    const mid = Math.floor((start + end) / 2);

    let count = 0;
    // 중앙값(시간)내 심사할 수 있는 사람의 수를 구한다
    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]);
      if (count >= n) {
        break;
      }
    }

    if (count >= n) {
      // 사람의 수가 n 보다 크거나 같으면
      // 더 작은 시간 범위내에 가능한 값이 있는지 확인해야 한다.
      // 탐색범위의 최대값을 중앙값보다 1 작게하여 다시 검색한다.
      answer = mid;
      binerySearch(n, start, mid - 1);
    } else {
      // 사람의 수가 n 보다 작으면
      // 탐색범위를 최소값을 중앙값보다 1크게 하여 다시 검색한다.
      binerySearch(n, mid + 1, end);
    }
  };

  binerySearch(n, MIN, MAX);
  return answer;
};
