const solution = require('./solution.js');

describe('구명보트', () => {
  it('입력값이 [70, 50, 80, 50], 100 일 때 기대값은 3 이어야 합니다.', () => {
    expect(solution([70, 50, 80, 50], 100)).toStrictEqual(3);
  });

  it('입력값이 [70, 80, 50], 100 일 때 기대값은 3 이어야 합니다.', () => {
    expect(solution([70, 80, 50], 100)).toStrictEqual(3);
  });
});
