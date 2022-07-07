const solution = require('./solution.js');

describe('다리위를 지나는 트럭 테스트', () => {
  let bridgeLength, weight, truckWeights, answer;

  it('입력값이 2, 12, [7,4,5,6] 일 때 기대값은 8 이어야 합니다.', () => {
    bridgeLength = 2;
    weight = 10;
    truckWeights = [7, 4, 5, 6];
    answer = 8;
    expect(solution(bridgeLength, weight, truckWeights)).toStrictEqual(answer);
  });
  it('입력값이 100, 100, [10] 일 때 기대값은 101 이어야 합니다.', () => {
    bridgeLength = 100;
    weight = 100;
    truckWeights = [10];
    answer = 101;
    expect(solution(bridgeLength, weight, truckWeights)).toStrictEqual(answer);
  });
  it('입력값이 100, 100, [10,10,10,10,10,10,10,10,10,10] 일 때 기대값은 110 이어야 합니다.', () => {
    bridgeLength = 100;
    weight = 100;
    truckWeights = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    answer = 110;
    expect(solution(bridgeLength, weight, truckWeights)).toStrictEqual(answer);
  });
});
