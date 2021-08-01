const solution = require('./solution.js');
const testCase = [
  { params: [100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]], return: 110 },
  { params: [100, 100, [10]], return: 101 },
  { params: [2, 10, [7, 4, 5, 6]], return: 8 }
];

let caseIdx = 0;
let input, output;
describe('다리를 지나는 트럭', () => {
  beforeEach(() => {
    input = testCase[caseIdx].params;
    output = testCase[caseIdx].params;
  });

  afterEach(() => {
    caseIdx = caseIdx > testCase.length ? 0 : caseIdx + 1;
  });

  for (let i = 0; i < testCase.length; i++) {
    it(`입력값이 ${input} 일 때 기대값은 ${output} 이어야 합니다.`, () => {
      expect(solution(...input)).toStrictEqual(output);
    });
  };
});
