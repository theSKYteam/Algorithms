const solution = require('./solution.js');

describe('가장 큰 수 Test', () => {
  it('입력값이 [6, 10, 2] 일 때 기대값은 "6210" 이어야 합니다.', () => {
    expect(solution([6, 10, 2])).toStrictEqual('6210');
  });
  it('입력값이 [3, 30, 34, 5, 9] 일 때 기대값은 "9534330" 이어야 합니다.', () => {
    expect(solution([3, 30, 34, 5, 9])).toStrictEqual('9534330');
  });
  it('입력값이 [0, 0, 0, 0] 일 때 기대값은 "0" 이어야 합니다.', () => {
    expect(solution([0, 0, 0, 0])).toStrictEqual('0');
  });
});