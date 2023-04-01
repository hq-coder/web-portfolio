import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {MdDownloading} from 'react-icons/md'
import {VscLoading} from 'react-icons/vsc'
import htmlcert from "../../assets/html.png"
import csscert from "../../assets/css.png"
import javascriptcert from "../../assets/javascript.png"
import sqlcert from "../../assets/sql.png"

const Experience = () => {
  return (
   
    <section id='experience'>
      <h2>Skills</h2>
      <div className="experience">
      <div className="experience__container">
        <div className="experience__frontend">
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
      
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
      
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
        
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
      
              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>

              </div>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
        
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdDownloading className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
        
              </div>
            </article>
            <article className='experience__details'>
              <VscLoading className='experience__details-icon' />
              <div>
                <h4>Cyber Security</h4>
              </div>
            </article>
            <article className='experience__details'>
              <VscLoading className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
              </div>
            </article>
            <article className='experience__details'>
              <MdDownloading className='experience__details-icon' />
              <div>
                <h4>Python</h4>

              </div>
            </article>
            <article className='experience__details'>
              <MdDownloading className='experience__details-icon' />
              <div>
                <h4>Python</h4>

              </div>
            </article>
          </div>
        </div>


      </div>
      <h2>Certificates</h2>
      <a href="https://www.codecademy.com/profiles/hq-coder" target="_blank" rel="noopener noreferrer">
  <span className='certificate'>
    <img src={htmlcert} alt="HTML" />
    <img src={csscert} alt="CSS" />
    <img src={javascriptcert} alt="JavaScript" />
    <img src={sqlcert} alt="SQL" />
  </span>
</a>


      </div>
      </section>
  
  )
}

export default Experience