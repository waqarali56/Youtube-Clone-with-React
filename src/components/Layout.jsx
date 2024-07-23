import React, { useState } from "react";
import Header from "./Header";
import SideNavbar from "./SideBar/SideNavbar";

export default function Layout({ onChangeInput, children }) {
  const [sideBar, setSideBar] = useState(true);

  function onClickMenu() {
    setSideBar(!sideBar);
  }
  return (
    <div>
      <Header onClickMenu={onClickMenu} onChangeInput={onChangeInput} />

      <SideNavbar sideBar={sideBar} />
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
