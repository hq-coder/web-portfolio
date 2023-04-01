import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RxLinkedinLogo} from 'react-icons/rx'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fjfb17', 'template_ky1ucaz', form.current, 'user_641J0AWGxx4qcKi835yDq')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2 className='contactme'>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <a href="mailto:hanselquiroz@yahoo.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RxLinkedinLogo className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <a href="https://www.linkedin.com/in/hanselquiroz/" target="_blank">Send a message</a>
          </article>
      
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='messege-button'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact