import React from 'react';
import './Footer.css';
import Socials from '../../Features/Socials/Socials';

const Footer = () => {
  return (
    <div className="footer-items flex justify-center items-center gap-10 h-20 bg-slate-300" id="footer">
        <div className="footer-icons">
          <Socials />
        </div>
        <div>
            <p>2022 - Developed by Chima Ikegbulam</p>
        </div>
    </div>
  )
}

export default Footer;