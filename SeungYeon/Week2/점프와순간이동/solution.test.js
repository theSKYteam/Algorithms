const solution = require('./solution.js');
const testCase = [
  { params: [5], return: 2 },
  { params: [6], return: 2 },
  { params: [5000], return: 5 },
  { params: [1], return: 1 }
];

let caseIdx = 0;
let input, output;
describe('점프와 순간이동', () => {
  beforeEach(() => {
    input = testCase[caseIdx].params;
    output = testCase[caseIdx].return;
  });
  afterEach(() => {
    caseIdx = caseIdx > testCase.length ? 0 : caseIdx + 1;
  });
  it(`입력값이 ${input} 일 때 기대값은 ${output} 이어야 합니다.`, () => {
    expect(solution(input)).toStrictEqual(output);
  });
  it(`입력값이 ${input} 일 때 기대값은 ${output} 이어야 합니다.`, () => {
    expect(solution(input)).toStrictEqual(output);
  });
  it(`입력값이 ${input} 일 때 기대값은 ${output} 이어야 합니다.`, () => {
    expect(solution(input)).toStrictEqual(output);
  });
  it(`입력값이 ${input} 일 때 기대값은 ${output} 이어야 합니다.`, () => {
    expect(solution(input)).toStrictEqual(output);
  });
});
