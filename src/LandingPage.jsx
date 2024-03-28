import React, { Component } from 'react';
import './LandingPage.css';
import beach from './pictures/beach.jpg'
export default class LandingPage extends Component{
  render(){
    return(
      <div className="LandingPage">
        
      <div className="body-container">
          <img src={beach} className="img-center"></img>
          <div className="overlay-text">
            <h2>bella bravo</h2>
          </div>

      </div>
    </div>
    );
  }
}
