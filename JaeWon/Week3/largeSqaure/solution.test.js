const solution = require('./solution.js');

describe('가장 큰 사각형 테스트', () => {
  let board, answer;

  it('입력값이 [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]] 일 때 기대값은 9 이어야 합니다.', () => {
    board = [
      [0, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ];
    answer = 9;
    expect(solution(board)).toStrictEqual(answer);
  });
  it('입력값이 100, 100, [10] 일 때 기대값은 4 이어야 합니다.', () => {
    board = [
      [0, 0, 1, 1],
      [1, 1, 1, 1],
    ];
    answer = 4;
    expect(solution(board)).toStrictEqual(answer);
  });
});
