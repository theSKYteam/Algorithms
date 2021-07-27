
/*
  programmers codingTest 점프와 순간이동 (https://programmers.co.kr/learn/courses/30/lessons/12980)
*/
module.exports = function solution (n) {
  let answer = 0;
  while (n >= 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      answer++;
      n -= 1;
    }
  }
  return answer;
};
