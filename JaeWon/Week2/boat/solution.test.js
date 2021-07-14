const solution = require('./solution.js');

describe('ths is test template code', () => {
  let numbers, limit, answer;

  it('입력값이 [70, 50, 80, 50] 일 때 기대값은 3 이어야 합니다.', () => {
    numbers = [70, 50, 80, 50];
    limit = 100;
    answer = 3;
    expect(solution(numbers, limit)).toStrictEqual(answer);
  });
  it('입력값이 [70, 80, 50] 일 때 기대값은 3 이어야 합니다.', () => {
    numbers = [70, 80, 50];
    limit = 100;
    answer = 3;
    expect(solution(numbers, limit)).toStrictEqual(answer);
  });
});
