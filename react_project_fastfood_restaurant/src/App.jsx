import React from 'react';
import HeroSection from './Home.jsx';
import Menu from './Menu.jsx';
import About from './About';
import Book from './Book';
import Contact from './Contact.jsx';
import Register from './Register.jsx';
import Addtocart from './Addtocart.jsx';
import Profile from './Profile.jsx';
import Login from './Login.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addtocart" element={<Addtocart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
