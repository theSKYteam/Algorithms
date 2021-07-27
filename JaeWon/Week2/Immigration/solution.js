module.exports = function (n, times) {
  times.sort((a, b) => a > b ? 1 : -1);
  let max = times[times.length - 1] * n;
  let min = 0;
  while (min <= max) {
    const avg = Math.floor((min + max) / 2);
    let number = 0;
    times.forEach(el => {
      number += Math.floor(avg / el);
    });
    if (number >= n) {
      max = avg - 1;
    } else {
      min = avg + 1;
    }
  }
  return min;
};
