import React from 'react';
import './contact.css';
function Contact() {
  return (
    <div className="contact">
      <h1 className="hoverable-element">CONTACT US!</h1>
      <form action="/adddata" method="post">
        <div className='firstfield'>
            <input className='Fname' type='text' placeholder='First Name' name='Fname' required/>
            <input className='Lname' type='text' placeholder='Last Name' name='Lname' required/>
        </div>
        <div className='restfield'>
        <input type='email' placeholder='Email' name='Email' required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='Phone Number' name='Phone' required/>
        </div>
        <div className='restfield'>
        <input type='text' placeholder='Subject' name='Subject' required/>
        </div>
        <div className='textfield'>
        <textarea type='text' rows="6" placeholder='Message' name='Message' required/>
        </div>
        <div className='contactbutton'>
          <input type="submit" value="Submit→"/>
        </div>
      </form>
    </div>
  );
}

export default Contact;