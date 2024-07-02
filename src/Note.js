import "./Note.css";
function Note({ content }){
    return(
        <div className="star">
        <div className="feedbacksection">
        <div id="feedbackpic">
            <img className="hoverable-element" src='feedback.png' alt='not available' height={'50vh'} width={'50vw'}/>
            <div id="name">
            <h2 className="hoverable-element">Name here</h2>
            <h5>Designation</h5>
            </div>
        </div>
        <div>
        <p className="n hoverable-element">{content}</p>
        <div className="start1">
        <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
      <span className="fa fa-star checked"></span>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Note;