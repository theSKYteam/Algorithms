const solution = require('./solution.js');

describe('멀쩡 한 사각형 테스트', () => {
  let w, h, answer;

  it('입력값이 8, 12 일 때 기대값은 80 이어야 합니다.', () => {
    w = 8;
    h = 12;
    answer = 80;
    expect(solution(w, h)).toStrictEqual(answer);
  });
  it('입력값이 5, 8 일 때 기대값은 28 이어야 합니다.', () => {
    w = 5;
    h = 8;
    answer = 28;
    expect(solution(w, h)).toStrictEqual(answer);
  });
});
