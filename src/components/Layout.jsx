import React from 'react'
import Header from './Header';
import SideNavbar from './SideBar/SideNavbar';
import Videos from './VideoComponents/Videos';

export default function Layout(props) {
  return (
    <div>
      <Header  onClickMenu={props.onClickMenu}  onChangeInput={props.onChangeInput}/>
      <div className='main'>
      <SideNavbar sideBar={props.sideBar} />
      <Videos sideBar={props.sideBar} searchVideo={props.searchVideo}/>
      </div>
    </div>
  )
}
