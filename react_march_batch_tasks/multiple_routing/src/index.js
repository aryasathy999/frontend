import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Products from './Products';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

