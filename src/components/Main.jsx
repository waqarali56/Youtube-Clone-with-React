import React from 'react'
import SideNavbar from './SideBar/SideNavbar';
import Videos from './VideoComponents/Videos';


export default function Main(props) {
  return (
    <div className='main'>
    <SideNavbar sideBar={props.sideBar} />
    <Videos sideBar={props.sideBar} SearchVideo={props.SearchVideo}/>
    </div>
  )
}
