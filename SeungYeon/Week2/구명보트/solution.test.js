const solution = require('./solution.js');
const testCase = [
  { params: [[70, 50, 80, 50], 100], return: 3 },
  { params: [[70, 80, 50], 100], return: 3 }
];

let caseIdx = 0;
let input, output;

describe('구명보트', () => {
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
