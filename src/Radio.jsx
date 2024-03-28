import React, { useState } from 'react';
// import Modal from 'react-modal';
import newselfie from './pictures/newselfie.jpg';
import './Radio.css';

import jan11 from './pictures/jan11.png';
import jan18 from './pictures/jan18.png';
import jan25 from './pictures/jan25.png';
import feb1 from './pictures/feb1.png';
import feb8 from './pictures/feb8.png';
import feb22 from './pictures/feb22.png';
import feb29 from './pictures/feb29.png';
import mar7 from './pictures/mar7.png';
import mar14 from './pictures/mar14.png';

function Radio(){
  const [modalVisible, setModalVisible] = useState(false);
  const [clickedImage, setClickedImage] = useState(null);

  const openModal = (imageSrc) => {
    setClickedImage(imageSrc);
    setModalVisible(true);
  };

    return(
      <div className="Radio">
        <div className= "body-container"> 
           <img src={newselfie} alt="selfie" /> 
            <div className="text-container">
              <h2 className="title">the speakeasy</h2>
              <p className="p-text-radio">the speakeasy is broadcasted from KUCI 88.9FM in Irvine, CA. 
              The speakeasy focuses on jazz and genres that intersect jazz. 
              The speakeasy is on the air Thursday mornings from 6-8am!</p>
              <a href="https://kuci.org" className="kuci">Listen on KUCI</a>
            </div>
        </div>

       <div className="playlists">
        <h2 className="playlist-title">playlists</h2>
        <div className="playlist-grid">
          <img src={jan11} onClick={() => openModal(jan11)} className="post"  />
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={jan18} onClick={() => openModal(jan18)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={jan25} onClick={() => openModal(jan25)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={feb1} onClick={() => openModal(feb1)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={feb8} onClick={() => openModal(feb8)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={feb22} onClick={() => openModal(feb22)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={feb29} onClick={() => openModal(feb29)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={mar7} onClick={() => openModal(mar7)} className="post"></img>
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
          <img src={mar14} onClick={() => openModal(mar14)} className="post"></img> 
          {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <img src={clickedImage} alt="Clicked Image"></img>
            <button onClick={() => setModalVisible(false)}>X</button>
          </div>
        </div>
      )}
        </div>
       </div>

    </div>
    );
  }

  export default Radio;
