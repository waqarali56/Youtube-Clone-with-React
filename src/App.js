import './App.css';

import Header from './components/Header';
import SideNavbar from './components/SideBar/SideNavbar';
import Videos from './components/Videos';
import React,{useState} from 'react';


function App() {
  
  const [sideBar,setSideBar]=useState(true);
  
  function sidebarset()
  {
    
    setSideBar(!sideBar);
    
  }



  return (

    <>
    <Header  sidebarset={sidebarset}/>
    <div className='main'>
    <SideNavbar sideBar={sideBar} />
    <Videos sideBar={sideBar}/>
    </div>
  
    </>

  );
}

export default App;
