module.exports = function solution(numbers) {
    const copyNum = numbers.map((num) => num.toString());
    
    const answer = copyNum.sort((a, b) => (b + a) - (a + b)).join('');
    // 예외처리
    if (answer[0] === '0') return '0';
    return answer;
  }