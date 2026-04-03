import React from 'react';
import Home from "./pages/Home"
import Card from './components/Card';
import Contact from './pages/Contact';
import Board from './pages/Borad';
import Navbar from './components/Navbar';
import About from './pages/About';  


export default function App() {
  return (
   <>
   <Navbar />
   <Home/>
    <Card />
     <Contact/>
      {/* <Board />  */}
   
     <About/>
   <h1 className='text-[2rem]'>hello from app</h1>
   </>
  );
}
