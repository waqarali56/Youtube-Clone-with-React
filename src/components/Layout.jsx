import React from 'react'
import Header from './Header';
import SideNavbar from './SideBar/SideNavbar';

export default function Layout(props) {
  return (
    <div>
      <Header  onClickMenu={props.onClickMenu}  onChangeInput={props.onChangeInput}/>
      <SideNavbar sideBar={props.sideBar} />
    </div>
  )
}
