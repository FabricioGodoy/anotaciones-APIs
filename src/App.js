import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home';
import ApiDigimon from './views/apis/apiDigimon'
import Api from './views/apis/api'
import Contador from './views/hook/contador';
import './components/css/style.css';


function App() {
 
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/apiDigimon' element={<ApiDigimon/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/contador' element={<Contador/>}/>
        </Routes>    
    </Router>
    );
  }
export default App;

