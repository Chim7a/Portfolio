import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navigation.css';
import Socials from '../../Features/Socials/Socials';


const Navigation = () => {
  const [toggle, setToggle] = useState (false);

  const changeToggle = () => setToggle(!toggle);

  return (
    <div className="navbar" id='home'>
    <div className="mobile-icons navbar-mobile-title" onClick={changeToggle} >
       {toggle ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
    </div>
    <div className="nav__intro">
    <div className="navbar-mobile-title text-5xl font-bold text-rose-600 ">
      <h3> <span className="nav-name"> Chima </span> Ikegbulam</h3>
    </div>
    <h1 className="text-2xl">
           A <span className="role"> Frontend-Developer </span> on a <span className="text-rose-600"> journey </span> to turn ideas into reality.
    </h1>
    <div>
    <nav className={toggle ? "nav-links-mobile" : "nav-links"}>
      
      <Link to='#home' href="/home" className="link home__btn font-medium py-2 ">Home</Link>
      <Link to='#home' href="/home" className="link home__mobile__btn font-medium py-2"> Home </Link>
      <Link to='#about' href="/about" className=" link font-medium px-3 py-2 ">About me</Link>
      <Link to='#projects' href="/my_projects" className=" link font-medium px-3 py-2 ">My projects</Link>
      <Link to='#skills' href="/Skills" className="link font-medium px-3 py-2 ">Skills</Link>
      <Link to='#contacts' href="/contact_me" className="link font-medium px-3 py-2 ">Contact me</Link>
    </nav>
    </div>

    <div className="socials__icons">
    <Socials />
    </div>
    </div>
    
    </div>
  )
}

export default Navigation;