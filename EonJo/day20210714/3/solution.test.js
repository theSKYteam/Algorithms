const solution = require('./solution.js');

describe('입국심사 테스트', () => {
  it('입력값이 6, [7, 10] 일 때 기대값은 28 이어야 합니다.', () => {
    expect(solution(6, [7, 10])).toStrictEqual(28);
  });
});
