const solution = require('./solution.js');

describe('ths is test template code', () => {
  it('입력값이 5 일 때 기대값은 2 이어야 합니다.', () => {
    expect(solution(5)).toStrictEqual(2);
  });
  it('입력값이 6 일 때 기대값은 2 이어야 합니다.', () => {
    expect(solution(6)).toStrictEqual(2);
  });
  it('입력값이 5000 일 때 기대값은 5 이어야 합니다.', () => {
    expect(solution(5000)).toStrictEqual(5);
  });
  it('입력값이 100 일 때 기대값은 3 이어야 합니다.', () => {
    expect(solution(100)).toStrictEqual(3);
  });
});
