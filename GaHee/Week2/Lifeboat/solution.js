module.exports = function solution(people, limit) {
    // 최소로 필요한 구명보트의 개수?
    // 2명씩밖에 못타니까 제일 무거운 사람 + 제일 가벼운 사람 조합으로 타야함
    let count = 0;
    // 다들 오름차순으로 했던데 난 왜 내림으로 했지
    const sortedPeople = people.sort((a, b) => b - a);
    let start = 0;
    let last = sortedPeople.length - 1;

    // 넘으면 start만 이동, 안넘으면 같이 이동
    // count는 매번 올라감

    while (start < last) {
    	let sum = sortedPeople[start] + sortedPeople[last];
         
        if (sum <= limit) {
            last--;
        }   
        start++;
        count++;
    }
    
    // 이렇게 안하고 그냥 while문에 less than or equal to 했으면 됐다는 걸 몰랐음
    if(start === last) {
        count++;
    }

    return count;
}