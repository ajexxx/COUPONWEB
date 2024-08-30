import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Couponapi from './components/Couponapi/Couponapi';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import Topstore from './components/Topstore/Topstore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='Couponapi' element={<Couponapi/>}/>
    <Route path='Main' element={<Main/>}/>
    <Route path='Footer' element={<Footer/>}/>
    
    <Route path='Topstore' element={<Topstore/>}/>

  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
