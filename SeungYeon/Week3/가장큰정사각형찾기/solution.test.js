const solution = require('./solution.js');
const testCase = [
  {
    params: [
      [
        [0, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0]
      ]
    ],
    return: 9
  },
  {
    params: [
      [
        [0, 0, 1, 1],
        [1, 1, 1, 1]
      ]
    ],
    return: 4
  },
  {
    params: [
      [
        [1, 1, 1, 0],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [0, 0, 1, 0]
      ]
    ],
    return: 9
  },
  {
    params: [
      [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1]
      ]
    ],
    return: 1
  }
];

let caseIdx = 0;
let input, output;
describe('가장 큰 정사각형 찾기', () => {
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
