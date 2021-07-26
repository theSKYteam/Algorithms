/*
  다리를 지나는 트럭 - https://programmers.co.kr/learn/courses/30/lessons/42583
*/
module.exports = function solution (bridgeLength, weight, truckWeights) {
  // 입력길이가 10000 이므로 O(N^2)이하로 풀 수 있다.
  // 다리의 길이가 항상 같은 길이를 유지하게 하면 좀 더 직관적으로 풀 수 있을 것 같다.
  let answer = 0;
  const bridge = new Array(bridgeLength).fill(0);
  let totalWeight = 0;
  let totalCount = 0;
  let truckIdx = 0;

  // 다리를 건널 트럭이 모두 다리를 지나는 조건에 맞을때 까지 반복
  while (truckIdx < truckWeights.length || totalWeight > 0) {
    // 매 초마다 다리의 길이에서 트럭을 이동시키며 초를 증가시킨다.
    answer++;

    // 다리의 앞에서 부터 빠져나온 값을 빼준다
    const left = bridge.shift();
    if (left > 0) {
      // 빠져나온 값이 0보다 크면(트럭이면) 다리위의 총무게합과 트력수를 뺀다
      totalWeight -= left;
      totalCount--;
    }

    // 트럭이 진입할 수 있는 길이와 무게를 확인한다
    if (
      truckWeights[truckIdx] &&
      totalCount <= bridgeLength &&
      totalWeight + truckWeights[truckIdx] <= weight
    ) {
      // 진입할 수 있으면
      // 다리에 진입한 트럭갯수와 무게를 추가한다
      totalWeight += truckWeights[truckIdx];
      bridge.push(truckWeights[truckIdx]);
      totalCount++;
      truckIdx++;
    } else {
      // 진입할 수 없으면 0을 삽입한다.
      bridge.push(0);
    }
  }

  return answer;
};
