import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './views/home';
import ApiDigimon from './views/apis/apiDigimon'
import Api from './views/apis/api'
import UsoEstado from './views/hook/useState';
import './components/css/style.css';


function App() {
 
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/apiDigimon' element={<ApiDigimon/>}/>
          <Route path='/api' element={<Api/>}/>
          <Route path='/usoestado' element={<UsoEstado/>}/>
        </Routes>    
    </Router>
    );
  }
export default App;

