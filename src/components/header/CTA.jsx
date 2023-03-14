import React from 'react'
import CV from '../../assets/Hansel_Quiroz_Resume_4.pdf'
import "./header.css"
import { ImFolderDownload } from "react-icons/im"
import { FaFacebookMessenger } from "react-icons/fa"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='topbuttons'><ImFolderDownload /> <br />Resume</a>
        <a href="#contact" className='topbuttons'><FaFacebookMessenger /><br /> Lets Talk</a>
    </div>
  )
}

export default CTA