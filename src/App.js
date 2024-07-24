import './App.css';
import React,{useState} from 'react';
import Layout from './components/Layout';
import Videos from './components/VideoComponents/Videos';



function App() {
  
  const [searchVideo,setSearchVideo]=useState('');
  
   function onChangeInput(e)
   {
    setSearchVideo(e.target.value);
   }

  


  return (

    <>
    <Layout searchVideo={searchVideo}  onChangeInput={onChangeInput}>
      <Videos searchVideo={searchVideo} />
    </Layout>
    </>

  );
}

export default App;
