const solution = require('./solution.js');

describe('ths is test template code', () => {
  let numbers, answer;
  numbers = [6, 10, 2];
  answer = '6210';
  it(`입력값이 ${numbers} 일 때 기대값은 ${answer} 이어야 합니다.`, () => {
    expect(solution(numbers)).toStrictEqual(answer);
  });
  numbers = [3, 30, 34, 5, 9];
  answer = '9534330';
  it(`입력값이 ${numbers} 일 때 기대값은 ${answer} 이어야 합니다.`, () => {
    expect(solution(numbers)).toStrictEqual(answer);
  });
});
