
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar';

import {

  BrowserRouter
} from "react-router-dom";
import {AllRoutes} from './routes'



function App() {
  return (
    <>
    <BrowserRouter>
    <div>
      <Navbar/>
      {AllRoutes()}
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;

