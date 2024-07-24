import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export default function StateProvider({ children }) {
  const [searchVideo, setSearchVideo] = useState("");

  function onChangeInput(e) {
    setSearchVideo(e.target.value);
  }
  const [sideBar, setSideBar] = useState(true);

  function onClickMenu() {
    setSideBar(!sideBar);
  }

  const contextValue = { searchVideo, onChangeInput, sideBar, onClickMenu };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
