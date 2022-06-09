
import './App.css';
import React from 'react';
import Home from  './Components/Home.js';
import About from  './Components/About.js';
import News from  './Components/News.js';
import Features from  './Components/Features.js';
import Blog from  './Components/Blog.js';
import Sports from  './Components/Sports.js';
import {
  Routes,
  Route,
} from "react-router-dom";

export const  AllRoutes = () => {
  return (
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/About' element={< About />}></Route>
        <Route exact path='/News' element={< News />}></Route>
        <Route exact path='/Features' element={< Features />}></Route>
        <Route exact path='/Blog' element={< Blog />}></Route>
        <Route exact path='/Sports' element={< Sports />}></Route>
      </Routes>
  );
}

