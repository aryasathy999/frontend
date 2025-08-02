import React from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from './AuthenticationContext';
import userIcon from './assets/images/user.png';
import shoppingcartIcon from './assets/images/shoppingcart.jpg';

function Contact() {
  const {isLoggedIn, handleLogout} = useAuth();
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="text-2xl font-bold italic text-white cursor-pointer">Feane</Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-yellow-400 cursor-pointer">HOME</Link>
          <Link to="/menu" className="text-white hover:text-yellow-400 cursor-pointer">MENU</Link>
          <Link to="/about" className="text-white hover:text-yellow-400 cursor-pointer">ABOUT</Link>
          <Link to="/book" className="text-white hover:text-yellow-400 cursor-pointer">BOOK TABLE</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400 cursor-pointer">CONTACT</Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white hover:text-yellow-400 font-semibold"
            >
              LOGOUT
            </button>
            ) : (
            <Link
              to="/login"
              className="text-white hover:text-yellow-400 font-semibold"
            >
              LOGIN
            </Link>
          )}
          <Link to="/register" className="text-white hover:text-yellow-400 cursor-pointer">REGISTER</Link>
          <div className="flex items-center gap-4 ml-6">
            <Link to="/profile">
              <img src={userIcon} alt="User" className="w-5 h-5 cursor-pointer" />
            </Link>
            <Link to="/addtocart">
              <img src={shoppingcartIcon} alt="Cart" className="w-5 h-5" />
            </Link>
          </div>
          <Link
            to="/menu"
            className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold cursor-pointer"
          >
            Order Online
          </Link>
        </nav>
      </header>
      {/* Contact Content */}
      <div className="mt-38 flex-1 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Contact Us */}
          <div>
            <h2 className="text-3xl font-semibold italic mb-4">Contact Us</h2>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>📍</span> <span>Location</span>
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>📞</span> <span>Call +01 1234567890</span>
            </p>
            <p className="mb-2 flex items-center justify-center md:justify-start gap-2">
              <span>✉️</span> <span>demo@gmail.com</span>
            </p>
          </div>
          {/* Center Brand */}
          <div>
            <h2 className="text-3xl font-semibold italic mb-4">Feane</h2>
            <p className="mb-4">
              Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex justify-center md:justify-start gap-4 text-lg">
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">🌐</span>
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">🐦</span>
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">🔗</span>
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">📷</span>
              <span className="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">📌</span>
            </div>
          </div>
          {/* Opening Hours */}
          <div className="ml-35">
            <h2 className="text-3xl font-semibold italic mb-4">Opening Hours</h2>
            <p className="mb-2">Everyday</p>
            <p>10.00 Am - 10.00 Pm</p>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-40 text-center text-sm text-gray-400 space-y-1">
          <p>© 2025 All Rights Reserved By Free Html Templates</p>
          <p>© Distributed By ThemeWagon</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
