
import React, { useState, useEffect } from 'react';
import Details from './components/Details';
import Home from './components/Home';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Router>
    <a href="/" >Home </a>
    <a href="/details"> Details</a>
    <Routes>
    <Route path='/details' element ={<Details/>}></Route>
    <Route path='/' element = {<Home/>}></Route>
    </Routes>
    </Router>
  </div>

 ) 
};

export default App;
