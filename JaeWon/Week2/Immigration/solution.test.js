const solution = require('./solution.js');

describe('ths is test template code', () => {
  let numbers, array, answer;

  it('입력값이 6, [7, 10] 일 때 기대값은 28 이어야 합니다.', () => {
    numbers = 6;
    array = [7, 10];
    answer = 28;
    expect(solution(numbers, array)).toStrictEqual(answer);
  });
});
