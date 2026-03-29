import React from 'react';

function About() {
  return (
    <div id="About" className="bg-green-100 py-20 font-fredoka">
      
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold text-green-900 mb-4">
          India’s No.1 Ludo Game 🎮
        </h1>

        {/* Description */}
        <p className="text-green-800 text-sm md:text-base font-medium leading-relaxed mb-6">
          Ludo Game, the popular adaptation of the classic board game, has taken the world by storm. 
          With engaging gameplay and vibrant graphics, it has become a favorite among players of all ages.
          Whether you're playing with friends or family, it offers endless fun and excitement.
          Join millions of players worldwide and experience the thrill of rolling the dice and strategizing your way to victory!
        </p>

        {/* Footer */}
        <div className="text-xs md:text-sm text-green-700 border-t pt-4">
          <p>© 2026 Ludo. All Rights Reserved.</p>

          <div className="flex justify-center gap-4 mt-2">
            <span className="cursor-pointer hover:underline">FAQ'S</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">RNG Certification</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Privacy Policy</span>
            <span>|</span>
            <span className="cursor-pointer hover:underline">Terms Of Service</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;