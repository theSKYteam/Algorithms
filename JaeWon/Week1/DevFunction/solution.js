module.exports = function (progresses, speeds) {
  const answer = [];
  const leftDays = progresses.map((progress, i) =>
    Math.ceil((100 - progress) / speeds[i])
  );
  let current = leftDays[0];
  let output = 1;
  for (let i = 1; i < leftDays.length; i++) {
    if (current >= leftDays[i]) {
      output++;
    } else {
      current = leftDays[i];
      answer.push(output);
      output = 1;
    }
  }
  answer.push(output);
  return answer;
};
