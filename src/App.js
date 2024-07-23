import './App.css';
import React,{useState} from 'react';
import Layout from './components/Layout';
import Videos from './components/VideoComponents/Videos';



function App() {
  
  const [sideBar,setSideBar]=useState(true);
  const [searchVideo,setSearchVideo]=useState('');

  
  function onClickMenu()
  {
    
    setSideBar(!sideBar);
    
  }
   function onChangeInput(e)
   {
    setSearchVideo(e.target.value);
   }



  return (

    <>
    <Layout sideBar={sideBar} onClickMenu={onClickMenu}  searchVideo={searchVideo} onChangeInput={onChangeInput}/>
    <Videos sideBar={sideBar} searchVideo={searchVideo}/>
    </>

  );
}

export default App;
