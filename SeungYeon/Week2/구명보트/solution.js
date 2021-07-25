/* Main Concept: 가장 무거운 사람과 가장 가벼운 사람을 짝지어 태운다. */
/* eslint-disable space-before-function-paren */
module.exports = function solution(people, limit) {
  people.sort((a, b) => a - b); // 오름차순으로 정렬

  let count = 0;

  while (people.length > 0) {
    const max = people.pop();
    if (max + people[0] <= limit) {
      people.shift();
      count++;
    } else {
      count++;
    }
  }

  return count;
};
