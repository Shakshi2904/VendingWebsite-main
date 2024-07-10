import react from 'react';
import "./Note.css";
import Note from "./Note.js";
import notecontent from "./notecontent.js";
function Feeback(){
    return(
        <div className='feed'>
        <div id='feedback'>
        <div  className='ourServicePage'><h1 className="hoverable-element">WHAT OUR CUSTOMERS SAY?</h1></div>
            <p className="hoverable-element">All time favourite among customers. Customer<br></br> growth rate increasing exponentially.</p>
        </div>
        <div className="scrollimg">
            
        {notecontent.map((content, index) => (<Note key={index} content={content} />))}
            
        </div>
        <div id='postbutton'>
        <a href='#contactpage'><button id='post' className="hoverable-element">Post a Feedback →</button></a></div>
        </div>
    );
}
export default Feeback;

