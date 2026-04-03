import React from 'react';

function Home() {
  return (
    <div className=" py-10  min-h-screen bg-gradient-to-br from-[#e8fff7] via-[#d0f5e8] to-[#c2f0e0]">

      {/* Hero Section */}
      <div className=" max-w-4xl mx-auto max-h-max py-10 px-9">
        <div className="py-10
          relative flex flex-col sm:flex-row items-center justify-between gap-4
          bg-gradient-to-br from-[#1a7a50] to-[#0e5c38]
          rounded-2xl px-6 py-6 sm:px-8
          shadow-[0_6px_0_#0a3d24,0_10px_30px_rgba(0,0,0,0.18)]
          overflow-hidden
        ">

          {/* Decorative Circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/12 rounded-full pointer-events-none" />
          <div className="absolute -bottom-16 left-1/4 w-56 h-56 bg-white/12 rounded-full pointer-events-none" />

          {/* Dice */}
          <span className=" sm:block absolute right-28 top-1/2 
           -translate-x-2/2 -translate-y-1/2 text-8xl opacity-60 select-none pointer-events-none">
            🎲
          </span>

          {/* Text */}
          <div className="z-10 text-center sm:text-left">
            <p className="text-xs font-extrabold tracking-[3px] uppercase text-green-300 mb-1">
              Welcome to Ludo
            </p>
            <h1 className="font-extrabold text-white text-xl sm:text-2xl leading-tight mb-2">
              Roll the Dice.<br />Claim the Crown.
            </h1>
            <p className="text-green-200 text-sm font-semibold max-w-xs">
              Log in to start playing and enjoy the game with friends!
            </p>
          </div>

          {/* CTA */}
          <a
            href="#"
            className="
              z-10 shrink-0 whitespace-nowrap
              bg-red-500 hover:bg-red-600
              text-white font-bold tracking-wide
              px-6 py-3 rounded-full
              shadow-[0_2px_0_#9e2020,0_6px_16px_rgba(224,58,58,0.4)]
              hover:shadow-[0_6px_0_#9e2020,0_10px_24px_rgba(224,58,58,0.45)]
              hover:-translate-y-1 active:translate-y-0.5
              active:shadow-[0_2px_0_#9e2020]
              transition-all duration-200
              text-sm sm:text-base
            "
          >
            Log In to Play
          </a>

        </div>
      </div>

     


      {/* Cards */}
     

    </div>
  );
}

export default Home;