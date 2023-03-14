import React, { useState } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import { CgScrollV } from "react-icons/cg";

const App = () => {
  const [arrowDirection, setArrowDirection] = useState('down');

  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
    setArrowDirection('up');
  };

  const scrollToHeader = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setArrowDirection('down');
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
        <div className="arrow">
          <div className="arrow__circle">
            <span className="arrow__text" onClick={arrowDirection === 'down' ? scrollToFooter : scrollToHeader}>
              <CgScrollV />
            </span>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
