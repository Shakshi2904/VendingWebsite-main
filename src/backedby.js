import react from 'react';
import './backedby.css';
function Backedby(){
    return(
        <div>
            <div className='backed'>
                <p className="hoverable-element">BACKED BY</p>
                <div className='backedimages'>
                    <img className="hoverable-element" height={'100vh'} src='riidl.png'/>
                    <img className="hoverable-element" height={'100vh'} src='startup.png'/>
                    <img className="hoverable-element" height={'100vh'} src='msis.png'/>
                    <img className="hoverable-element" height={'100vh'} src='dpiit.png'/>
                </div>
            </div>
        </div>
    );
}
export default Backedby;