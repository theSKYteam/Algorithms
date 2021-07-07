module.exports = function (numbers) {
  let answer = numbers;
  answer = answer.sort((x, y) => ('' + x + y > '' + y + x ? -1 : 1));
  answer = answer.join('');
  return Number(answer) === 0 ? '0' : answer;
};
