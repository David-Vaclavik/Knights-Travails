function knightMoves(start, end) {
  // prettier-ignore
  const legalMoves = [[-2,1],[-2,-1],[-1,2],[-1,-2],[1,2],[1,-2],[2,1],[2,-1]];

  let queue = [{ position: start, path: [start] }];
  let visited = new Set();
  visited.add(`${start[0]},${start[1]}`);

  while (queue.length > 0) {
    let current = queue.shift();

    if (current.position[0] === end[0] && current.position[1] === end[1]) {
      return current.path;
    }

    // goes through all legal moves
    for (let move of legalMoves) {
      let newRow = current.position[0] + move[0];
      let newCol = current.position[1] + move[1];

      if (isValidPosition(newRow, newCol) && !visited.has(`${newRow},${newCol}`)) {
        visited.add(`${newRow},${newCol}`);

        queue.push({
          position: [newRow, newCol],
          path: [...current.path, [newRow, newCol]],
        });
      }

      // console.log("Exploring:", current.position, "Path so far:", current.path);
    }
  }
}

// Check if coordinates are valid before accessing
function isValidPosition(row, col) {
  return row >= 0 && row < 8 && col >= 0 && col < 8;
}

console.log("------ TEST ------");

// const move = knightMoves([0, 0], [0, 0]);
// const move = knightMoves([0, 0], [1, 2]);
// const move = knightMoves([3, 3], [4, 3]);
const move = knightMoves([0, 0], [7, 7]);

const util = require("util");
console.log(
  util.inspect(move, {
    // maxArrayLength: null,
    // breakLength: 150,
    compact: true,
    // depth: null,
    // showHidden: false,
    // colors: false,
  })
);
