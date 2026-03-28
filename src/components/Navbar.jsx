import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="m-2 mt-2 ">
      <div className="relative bg-gradient-to-br from-[#d4f7ed] via-[#b8f5e0] to-[#a0edd4] rounded-2xl shadow-md border border-white/70 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 relative z-10">

          {/* Logo */}
          <div 
          className=" text-[2rem] font-fredoka font-bold text-2xl text-[#e03a3a] tracking-widest select-none">
            <span className="  inline-block transition-transform duration-200 hover:-rotate-2 hover:-translate-y-0.5">L</span>
            <span className="inline-block transition-transform duration-200 hover:-translate-y-1">U</span>
            <span className="inline-block transition-transform duration-200 hover:rotate-1 hover:-translate-y-0.5">D</span>
            <span className="inline-block transition-transform duration-200 hover:-translate-y-1">O</span>
          </div>

          {/* Desktop Links */}
          <ul className=" text-[19px] hidden md:flex gap-2 list-none m-0 p-0">
            <li>
              <a className="block px-4 py-1.5 rounded-full font-bold text-sm text-[#1a5c42] hover:bg-[#e03a3a]/10 hover:text-[#e03a3a] transition transform duration-150" href="#">Home</a>
            </li>
            <li>
              <a className="block px-4 py-1.5 rounded-full font-bold text-sm text-[#1a5c42] hover:bg-[#e03a3a]/10 hover:text-[#e03a3a] transition transform duration-150" href="#About">About</a>
            </li>
            <li>
              <a className="block px-4 py-1.5 rounded-full font-bold text-sm text-[#1a5c42] hover:bg-[#e03a3a]/10 hover:text-[#e03a3a] transition transform duration-150" href="#Contact">Contact</a>
            </li>
          </ul>

          {/* Desktop Login */}
          <a
            href="#"
            className=" font-Fredoka hidden md:inline-block px-5 py-2 rounded-full bg-[#e03a3a] text-white font-fredoka text-sm tracking-wide shadow-md hover:bg-[#c42e2e] hover:shadow-lg transform transition duration-150 active:translate-y-0 -translate-y-0.5"
          >
            Log In
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1 rounded-md text-[#1a5c42] hover:text-[#e03a3a] hover:bg-[#e03a3a]/10 transition"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Dropdown */}
        <div className={` font-bold md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out border-t border-dashed border-[#1a5c42]/20 ${open ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col gap-1 p-3">
            <li>
              <a href="#" onClick={() => setOpen(false)} 
              className="block px-4 py-2 rounded-lg font-bold  text-[#1a5c42] 
              hover:bg-[#e03a3a]/10 hover:text-[#e03a3a] transition">Home</a>
            </li>
            <li>
              <a href="#About" onClick={() => setOpen(false)}
               className="block px-4 py-2 rounded-lg font-bold text-[#1a5c42] 
               hover:bg-[#e03a3a]/10 hover:text-[#e03a3a] transition">About</a>
            </li>
            <li>
              <a href="#Contact" onClick={() => setOpen(false)} 
              className="block px-4 py-2 rounded-lg font-bold text-[#1a5c42] 
              hover:bg-[#e03a3a]/10 hover:text-[#e03a3a] transition">Contact</a>
            </li>
            <li className="mt-2 text-center">
              <a href="#" onClick={() => setOpen(false)} 
              
              className="  inline-block px-5 py-2 rounded-full bg-[#e03a3a] text-white font-fredoka tracking-wide shadow-xl 
              hover:bg-[#c42e2e] hover:shadow-xl transition">
                Log In
              </a>
            </li>
          </ul>
        </div>
              
      </div>
    </nav>
  );
}

export default Navbar;