import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from './AuthenticationContext'; 
import userIcon from './assets/images/user.png'; 
import shoppingcartIcon from './assets/images/shoppingcart.jpg';
import burgerImage from './assets/images/aboutburger.jpg';

const About = () => {
  const [isHovered, setHovered] = useState(false);
  const { isLoggedIn, handleLogout } = useAuth();
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Tailwind-styled Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-black">
        <Link to="/" className="text-2xl font-bold italic text-white cursor-pointer">Feane</Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-yellow-400">HOME</Link>
          <Link to="/menu" className="text-white hover:text-yellow-400">MENU</Link>
          <Link to="/about" className="text-yellow-400 font-semibold">ABOUT</Link>
          <Link to="/book" className="text-white hover:text-yellow-400">BOOK TABLE</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400">CONTACT</Link>
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
            className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
          >
            Order Online
          </Link>
        </nav>
      </header>
      {/* Internally styled section */}
      <section style={styles.section}>
        <div style={styles.container}>
          {/* Left: Image */}
          <div style={styles.imageContainer}>
            <img src={burgerImage} alt="Burger" style={styles.image} />
          </div>
          {/* Right: Text */}
          <div style={styles.textContainer}>
            <h2 style={styles.heading}>We Are Feane</h2>
            <p style={styles.paragraph}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All
            </p>
            <button style={{
              ...styles.button,
              backgroundColor: isHovered ? '#fbbf24' : '#facc15',
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Internal styles
const styles = {
  section: {
    backgroundColor: '#1f2937', 
    color: 'white',
    minHeight: '90vh',
    padding: '5rem 1.5rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10rem',
    flexWrap: 'wrap',
  },
  imageContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '500px',
    height: 'auto',
    objectFit: 'contain',
  },
  textContainer: {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '600',
    fontStyle: 'italic',
    fontFamily: `'Dancing Script', cursive`, 
    marginBottom: '1.5rem',
  },
  paragraph: {
    color: '#d1d5db',
    fontSize: '1rem',
    lineHeight: '1.75rem',
    marginBottom: '2rem',
    maxWidth: '600px',
  },
  button: {
    backgroundColor: '#fbbf24', 
    color: 'black',
    padding: '0.75rem 2rem',
    borderRadius: '9999px',
    fontWeight: '500',
    fontSize: '1rem',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default About;
