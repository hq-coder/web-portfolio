import React, { useState, useEffect } from 'react';
import './nav.css';
import { MdHome } from 'react-icons/md';
import { SiAboutdotme } from 'react-icons/si';
import { GiSkills } from 'react-icons/gi';
import { RiCodeBoxFill } from 'react-icons/ri';
import { MdContactMail } from 'react-icons/md';
import hqlogo from '../../assets/hqlogo.PNG';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [scrollPos, setScrollPos] = useState(0);
  const [navWidth, setNavWidth] = useState('100%');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > scrollPos) {
        setNavWidth('0');
        document.querySelector('nav').style.opacity = '.2';
      } else {
        setNavWidth('100%');
        document.querySelector('nav').style.opacity = '1';
      }
      setScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollPos, navWidth]);

  return (
    <nav style={{ width: navWidth }}>
      <img className="hqlogo" src={hqlogo} />
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
      >
        <MdHome className='react-icon'/>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <SiAboutdotme className='react-icon'/>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <GiSkills className='react-icon'/>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <RiCodeBoxFill className='react-icon'/>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <MdContactMail className='react-icon'/>
      </a>
    </nav>
  );
};

export default Nav;
