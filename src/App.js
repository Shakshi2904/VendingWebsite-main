import React, { useState } from 'react';
import Brandby from './Brandby.js';
import Feeback from './Feedback.js';
import Video from './Video.js';
import './App.css';
import Brand from './brand.js';
import MaskCursor from './mask.js';
import Intro from './Intro.js';
import About from './about.js';
import Backedby  from './backedby.js';
import Faq from './faq.js';
import Footer from './Footer.js';
import Contact from './contact.js';
import OurService from './ourService.js';
function App(){
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      <MaskCursor />
      <div id='navbar'>
        <div id='navleft'>
          <img className="hoverable-element" src='navbarLogo.png' alt='not available' height={'70vh'} width={'60vw'} />
        </div>
        <div id='navright' className={menuOpen ? 'open' : ''}>
          <button id='b1'><a className="hoverable-element" id='home' href=''>Home</a></button>
          <button id='b1'><a className="hoverable-element" id='backed' href=''>Why Us?</a></button>
          <button id='b1'><a className="hoverable-element" id='aboutus' href=''>About Us</a></button>
          <select className="hoverable-element">
            <option selected>Our Services</option>
            <option>Haldiram</option>
            <option>Coke</option>
            <option>Pepsi</option>
          </select>
          <button id='b1'><a className="hoverable-element" id='faqs' href=''>FAQs</a></button>
          <button id='b1'><a className="hoverable-element" id='contact' href=''>Contact</a></button>
        </div>
        <button className='hamburger' onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <OurService/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App; 
