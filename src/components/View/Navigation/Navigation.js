import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './Navigation.css';


const Navigation = () => {
  const [toggle, setToggle] = useState (false);

  const changeToggle = () => setToggle(!toggle);

  return (
    <>
    <div className="navbar bg-slate-300">
    <div className="navbar-mobile-menu">
      <h3><span className="nav-name">Chima</span> Ikegbulam</h3>
    </div>
    <nav className={toggle ? "nav-links-mobile" : "nav-links"}>
      <a href="/dashboard" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Home</a>
      <a href="/team" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">About</a>
      <a href="/Skills" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Skills</a>
      <a href="/reports" className="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900">Contact me</a>
    </nav>

    <div className="mobile-icons navbar-mobile-menu" onClick={changeToggle} >
       {toggle ? <AiIcons.AiOutlineClose /> : <FaIcons.FaBars />}
    </div>
    </div>
    
    </>
  )
}

export default Navigation;