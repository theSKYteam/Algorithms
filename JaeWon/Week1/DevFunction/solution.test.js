const solution = require('./solution.js');

describe('ths is test template code', () => {
  let progresses, speeds, answer;
  it('입력값이 [1] 일 때 기대값은 [1] 이어야 합니다.', () => {
    progresses = [93, 30, 55];
    speeds = [1, 30, 5];
    answer = [2, 1];
    expect(solution(progresses, speeds)).toStrictEqual(answer);
  });
  it('입력값이 [2] 일 때 기대값은 [2] 이어야 합니다.', () => {
    progresses = [95, 90, 99, 99, 80, 99];
    speeds = [1, 1, 1, 1, 1, 1];
    answer = [1, 3, 2];
    expect(solution(progresses, speeds)).toStrictEqual(answer);
  });
});
