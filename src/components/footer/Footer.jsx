import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import logo from '../../assets/hq-coder-logo1.png'

const Footer = () => {
  return (
    <footer className='footer_container'>
  
      <a href="#" className='footer__logo'><img className="hq_logo7" src={logo} alt="hq-coder logo" /></a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF/></a>
        <a href="https://instagram.com"><FiInstagram/></a>
        <a href="https://twitter.com"><IoLogoTwitter/></a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; hq-coder. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer