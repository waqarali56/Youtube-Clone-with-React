import React,{useContext} from "react";
import Context from '../../context/NoteContext';
import Categories from "./Categories";
import VideoGrid from "./VideoGrid";
import "./VideoContainer.css";

export default function Videos() {

  const a=useContext(Context);

  return (
    <>
      <div className="Categories-and-Video-Container">
        <Categories />
        <VideoGrid searchVideo={a.searchVideo} />
      </div>
    </>
  );
}
