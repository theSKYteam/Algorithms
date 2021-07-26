const solution = require('./solution.js');

describe('점프와 순간이동 test', () => {
  let input, answer;
  it('입력값이 5 일 때 기대값은 6 이어야 합니다.', () => {
    expect(solution(5)).toStrictEqual(2);
  });
  it('입력값이 6 일 때 기대값은 6 이어야 합니다.', () => {
    expect(solution(6)).toStrictEqual(2);
  });
  it('입력값이 5000 일 때 기대값은 5 이어야 합니다.', () => {
    expect(solution(5000)).toStrictEqual(5);
  });
});