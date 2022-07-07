/*
 처음 풀이
 시간초과랑 6번 실패 나옴
 */
/*
function first (board) {
  let width, height;
  height = board.length;
  width = board[0].length;
  function dfs(matrix, x, y, length) {
    if (matrix[y][x] !== 1) return length;
    for (let i = 0; i < length; i++) {
      if (
        y + length > height - 1 ||
        y + i > height - 1 ||
        x + length > width - 1 ||
        x + i > width - 1 ||
        matrix[y + length][x + i] !== 1 ||
        matrix[y + i][x + length] !== 1
      ) {
        return length;
      }
    }
    return dfs(matrix, x, y, length + 1);
  }

  let answer = -1;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      answer = Math.max(answer, dfs(board, j, i, 0));
    }
  }
  return answer * answer;
}
*/

module.exports = function solution(board) {
  let height = board.length,
    width = board[0].length; // 가로 및 세로 길이
  let lengthArray = new Array(height + 1)
    .fill(0)
    .map((el) => new Array(width + 1).fill(0)); // 길이를 담아둘 2차원 배열 만들기
  let answer = 0;
  function checkPoint(x, y) {
    if (x < 0 && y < 0 && x >= width && y >= height) return; // 범위 밖 예외 처리
    let current = board[y][x]; // 현재 노드
    if (current === 1) {
      // 노드가 확장 가능하다면,
      lengthArray[y + 1][x + 1] =
        Math.min(
          lengthArray[y][x],
          lengthArray[y + 1][x],
          lengthArray[y][x + 1]
        ) + 1; // 이전 값 중 가장 작은 크기의 도형이 다음 도형이 될 수 있다.
      answer = Math.max(lengthArray[y + 1][x + 1], answer); // 그중 가장 큰 값을 저장한다.
    }
  }
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      checkPoint(i, j); // 매 포인트를 조사한다.
    }
  }

  return answer * answer; // 정사각형의 넓이를 반환한다.
};
