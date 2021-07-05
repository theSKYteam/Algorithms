const solution = require('./template.js');

describe('ths is test template code', () => {
  it('입력값이 [1] 일 때 기대값은 [1] 이어야 합니다.', () => {
    expect(solution(1)).toStrictEqual(1);
  });
  it('입력값이 [2] 일 때 기대값은 [2] 이어야 합니다.', () => {
    expect(solution(2)).toStrictEqual(2);
  });
  it('입력값이 [3] 일 때 기대값은 [3] 이어야 합니다.', () => {
    expect(solution(3)).toStrictEqual(3);
  });
});
