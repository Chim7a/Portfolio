import React from 'react';
import { MdEmail } from 'react-icons/md';
import * as TiIcons from 'react-icons/ti';
import { BsLinkedin } from 'react-icons/bs';
import './Socials.css';



const Socials = () => {
  return (
    <div className="social__icon">
    <a className="ri-linkedin-line icon " href="mailto:chimalawrence11@gmail.com" alt="email-link"><MdEmail /></a>
    <a href="#/" alt="icon-link" className="ri-twitter-circle-line icon "><TiIcons.TiSocialTwitter /></a>
    <a className="ri-linkedin-line icon" href="https://www.linkedin.com/in/chima-ikegbulam-b4839b204" alt="linkedin-link"><BsLinkedin/></a>
    <a href="#/" alt="icon-link" className="ri-facebook-line icon"><TiIcons.TiSocialFacebookCircular /> </a>
    <a className="ri-twitter-circle-line icon" href="https://github.com/Chim7a/portfolio.git" alt="github-link"><TiIcons.TiSocialGithubCircular /> </a>
    </div>
  )
}

export default Socials;