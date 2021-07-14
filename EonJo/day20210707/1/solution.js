/*
  기능개발 - https://programmers.co.kr/learn/courses/30/lessons/42586
*/
module.exports = function solution (progresses, speeds) {
  const answer = [];
  let index = 0;

  while (index < progresses.length) {
    // 첫번째 작업이 완료되는 날을 구한다
    // 첫번째 작업이 완료되는날 = 100 - (현재작업량) / 속도
    const day = Math.ceil((100 - progresses[index]) / speeds[index]);
    // 작업이 완료되는 날에 다른 작업이 얼마나 진행되는지 계산한다
    for (let i = index; i < progresses.length; i++) {
      // 작업량 = 현재 작업량 + (속도 * 날짜)
      progresses[i] += (speeds[i] * day);
    }
    // 앞에서 부터 작업이 완료된 갯수를 구한다.
    let count = 0;
    for (let i = index; i < progresses.length; i++) {
      // 앞에서부터 확인하기 때문에 100이 넘지않으면 중지한다
      if (progresses[i] < 100) {
        break;
      } else {
        index++;
        count++;
      }
    }
    answer.push(count);
  }

  return answer;
};
