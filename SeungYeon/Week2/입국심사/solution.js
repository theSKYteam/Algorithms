/* Main Concept: 이분탐색(Up&Down) */
/* eslint-disable space-before-function-paren */
module.exports = function solution(n, times) {
  let min = 0;
  let max = n * Math.max(...times);
  let mid;

  while (min < max) {
    mid = Math.floor((max + min) / 2);
    let pass = 0;
    for (let i = 0; i < times.length; i++) {
      pass += Math.floor(mid / times[i]);
    }
    pass < n ? (min = mid + 1) : (max = mid);
  }

  return max;
};
