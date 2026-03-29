import React from "react";

function Board() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#e8fff7] via-[#d0f5e8] to-[#c2f0e0]">
      
      {/* Board */}
      <div className="grid grid-cols-15 grid-rows-15 w-[600px] h-[600px] border-4 border-white border-white rounded-xl shadow-lg">
        
         {Array(225).fill(0).map((_, index) => {
          const row = Math.floor(index / 15);
          const col = index % 15;

          let bg = "bg-white";

          // 🟥 RED HOME (top-left)
          if (row < 6 && col < 6) bg = "bg-red-400";

          // 🟩 GREEN HOME (top-right)
          if (row < 6 && col > 8) bg = "bg-green-400";

          // 🟨 YELLOW HOME (bottom-left)
          if (row > 8 && col < 6) bg = "bg-yellow-300";

          // 🟦 BLUE HOME (bottom-right)
          if (row > 8 && col > 8) bg = "bg-blue-400";

          // ➕ Vertical path
          if (col === 7) bg = "bg-gray-200";

          // ➕ Horizontal path
          if (row === 7) bg = "bg-gray-200";

          // 🏁 Center (winning zone)
          if (row === 7 && col === 7) bg = "bg-black";

          return (
            <div
              key={index}
              className={`border border-gray-300 ${bg}`}
            ></div>
          );
        })}
        

      </div>
    </div>
  );
}

export default Board;