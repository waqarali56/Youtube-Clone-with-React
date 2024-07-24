import './App.css';
import React,{useState} from 'react';
import Layout from './components/Layout';
import Videos from './components/VideoComponents/Videos';
import OpenVideo from './components/OpenVideo/OpenVideo';
import { Route, Routes } from 'react-router-dom';
import State from './State/State'



function App() {

  return (

    <>
    <State>
    <Layout>
    <Routes>

    <Route path="/" element={<Videos/>} exact />
    <Route path="/openVideo" element={<OpenVideo />} />

    </Routes>
      
    </Layout>
    </State>
    
    </>

  );
}

export default App;
