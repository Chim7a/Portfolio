import React from 'react';
import { MdEmail } from 'react-icons/md';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-items flex justify-center items-center gap-10 h-20 bg-slate-300" id="footer">
        <div className="footer-icons">
        <MdEmail />
        <BsLinkedin/>
        <BsGithub/>
        </div>
        <div>
            <p>2022 - Developed by Chima Ikegbulam</p>
        </div>
    </div>
  )
}

export default Footer;