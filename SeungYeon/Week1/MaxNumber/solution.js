module.exports = function solution(numbers) {
  let answer = [...numbers];
  answer = answer.sort((a, b) => ('' + a + b > '' + b + a ? -1 : 1)).join('');

  return parseInt(answer) === 0 ? '0' : answer;
};
