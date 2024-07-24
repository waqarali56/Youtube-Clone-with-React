import React, { useContext } from "react";
import "./VideoContainer.css";
import { Link } from "react-router-dom";
import { videos } from "../Data/data.js";

import { Context } from "../../State/StateProvider"; // Adjusted path
import useFilterVideo from "../../CustomHooks/useFilterVideo.js";

export default function VideoGrid() {
  const { searchVideo } = useContext(Context);
  const filteredVideos = useFilterVideo(searchVideo, videos);
  return (
    <div id="video-container">
      {filteredVideos.map((video, index) => (
        <Link to="/openVideo">
          <div key={index} className="video-card">
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
