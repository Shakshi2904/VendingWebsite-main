import react from 'react';
import './intro.css';
function Intro(){
    return(
        <div className='introbg'>
            <div id='intro'>
                <p className='heading hoverable-element'>Bringing Convenience to Your Doorstep</p>
                <p className='intro hoverable-element'>Welcome to 24buy7, your trusted partner in delivering top-notch snack and beverage vending solutions. We cater to a diverse range of clients including corporate offices, schools, colleges, and industrial settings. Our goal is to ensure that you have access to your favourite snacks and drinks whenever you need them, 24/7.</p>
            </div>
            <div id='introbutton'>
                <div id='introb'>
                <button id='reachb' className='hoverable-element'>Reach out us us!</button>
                <button id='learnb' className='hoverable-element'>Learn More</button>
                </div>
            </div>
        </div>
    );
}
export default Intro;