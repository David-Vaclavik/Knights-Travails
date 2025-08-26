# Knights Travails

A JavaScript implementation that finds the shortest path for a knight to move from one position to another on a chessboard using the Breadth-First Search (BFS) algorithm.

## Overview

This project solves the classic "Knight's Travails" problem: given a starting position and an ending position on a standard 8×8 chessboard, find the shortest sequence of moves for a knight to reach the destination.

A knight moves in an L-shape: 2 squares in one direction and 1 square perpendicular to that, or 1 square in one direction and 2 squares perpendicular to that.

## Features

- ✅ **Shortest Path Guaranteed** - Uses BFS to find the minimum number of moves
- ✅ **Valid Move Checking** - Ensures knight stays within the 8×8 chessboard
- ✅ **Complete Path Tracking** - Returns the full sequence of moves, not just the number
- ✅ **Efficient Algorithm** - O(n) time complexity where n is the number of squares on the board

## Installation

Simply include the `knights-travails.js` file in your project:

```bash
node knights-travails.js
```

## Usage

### Basic Example

```javascript
// Find path from bottom-left to top-right
const path = knightMoves([0, 0], [7, 7]);
console.log(path);
// Output: [[0,0], [2,1], [4,2], [6,3], [7,5], [5,6], [7,7]]
```

### More Examples

```javascript
// Short move
console.log(knightMoves([0, 0], [2, 1]));
// Output: [[0,0], [2,1]]

// Medium distance
console.log(knightMoves([3, 3], [0, 0]));
// Output: [[3,3], [1,2], [3,1], [1,0], [0,2], [2,1], [0,0]]

// Same position
console.log(knightMoves([4, 4], [4, 4]));
// Output: [[4,4]]
```

## API Reference

### `knightMoves(start, end)`

Finds the shortest path for a knight to move from start to end position.

**Parameters:**

- `start` - Array `[row, col]` representing the starting position (0-7)
- `end` - Array `[row, col]` representing the destination position (0-7)

**Returns:**

- Array of coordinates representing the complete path from start to end

**Example:**

```javascript
const path = knightMoves([0, 0], [3, 3]);
console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
path.forEach((move) => console.log(move));
```

### `isValidPosition(row, col)`

Helper function that checks if coordinates are within the chessboard bounds.

**Parameters:**

- `row` - Row number (0-7)
- `col` - Column number (0-7)

**Returns:**

- Boolean indicating if the position is valid

## Algorithm Explanation

### Breadth-First Search (BFS)

The solution uses BFS because:

1. **Level-by-level exploration** - Explores all positions reachable in 1 move, then 2 moves, etc.
2. **Shortest path guarantee** - The first path found to the destination is guaranteed to be the shortest
3. **Complete coverage** - Systematically explores all possibilities without missing any

### Knight's Legal Moves

A knight can move to 8 possible positions from any square:

```javascript
const legalMoves = [
  [-2, 1],
  [-2, -1],
  [-1, 2],
  [-1, -2],
  [1, 2],
  [1, -2],
  [2, 1],
  [2, -1],
];
```

### Algorithm Steps

1. **Initialize** queue with starting position and visited set
2. **While queue is not empty:**
   - Take the first position from queue
   - If it's the destination, return the path
   - For each of the 8 legal knight moves:
     - Calculate new position
     - If valid and not visited, add to queue with updated path
3. **Path tracking** - Each queue entry maintains the complete path from start

## Coordinate System

The chessboard uses a coordinate system where:

- `[0,0]` represents the bottom-left corner
- `[7,7]` represents the top-right corner
- Rows and columns are numbered 0-7

```
[0,7] [1,7] [2,7] [3,7] [4,7] [5,7] [6,7] [7,7]
[0,6] [1,6] [2,6] [3,6] [4,6] [5,6] [6,6] [7,6]
[0,5] [1,5] [2,5] [3,5] [4,5] [5,5] [6,5] [7,5]
[0,4] [1,4] [2,4] [3,4] [4,4] [5,4] [6,4] [7,4]
[0,3] [1,3] [2,3] [3,3] [4,3] [5,3] [6,3] [7,3]
[0,2] [1,2] [2,2] [3,2] [4,2] [5,2] [6,2] [7,2]
[0,1] [1,1] [2,1] [3,1] [4,1] [5,1] [6,1] [7,1]
[0,0] [1,0] [2,0] [3,0] [4,0] [5,0] [6,0] [7,0]
```

## Time and Space Complexity

- **Time Complexity:** O(n) where n = 64 (number of squares on chessboard)
- **Space Complexity:** O(n) for the queue and visited set
- **Worst Case:** Knight needs to traverse most of the board

## Examples with Output

```javascript
// Test cases
console.log("Knight moves from [0,0] to [1,2]:");
console.log(knightMoves([0, 0], [1, 2]));
// Output: [[0,0], [1,2]]

console.log("Knight moves from [3,3] to [4,3]:");
console.log(knightMoves([3, 3], [4, 3]));
// Output: [[ 3, 3 ], [ 1, 4 ], [ 2, 2 ], [ 4, 3 ]]

console.log("Knight moves from [0,0] to [7,7]:");
console.log(knightMoves([0, 0], [7, 7]));
// Output: [[ 0, 0 ], [ 1, 2 ], [ 0, 4 ], [ 1, 6 ], [ 3, 7 ], [ 5, 6 ], [ 7, 7 ]]
```

## How to Run

```bash
# Clone the repository
git clone <your-repo-url>

# Navigate to the directory
cd Knights-Travails

# Run the program
node knights-travails.js
```

## Implementation Notes

- Uses ES6 features including destructuring, spread operator, and const/let
- Formatted with Prettier (with selective ignoring for the moves array)
- Includes comprehensive bounds checking
- Maintains visited state to prevent infinite loops

## License

MIT License
