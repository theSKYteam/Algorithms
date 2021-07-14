module.exports = function solution(progresses, speeds) {
  const queue = [];
  const answer = [];

  progresses.forEach((el, idx) => {
    const remain = Math.ceil((100 - el) / speeds[idx]);
    queue.push(remain);
  });

  while (queue.length > 0) {
    let release = queue.shift();
    let count = 1;
    while (queue[0] <= release) {
      queue.shift();
      count++;
    }
    answer.push(count);
  }

  return answer;
};
