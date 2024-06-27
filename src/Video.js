import './video.css';
function Video(){
    return(
        <div>
        <div id='how'><h1 className="hoverable-element">HOW IT WORKS?</h1></div>
            <div id='video'>
                <div id='videoleft'>
                    <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div id='videoright'>
                <button className="hoverable-element">1</button>
                <p className="hoverable-element">Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p></div>
            </div>
            <div id='video'>
                <div id='videoleft'>
                <button className="hoverable-element">2</button>
                <p className="hoverable-element">Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p>
                </div>
                <div id='videoright'>
                <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div id='video'>
                <div id='videoleft'>
                <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div id='videoright'>
                <button className="hoverable-element">3</button>
                <p className="hoverable-element">Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p></div>
            </div>
            <div id='video'>
                <div id='videoleft'>
                <button className="hoverable-element">4</button>
                <p className="hoverable-element">Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor. Lorem Ipsum que tui foljr menor.</p></div>
                <div id='videoright'>
                <video width="320" height="240" autoplay>
                    <source src="backgroundvideo.mp4" type="video/mp4"></source>
                    </video>
                </div>
            </div>
        </div>
    );
}
export default Video;