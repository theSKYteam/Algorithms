/* Main Concept: solution(2n)은 solution(n)과 같다. solution(2n+1)은 solution(n)+1과 같다. solution(1)은 1이다. */
/* eslint-disable space-before-function-paren */
module.exports = function solution(n) {
  const findValue = (index) => {
    if (index === 0) {
      return 1;
    } else if ((index + 1) % 2 === 1) {
      return findValue(index - 1) + 1;
    } else {
      return findValue(Math.floor(index / 2));
    }
  };

  return findValue(n - 1);
};
