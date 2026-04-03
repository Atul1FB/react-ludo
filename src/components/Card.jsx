
import { useState } from 'react';
import React  from 'react';

const modes = [
  { label: 'LUDO KING MANUAL', emoji: '📖', desc: 'Learn the rules' },
  { label: 'CLASSIC 1 TOKEN',  emoji: '🎯', desc: 'Solo token challenge' },
  { label: 'QUICK LUDO',       emoji: '⚡', desc: 'Fast-paced fun' },
  { label: 'SPEED LUDO',       emoji: '🚀', desc: 'Race to the finish' },
  { label: 'SPEED LUDO LITE',  emoji: '💨', desc: 'Lightweight speed' },
  { label: 'CLASSIC ONLINE',   emoji: '🌐', desc: 'Play with friends' },
];

function Card() {
  
  return (
    <div className='bg-gradient-to-br from-[#e8fff7] via-[#d0f5e8] to-[#c2f0e0]'>
      
      {/* Section Heading */} 
      <div className="text-center px-9 pt-10 pb-2"> 
        <h2 className="text-xl sm:text-2xl font-extrabold text-[#0e4d32] tracking-wide"> 
          Choose Your Game Mode </h2>
           <p className="text-sm text-[#3d8c68] font-semibold mt-1">
             Pick a mode and jump right in </p> 
             </div>
    
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto px-4 py-5">
      {modes.map((mode, i) => (
        <button
          key={i}
          onClick={() => {}}
          className="
            group relative flex flex-col items-center justify-center gap-1.5
            bg-gradient-to-br from-[#d4f7ed] to-[#b0f0d8]
            border-2 border-white/80
            rounded-2xl px-3 py-5
            shadow-[0_4px_0_#7dd4b0,0_6px_16px_rgba(0,0,0,0.1)]
            hover:shadow-[0_8px_0_#5cb88e,0_12px_24px_rgba(0,0,0,0.14)]
            hover:-translate-y-1
            active:translate-y-0.5
            active:shadow-[0_2px_0_#7dd4b0]
            transition-all duration-150
            cursor-pointer overflow-hidden
          "
        >
          {/* Shine overlay */}
          <div className="absolute inset-2 rounded-9xl bg-[radial-gradient(ellipse_at_60%_20%,rgba(255,255,255,0.4),transparent_65%)] pointer-events-none" />

          {/* Corner pips */}
          <span className="absolute top-2 left-2.5 w-2 h-2 rounded-full bg-[#0e4d32]/15" />
          <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#0e4d32]/15" />
          <span className="absolute bottom-2 left-2.5 w-2 h-2 rounded-full bg-[#0e4d32]/15" />
          <span className="absolute bottom-2 right-2.5 w-2 h-2 rounded-full bg-[#0e4d32]/15" />

          {/* Emoji */}
          <span className="text-3xl leading-none group-hover:scale-125 group-hover:-rotate-6 
                   transition-transform duration-200 z-10">
            {mode.emoji}
          </span>

          {/* Label */}
          <span className="z-10 text-center text-[#0e4d32] font-extrabold text-xs 
                    tracking-widest leading-tight">
            {mode.label}
          </span>

          {/* Desc — fades in on hover */}
          <span className="z-10 text-[#3d8c68] text-[0.65rem] font-bold text-center 
                    opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
            {mode.desc}
          </span>
        </button>
      ))}
    </div>
    </div>
  );
}

export default Card;
