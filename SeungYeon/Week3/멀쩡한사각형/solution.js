// w + h - 최대공약수 = 멀쩡하지 않은 사각형 개수
module.exports = function solution (w, h) {
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  const conta = w + h - gcd(w, h);

  return (w * h) - conta;
};

/* 풀이를 찾기까지의 의식의 흐름
8 = 4 * 2
12 = 4 * 3
최대공약수?? 최소공배수??
최대공약수 = 4
최소공배수 = 24

(8 * 12) - 16 = 80
16은 어디서 나온 애냐..?
24-8?? 그럼 12는 어디다가 쓰냐
20-4?? !!!!!!!
*/
