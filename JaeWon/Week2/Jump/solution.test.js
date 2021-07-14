
const solution = require('./solution.js');

describe('ths is test template code', () => {
  let input, answer;
  it('입력값이 5 일 때 기대값은 6 이어야 합니다.', () => {
    input = 5;
    answer = 2;
    expect(solution(input)).toStrictEqual(answer);
  });
  it('입력값이 6 일 때 기대값은 6 이어야 합니다.', () => {
    input = 6;
    answer = 2;
    expect(solution(input)).toStrictEqual(answer);
  });
  it('입력값이 5000 일 때 기대값은 5 이어야 합니다.', () => {
    input = 5000;
    answer = 5;
    expect(solution(input)).toStrictEqual(answer);
  });
});
