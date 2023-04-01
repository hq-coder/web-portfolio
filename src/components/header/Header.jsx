import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocials';
import logo from '../../assets/hq-coder-logo1.png';
import ME from '../../assets/melaptopwhite.png';
import ME2 from '../../assets/melaptopwhite2.png';
import MyNameScript from '../../assets/myname.PNG';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > scrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, isScrollingDown]);

  useEffect(() => {
    const handleMePicPosition = () => {
      const mePic = document.querySelector('.me-pic');

      if (scrollY > mePic.offsetTop && !isScrollingDown) {
        mePic.src = ME2;
      } else {
        mePic.src = ME;
      }
    };

    handleMePicPosition();
  }, [scrollY, isScrollingDown]);

  useEffect(() => {
    const myNameScript = document.querySelector('.me-name');
    myNameScript.style.opacity = 0;
    setTimeout(() => {
      myNameScript.style.transition = 'opacity 5s ease-out, transform 5s ease-out';
      myNameScript.style.opacity = 1;
      myNameScript.style.transform = 'translateX(0)';
    }, 300);
  }, []);

  return (
    <header id='header'>
      <img className="me-name" src={MyNameScript} alt="myname" />
      <div className="container header__container">
        <h5 className="headerh51">{'<Software Developer />'}</h5>
        <br />
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img className="me-pic" src={ME} alt="me" />
        </div>
      <img className="hq_logo2" src={logo} alt="hq-coder logo" />
      </div>
    </header>
  );
};

export default Header;
