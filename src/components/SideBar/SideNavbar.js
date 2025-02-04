import React, { useContext } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { Context } from "../../State/StateProvider"; // Adjusted path

export default function SideNavbar() {
  const { sideBar } = useContext(Context);

  return (
    <div className={`large-navigation ${sideBar ? "" : "small-navigation"}`}>
      <Link to="/home" className="navi-item" href="#home">
        <img src="./images/home.png" alt="shorts" className="icon-size" />
        <p>Home </p>
      </Link>
      <Link to="/shorts" className="navi-item" href="#shorts">
        <img src="./images/shorts.png" alt="shorts" className="icon-size" />
        <p>Shorts</p>
      </Link>
      <Link to="/subscribeVideo" className="navi-item" href="#sub">
        <img src="./images/subscribe.png" alt="shorts" className="icon-size" />
        <p>Subcription</p>
      </Link>
      <hr className="hr-class" />
      <div className="you-item">
        <a className="navi-item" href="#you">
          <h4>You</h4>
        </a>
        <a className="navi-item" href="#">
          <img src="./images/channel.png" alt="shorts" className="icon-size" />
          <p>Your channel</p>
        </a>
        <a className="navi-item" href="#">
          <img src="./images/history.png" alt="shorts" className="icon-size" />
          <p>History</p>
        </a>
        <a className="navi-item" href="#">
          <img src="./images/playlist.png" alt="shorts" className="icon-size" />
          <p>Playlists</p>
        </a>
        <a className="navi-item" href="#">
          <img src="./images/videos.png" alt="shorts" className="icon-size" />
          <p>Your Videos</p>
        </a>
        <a className="navi-item" href="#">
          <img src="./images/like.png" alt="shorts" className="icon-size" />
          <p>Liked</p>
        </a>
      </div>
      <a className="navi-item " href="#download">
        <img src="./images/download.png" alt="shorts" className="icon-size" />
        <p>Download</p>
      </a>
      <hr className="hr-class" />

      <div className="Subcribe-item">
        <a className="navi-item " href="#you">
          <h4>Subcribtions</h4>
        </a>
        <a className="navi-item " href="#download">
          <img
            src="./images/new_pic.jpeg"
            alt="shorts"
            className="channel-profile"
          />
          <p>Apna College</p>
        </a>
        <a className="navi-item " href="#download">
          <img
            src="./images/ali.jpg"
            alt="shorts"
            className="channel-profile"
          />
          <p>Gate Smashher</p>
        </a>
        <a className="navi-item " href="#download">
          <img src="./images/b.jpeg" alt="shorts" className="channel-profile" />
          <p>Apna College</p>
        </a>
        <a className="navi-item " href="#download">
          <img src="./images/a.jpeg" alt="shorts" className="channel-profile" />
          <p>Gate Smashher</p>
        </a>
      </div>
    </div>
  );
}
