import React, { Component } from 'react';
import './About.css';
import photo from './pictures/photo.jpg'


export default class About extends Component{
  render(){
    return(
      <div className="About">
        <div className="body-container">
         <img src={photo} className="photo"></img>
         <p>Hello! My name is Bella Bravo. I'm from El Segundo California.
          I'm a first year at UC Irvine studying music performance and 
          working on adding my double major in mathematics. I love to learn 
          about web development, marketing, and music. 
         </p>
        </div>
     </div>
    );
  }
}