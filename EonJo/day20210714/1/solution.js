/*
  구명보트 - https://programmers.co.kr/learn/courses/30/lessons/42885
*/
module.exports = function solution (people, limit) {
  // 최대로 보트에 태울 수 있는 사람은 2명
  // 두 사람의 몸무게 합쳤을때 limit 값의 차이가 작을수록 보트를 적게 쓰면서 사람을 많이 태울 수 있다.
  // limit와 몸무게 합의 차이가 작게 나려면 가능한 무거운 사람을 가벼운 사람과 같이 태우는게 효율적이다
  let answer = 0;
  let left = 0;
  let right = people.length - 1;

  // 사람을 몸무게 순으로 오름차순으로 정렬
  people.sort((a, b) => a - b);

  while (left <= right) {
    // 정렬된 배열의 왼쪽(첫번째)값과 오른쪽(마지막)값을 선택해서 합치면
    // 가장 작은값과 큰값을 합친 결과가 된다.
    const weight = people[left] + people[right];

    if (weight > limit) {
      // 합친 결과가 limit를 넘어가면 보트숫자를 증가시키고 오른쪽 인덱스를 줄인다.
      // 가장 큰수에 가장 작은수를 더했기 때문에 더 효율적인 조합은 나올 수 없다.
      right--;
    } else if (weight <= limit) {
      // 합친 결과가 limit를 넘어가지 않으면 보트숫자를 증가시키고 왼쪽인덱스를 늘리고, 오르쪽 인덱스를 줄인다.
      left++;
      right--;
    }
    answer++;
  }
  return answer;
};
