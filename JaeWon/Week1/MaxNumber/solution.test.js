const solution = require('./solution.js');

describe('ths is test template code', () => {
  let numbers, answer;
  it('입력값이 [6, 10, 2] 일 때 기대값은 "6210" 이어야 합니다.', () => {
    numbers = [6, 10, 2];
    answer = '6210';
    expect(solution(numbers)).toStrictEqual(answer);
  });
  it("입력값이 [3, 30, 34, 5, 9] 일 때 기대값은 '9534330' 이어야 합니다.", () => {
    numbers = [3, 30, 34, 5, 9];
    answer = '9534330';
    expect(solution(numbers)).toStrictEqual(answer);
  });
});
