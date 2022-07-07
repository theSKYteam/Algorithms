/* eslint-disable camelcase */
// 현재 다리의 상태를 queue로 표현하여 풀이
module.exports = function solution (bridge_length, weight, truck_weights) {
  // queue로 풀자
  const queue = new Array(bridge_length).fill(0);
  // 현재 다리 위 트럭 무게 총합 체크
  let sum = 0;
  // 경과시간
  let time = 0;

  while (true) {
    time++;
    sum -= queue.shift();

    // 반복문 종료 조건
    if (truck_weights.length === 0 && sum === 0) {
      break;
    }

    if (truck_weights[0] + sum <= weight) {
      queue.push(truck_weights.shift());
      sum += queue[queue.length - 1];
    } else {
      queue.push(0);
    }
  }

  return time;
};
