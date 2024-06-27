import "./Note.css";
function Note(props){
    return(
        <div className="star">
        <div className="feedbacksection">
        <div id="feedbackpic">
            <img className="hoverable-element" src='feedback.png' alt='not available' height={'50vh'} width={'50vw'}/>
            <div id="name">
            <h2 className="hoverable-element">Name here</h2>
            Designation
            </div>
        </div>
        <div>
        <p className="n hoverable-element">
        I can't express enough how much this image-based damage assessment tool has transformed my experience with insurance claims. Its ability to swiftly categorizet and assess damages in real-time not only expedited the entire process but also provided me with a level of confidence in the accuracy of the assessment. The seamless integration into existing insurance systems made the entire experience hassle-free..
        </p>
        </div>
        <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
        </div>
        </div>
    )
}
export default Note;