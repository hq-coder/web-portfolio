import React, { useState, useEffect, useRef} from 'react';
import './about.css';
import elonconvo1 from '../../assets/elonconvo.png';
import elonconvo2 from '../../assets/eelonmuskconvo2.png';
import mecross1 from '../../assets/mecross1.JPG';
import mecross2 from '../../assets/mecross2.JPG';
import mecross3 from '../../assets/mecross3.JPG';
import mecross4 from '../../assets/mecross4.JPG';
import mecross5 from '../../assets/mecross5.JPG';
import mecross6 from '../../assets/mecross6.JPG';
import mecross7 from '../../assets/mecross7.JPG';
import {ImNext} from "react-icons/im";
import { IoPlaySkipBackCircleSharp } from "react-icons/io5";



const About = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [elonConvoImg, setElonConvoImg] = useState(elonconvo1);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex + 1) % 4);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);



  const images = [mecross1, mecross2, mecross3, mecross4,mecross5, mecross6, mecross7];

  const toggleElonConvoImg = () => {
    if (elonConvoImg === elonconvo1) {
      setElonConvoImg(elonconvo2);
    } else {
      setElonConvoImg(elonconvo1);
    }
  };

  return (
    <section id='about'>
      
      <h2>About Me</h2>

      <div className="containers about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={images[imageIndex]} />
          </div>
        </div>
        <div className="laptop-background">
          <div className="paragraph" ref={paragraphRef}>
          </div>
        </div>
        <div className="about__cards">
          <img src={elonConvoImg} />
          <button className="nextbutton" onClick={toggleElonConvoImg}>
            {elonConvoImg === elonconvo1 ? <ImNext /> : <IoPlaySkipBackCircleSharp />}
          </button>
        </div>
      </div>

    </section>
 

  );
}

export default About;
