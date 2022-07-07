/* eslint-disable space-before-function-paren */
// 만들 수 있는 가장 큰 정사각형의 크기를 담을 이차원배열 temp를 만든다.
// temp의 0번째 열과 0번째 행은 board와 동일하다.
// temp[i-1][j-1], temp[i-1][j], temp[i][j-1] 중에 하나라도 0이 있으면 temp[i][j]의 값은 board와 동일하다.
// 그렇지 않더라도 board[i][j]이 0이면 temp[i][j]의 값은 board와 동일하다.
// 위의 경우에 모두 해당하지 않을 경우 temp[i][j]의 값은 temp[i-1][j-1], temp[i-1][j], temp[i][j-1] 중에 가장 작은 수보다 1 큰 값이다.
module.exports = function solution(board) {
  const temp = [];

  for (let row = 0; row < board.length; row++) {
    temp.push([]);
    for (let col = 0; col < board[row].length; col++) {
      if (row === 0 || col === 0) {
        temp[row][col] = board[row][col];
      } else if (temp[row - 1][col - 1] === 0 || temp[row - 1][col] === 0 || temp[row][col - 1] === 0) {
        temp[row][col] = board[row][col];
      } else if (board[row][col] !== 0) {
        const min = Math.min(temp[row - 1][col - 1], temp[row - 1][col], temp[row][col - 1]);
        temp[row][col] = min + 1;
      } else {
        temp[row][col] = board[row][col];
      }
    }
  }

  const maxWidth = temp.reduce((width, row) => {
    const max = Math.max(...row);
    return width < max ? max : width;
  }, 0);

  return maxWidth * maxWidth;
};
