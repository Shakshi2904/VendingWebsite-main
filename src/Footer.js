import './footer.css'
function Footer(){
    return(
        <div id='foot'>
            <div id='footer'>
            <div id='footerleft'>
                <h3 className="hoverable-element">Quick links</h3>
                <br/>
                <div>
                    <a className="hoverable-element" href="">Home</a>
                    <a className="hoverable-element" href="">Backed By</a>
                    <a className="hoverable-element" href="">Blogs</a>
                    <a className="hoverable-element" href="">About us</a>
                    <a className="hoverable-element" href="">Partnerships</a>
                    <a className="hoverable-element" href="">FAQs</a>
                    <a className="hoverable-element" href="">Contact</a>
                </div>
                <br/>
                <h3 className="hoverable-element">Categories</h3>
                <br/>
                <div>
                    <a className="hoverable-element" href="">Office</a>
                    <a className="hoverable-element" href="">Hostipals</a>
                    <a className="hoverable-element" href="">Educational Institutions</a>
                    <a className="hoverable-element" href="">Stationary</a>
                    <a className="hoverable-element" href="">Gym</a>
                    <a className="hoverable-element" href="">Hostel</a>
                    <a className="hoverable-element" href="">Mails</a>
                </div>
                <br/>
                <div>
                    <p><img className="hoverable-element" src='location.png' alt='not available' height='20' width='20'/> Appen your address here</p>
                    <p><img className="hoverable-element" src='location.png' alt='not available' height='20' width='20'/> info@gmail.com</p>
                    <p><img className="hoverable-element" src='location.png' alt='not available' height='20' width='20'/>+919999999999</p>
                </div>
                <br/>
            </div>
            <div id="footerright">
                <h3 className="hoverable-element">Social Media Links</h3>
                <p><img className="hoverable-element" src='location.png' alt='not available'/>
                <img className="hoverable-element" src='location.png' alt='not available'/>
                <img className="hoverable-element" src='location.png' alt='not available'/>
                <img className="hoverable-element" src='location.png' alt='not available'/>
                <img className="hoverable-element" src='location.png' alt='not available'/>
                <img className="hoverable-element" src='location.png' alt='not available'/></p>
                Terms and Conditions 
                <br></br>
                <br></br>Privacy Policy
            </div>
        </div>
        <p className="hoverable-element" id='footp'>Copyright © 2022 24buy7</p>
        </div>
    );
}
export default Footer;