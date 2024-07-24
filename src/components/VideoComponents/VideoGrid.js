import React,{useContext} from "react";
import "./VideoContainer.css";
import { Link } from 'react-router-dom';
import { videos } from "../Data/data.js";

import { Context } from '../../State/StateProvider';  // Adjusted path

export default function VideoGrid() {

  const {searchVideo}=useContext(Context);

  return (
    <div id="video-container">
      {videos
        .filter((item) => {
          return searchVideo.toLowerCase() === ""
            ? item
            : item.title.toLowerCase().includes(searchVideo.toLowerCase());
        })
        .map((video, index) => (
          <Link to="/openVideo"><div key={index} className="video-card" >
            <a href={video.videoLink}>
              <img
                src={video.videoThumbnail}
                alt={video.title}
                className="vid-pic"
              />
            </a>
            <div className="video-detail">
              <img className="chan-pic" src={video.channelThumbnail} />
              <div className="video-info">
                <a className="video-title" href="#aaa">
                  {video.title}
                </a>
                <p>{video.channelName}</p>
                <p>
                  {video.views} • {video.uploaded}
                </p>
              </div>
            </div>
          </div>
          </Link>
        ))}
    </div>
  );
}
