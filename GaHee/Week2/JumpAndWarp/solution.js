module.exports = function solution(n)
{
    let count = 0;
    // 건전지 사용량의 최솟값 구하기!
    // 2^k + j = n
    // when n is odd, it always gets a remainder (subtract the remainder)
    // when n is even, it can warp (divide the n by 2)
    // keep dividing and subtracting until n = 0, which means the arrival
    // => while문
    
    while (n > 0) {
        if (n % 2 === 0) {
            n = n / 2;
            
        } else {
            // 한칸 이동하면 건전지는 -1, ans는 +1
            n -= 1;
            count++;
        }
    }

    return count;
}