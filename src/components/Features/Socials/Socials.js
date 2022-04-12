import React from 'react';
import * as TiIcons from 'react-icons/ti';
import './Socials.css';



const Socials = () => {
  return (
    <div className="social__icon">
    <a className="ri-twitter-circle-line icon"><TiIcons.TiSocialTwitter /></a>
    <a className="ri-facebook-line icon"><TiIcons.TiSocialFacebookCircular /> </a>
    <a className="ri-twitter-circle-line icon"><TiIcons.TiSocialGithubCircular /> </a>
    </div>
  )
}

export default Socials;