import './App.css';
import React,{useState} from 'react';
import Layout from './components/Layout';
import Videos from './components/VideoComponents/Videos';
import OpenVideo from './components/OpenVideo/OpenVideo';
import { Route, Routes } from 'react-router-dom';
import State from './State/StateProvider'
import StateProvider from './State/StateProvider';



function App() {

  return (

    <>
    <StateProvider>
    <Layout>
    <Routes>

    <Route path="/home" element={<Videos/>} exact />
    <Route path="/openVideo" element={<OpenVideo />} />

    </Routes>
      
    </Layout>
    </StateProvider>
    
    </>

  );
}

export default App;
