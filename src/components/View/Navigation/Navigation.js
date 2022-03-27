import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Logo from './Logo';
import Tilt from 'react-parallax-tilt';


const Navigation = () => {
  return (
    <div className="bg-slate-300 flex flex-row sm:justify-center md:justify-between lg:justify-between pl-20 pr-20 items-center h-20 ">
    <Tilt className="text-2xl font-bold">
    <Logo />
    </Tilt>
    <nav class="sm:hidden md:flex lg:flex">
    <Link to="#home">
    <button href="#" className="  font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</button>
    </Link>
    <Link to="#about">
    <button href="#" className="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</button>
    </Link>
    <Link to="#skills">
    <button href="#" className="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Skills</button>
    </Link>
    <Link to="#projects">
    <button href="#" className="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Projects</button>
    </Link>
    <Link to="#contact">
    <button href="#" className="font-b px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact</button>
    </Link>
    
    
    
    
    
    </nav>
    </div>
  )
}

export default Navigation;