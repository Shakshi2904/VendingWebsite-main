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
  return (
    <div>
      <MaskCursor/>
      <div id='navbar'>
        <div id='navleft'>
          <img className="hoverable-element" src='logo.png' alt='not available' height={'30vh'} width={'30vw'}/>
          <h1 className="hoverable-element">24buy7</h1>
          <p className="hoverable-element">QUICK BUYING SOLUTIONS</p>
        </div>
        <div id='navright'>
          <button id='b1'><a className="hoverable-element" id='home' href=''>Home</a></button>
          <button id='b1'><a className="hoverable-element" id='backed' href=''>Backed By</a></button>
          <button id='b1'><a className="hoverable-element" id='blogs' href=''>Blogs</a></button>
          <button id='b1'><a className="hoverable-element" id='aboutus' href=''>About Us</a></button>
          <select className="hoverable-element">
            <option selected>Partner With Us</option>
            <option>Haldiram</option>
            <option>Coke</option>
            <option>Pepsi</option>
          </select>
          <button id='b1'><a className="hoverable-element" id='faqs' href=''>FAQs</a></button>
          <button id='b1'><a className="hoverable-element" id='contact' href=''>Contact</a></button>
        </div>
      </div>
      <Intro/>
      <Brand/>
      <Backedby/>
      <Brandby/>
      <About/>
      <OurService/>
      <Video></Video>
      <Feeback></Feeback>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App; 