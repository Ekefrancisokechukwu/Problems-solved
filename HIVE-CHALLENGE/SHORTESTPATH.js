function shortestPathChallenge(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  if (grid[0][0] === 1 || grid[rows - 1][cols - 1] === 1) return -1;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let queue = [[0, 0, 0]];
  let visited = new Set();
  visited.add(`0,0`);

  while (queue.length > 0) {
    let [r, c, steps] = queue.shift();

    if (r === rows - 1 && c === cols - 1) return steps;

    for (let [dr, dc] of directions) {
      let newRow = r + dr;
      let newCol = c + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0 &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        queue.push([newRow, newCol, steps + 1]);
        visited.add(`${newRow},${newCol}`);
      }
    }
  }

  return -1;
}

const grid = [
  [0, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 1, 0],
];

console.log(shortestPathChallenge(grid));
