
import React, { useState } from 'react'
import Context from '../context/NoteContext';



export default function State(props) {

    const [searchVideo,setSearchVideo]= useState('');

    function onChangeInput(e)
    {
     setSearchVideo(e.target.value);
    }
    const [sideBar, setSideBar] = useState(true);

  function onClickMenu() {
    setSideBar(!sideBar);
  }
 

  return (
    <Context.Provider value={{searchVideo,onChangeInput,sideBar,onClickMenu}}>
  {props.children}
    </Context.Provider>
    
  )
}
