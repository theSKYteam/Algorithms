const solution = require('./solution.js');

const testCase = [
  { params: [2, 3], return: 2 },
  { params: [4, 6], return: 16 },
  { params: [6, 9], return: 42 },
  { params: [8, 12], return: 80 }
];

let caseIdx = 0;
let input, output;

describe('멀쩡한 사각형 테스트', () => {
  beforeEach(() => {
    input = testCase[caseIdx].params;
    output = testCase[caseIdx].return;
  });

  afterEach(() => {
    caseIdx = caseIdx > testCase.length ? 0 : caseIdx + 1;
  });

  for (let i = 0; i < testCase.length; i++) {
    it(`입력값이 ${input} 일 때 기대값은 ${output} 이어야 합니다.`, () => {
      expect(solution(...input)).toStrictEqual(output);
    });
  }
});
