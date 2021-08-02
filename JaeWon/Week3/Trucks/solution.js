module.exports = function solution (bridgeLength, weight, truckWeights) {
  // 길이 10,000
  // 무게 10,000
  // 1억번 더하는 경우도 생김
  // 인덱스를 증가 시키는 방법으로 다리 위에서 나오는 지점을 결정
  const queue = new Array(bridgeLength).fill(0); // 다리 길이 만큼의 배열을 만들고
  const first = truckWeights.shift();
  queue[0] = first; // 가장 앞의 트럭을 다리 위에서 출발
  let time = 1; // 총 걸린 시간
  let totalWeight = first; // 현재 처음 차만 올라가 있으니까
  while (totalWeight !== 0) { // 다리 위에 차가 없으면 멈춘다.
    const current = truckWeights[0];// 지금 차
    const last = queue.pop(); // 마지막 트럭
    totalWeight -= last; // 마지막 트럭 무게만큼 빼주고
    time++; // 시간이 흐름
    if (totalWeight + current <= weight) { // 더 올라갈 수 있으면
      truckWeights.shift();
      totalWeight += current; // 다리위에 있는 차 무게를 더하고
      queue.unshift(current); // 큐에 차를 추가
    } else {
      queue.unshift(0); // 큐에 빈 차를 추가
    }
  }
  return time;
};
