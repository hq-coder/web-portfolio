import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';


const HeaderSocials = () => {


  return (
    <div className='header__socials'>
      
      <a href="https://www.linkedin.com/in/hanselquiroz/" className="social-icon" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/hq-coder" className="social-icon2" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      <a href="https://dribbble.com/hq-coder?onboarding=true" className="social-icon2" target="_blank" rel="noopener noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials;
