import React from "react";

export default function Navbar() {

  return (
   
    <>
      <nav id="head-container">
        <div id="left-div" className="set-flex">
          <div className="set-flex curser-pointer">
            
            <img
              src="./images/threebar.png"
              alt="threebar"
              className="three-bar"
              
            />
            
            <img
              className="youtube-icon"
              src="./images/you_tube.png"
              alt="Italian Trulli"
            />
            <h2>Youtube</h2>
          </div>
        </div>
        <div id="meddle-div" className="set-flex">
          <div id="input-box" className="set-flex">
            <input id="search-input" type="text" placeholder="Search" />
            <button id="search-button">
              <img
                src="./images/search.png"
                alt="search"
                className="icon-size"

              />
            </button>
          </div>

          <img
            src="./images/microphone.png"
            alt="microphone"
            className="icon-size"
            id="microphone-icon"
          />
        </div>
        <div id="right-div" className="set-flex">
          <div className="upload-video"><img src="./images/uploadVideo.png" alt="video" className="icon-size" /></div>
          <div className="notifications-box">
            <button className="noti-button">
              <img src="./images/bell.png" alt="bell" className="icon-size" />
            </button>
            <div className="dropdown-content">
              <a href="#3">note 1</a>
              <a href="#3">note 2</a>
              <a href="#3">note 3</a>
              <a href="#3">note 4</a>
              <a href="#3">note 5</a>
            </div>
          </div>

          <img className="user-pic" src="./images/ali.jpg" />
        </div>
      </nav>
    </>
  );
}



