import React from "react";

const BOARD_SIZE = 15;

// Helper to decide cell color/type
const getCellType = (row, col) => {
  // Center home
  if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {
    return "bg-gray-300";
  }

  // Red home (top-left)
  if (row < 6 && col < 6) {
    return "bg-red-600";
  }

  // Green home (top-right)
  if (row < 6 && col > 8) {
    return "bg-green-600";
  }

  // Blue home (bottom-left)
  if (row > 8 && col < 6) {
    return "bg-blue-600";
  }

  // Yellow home (bottom-right)
  if (row > 8 && col > 8) {
    return "bg-yellow-600";
  }

  // Paths (simple cross)
  if (row === 7 || col === 7) {
    return "bg-white";
  }

  return "bg-gray-200";
};

function Board() {
  const grid = [];

  for (let row = 0; row < BOARD_SIZE; row++) {
    for (let col = 0; col < BOARD_SIZE; col++) {
      grid.push(
        <div
          key={`${row}-${col}`}
          className={`w-8 h-8 border border-gray-400 ${getCellType(
            row,
            col
          )}`}
        ></div>
      );
    }
  }

  return (
    <div className="flex justify-center items-center mt-5">
      <div className="grid grid-cols-15">{grid}</div>
    </div>
  );
}

export default Board;