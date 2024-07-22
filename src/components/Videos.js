import React from 'react'
import Categories from './Categories';
import VideoGrid from './VideoGrid';



export default function Main(props) {
  return (

    <>
    <div className={`Categories-and-Video-Container ${props.sideBar ? "" : "large-Categories-and-Video-Container"}`}>
    <Categories/>
    <VideoGrid/>
    
    </div>
    </>
    
  )
}
