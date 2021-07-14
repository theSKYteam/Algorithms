/*
  programmers codingtest 구명보트 (https://programmers.co.kr/learn/courses/30/lessons/42885)
*/
module.exports = function solution (people, limit) {
  people.sort((a, b) => a > b ? 1 : -1);
  let answer = 0;
  let first = 0;
  let last = people.length - 1;
  while (first <= last) {
    if (people[first] + people[last] <= limit) {
      first++;
      last--;
    } else {
      last--;
    }
    answer++;
  }
  return answer;
};
