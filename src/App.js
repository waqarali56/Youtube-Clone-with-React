import './App.css';

import Header from './components/Header';
import React,{useState} from 'react';
import Main from './components/Main';



function App() {
  
  const [sideBar,setSideBar]=useState(true);
  const [SearchVideo,SetSearchVideo]=useState('');

  
  function sidebarset()
  {
    
    setSideBar(!sideBar);
    
  }
   function getInput(e)
   {
    SetSearchVideo(e.target.value);
   }



  return (

    <>
    <Header  sidebarset={sidebarset}  getInput={getInput}/>
    <Main sideBar={sideBar} SearchVideo={SearchVideo} />
     

    </>

  );
}

export default App;
