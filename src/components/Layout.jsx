import React,{useContext} from "react";
import Header from "./Header";
import SideNavbar from "./SideBar/SideNavbar";

import { Context } from '../State/StateProvider';  // Import the context

export default function Layout({children}) {
  const {sideBar}=useContext(Context);
  return (
    <div>

      <Header />
      <SideNavbar  />
      <div
        className={`container ${
          sideBar ? "" : "large-container"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
