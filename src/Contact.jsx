import React, { Component } from 'react';
import './Contact.css';

import lanterns from'./pictures/lanterns.jpg';

export default class Contact extends Component{
  render(){
    return(
      <div className="Contact">
        <div className="contact-header">
          <img src={lanterns} className="contact-img"></img>
          <h2 className="contact-text">Contact</h2>
          <div className="contacts">
            <a href="mailto:isabella.n.brao@gmail.com" className="contact-links">email</a>
            <a href="www.linkedin.com/in/isabella-b-192b3721b" className="contact-links">linkedin</a>
            <a href="https://github.com/bbravoo" className="contact-links">github</a>
          </div>
      </div>
    </div>
    );
  }
}