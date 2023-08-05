// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Home';
import Product from './components/Product';
import Contact from './Contact';
import Cart from './components/Cart';
function App() {

  return(
    <>
    
    <Router>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/product/:id' element = {<Product/>}/>
      <Route path='/Contact' element ={<Contact/>}/>
      <Route path='/Cart' element ={<Cart/>}/>
    </Routes>
    </Router>
    </>
  )
}
 
export default App;
