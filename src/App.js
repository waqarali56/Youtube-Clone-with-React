import './App.css';

import Header from './components/Header';
import React,{useState} from 'react';
import Main from './components/Main';


function App() {
  
  const [sideBar,setSideBar]=useState(true);
  
  function sidebarset()
  {
    
    setSideBar(!sideBar);
    
  }



  return (

    <>
    <Header  sidebarset={sidebarset}/>
   <Main sideBar={sideBar}/>
    </>

  );
}

export default App;
