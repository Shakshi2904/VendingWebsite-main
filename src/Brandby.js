import React from 'react';
import './brandby.css'
const MyNavbar = () => {
  return (
    <div>
      <div id='brandby'>
        <h1 className="hoverable-element">BRAND PARTNERSHIPS</h1>
        <p className="hoverable-element">24buy7 has collaborated with many brands which helped in a <br></br>tremendous customer attraction.</p>
      </div>
      <div id='images'>
        <div id='part1'>
        <div><img className="hoverable-element" height={'130vh'} src='cocacola.png' id='cocacola'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='balaji.png' id='balaji'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='itc.png' id='itc'/></div>
        </div>
        <div id='part1'>
        <div><img className="hoverable-element" height={'130vh'} src='haldiram.png' id='haldiram'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='nestle.png' id='nestle'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='amul.png' id='amul'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='chedda.png' id='chedda'/></div>
        </div>
        <div id='part1'>
        <div><img className="hoverable-element" height={'130vh'} src='cavins.png' id='cavin'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='monginis.png' id='monginis'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='wafflemill.png' id='wafflemill'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='snackible.png' id='snackible'/></div>
        <div><img className="hoverable-element" height={'130vh'} src='paperboat.png' id='paperboat'/></div>
        </div>
       </div>
       <div className='brandbybutton'>
        <button id='brandbyb' className="hoverable-element">Apply for Colab→</button>
       </div>
    </div>
  );
};

export default MyNavbar;