import React from "react";
import Categories from "./Categories";
import VideoGrid from "./VideoGrid";
import "./VideoContainer.css";

export default function Videos(props) {
  return (
    <>
      <div className="Categories-and-Video-Container">
        <Categories />
        <VideoGrid searchVideo={props.searchVideo} />
      </div>
    </>
  );
}
