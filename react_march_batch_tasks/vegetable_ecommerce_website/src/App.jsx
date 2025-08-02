import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginForm from './LoginForm';
import Home from './Home';
import Products from './Products';

function App() {
 const [isLoggedIn, setIsLoggedIn]=useState(false);
 return(
  <>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  </>
 );
}

export default App;
