import React,{useContext} from "react";
import Header from "./Header";
import SideNavbar from "./SideBar/SideNavbar";
import Context from '../context/NoteContext';


export default function Layout({ onChangeInput, children }) {
  const a=useContext(Context);
  return (
    <div>

      <Header />
      <SideNavbar  />
      <div
        className={`container ${
          a.sideBar ? "" : "large-container"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
