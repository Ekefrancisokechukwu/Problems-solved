function game(board) {
  const rows = board.length;
  const cols = board[0].length;

  const directions = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];

  const newBoard = board.map((row) => [...row]);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let liveNeighbors = 0;

      for (let [dr, dc] of directions) {
        let newRow = r + dr;
        let newCol = c + dc;

        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
          liveNeighbors += board[newRow][newCol];
        }
      }

      if (board[r][c] === 1) {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          newBoard[r][c] = 0;
        }
      } else {
        if (liveNeighbors === 3) {
          newBoard[r][c] = 1;
        }
      }
    }
  }

  return newBoard;
}

const board = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
];

console.log(game(board));
