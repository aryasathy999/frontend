import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { useAuth } from './AuthenticationContext';
import userIcon from './assets/images/user.png';
import shoppingcartIcon from './assets/images/shoppingcart.jpg';
import burgerandfriesIcon from './assets/images/burgerandfries.avif';
import burgerIcon from './assets/images/burger.webp';
import burger2Icon from './assets/images/burger2.jpg';

const slides = [
  {
    title: 'Fast Food Restaurant',
    description: 'Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.',
    image: burgerandfriesIcon,
  },
  {
    title: 'Tasty & Fresh Burgers',
    description: 'Enjoy the best burgers made from premium ingredients. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, voluptas!',
    image: burgerIcon,
  },
  {
    title: 'Delicious & Juicy Burgers',
    description: 'Craving a treat? Try our new double patty burger with extra cheese and sauce. Perfectly grilled and served fresh!',
    image: burger2Icon,
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isLoggedIn, logout } = useAuth();
  const handleLogout = () => {
    logout(); 
    alert('You have been logged out!');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  const { title, description, image } = slides[currentIndex];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
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
      {/* Hero Section */}
      <div className="flex-1 flex px-16 py-10 gap-10 items-center justify-center">
        {/* Text Section */}
        <div className="w-1/2 transition-opacity duration-1000 ease-in-out">
          <h1 className="text-5xl italic font-semibold mb-6">{title}</h1>
          <p className="mb-6 text-gray-300">{description}</p>
          <Link
            to="/order"
            className="bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold inline-block"
          >
            Order Now
          </Link>
          {/* Slider Dots */}
          <div className="mt-8 flex gap-3 items-center">
            {slides.map((_, i) => (
              <span
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  i === currentIndex ? 'bg-yellow-400' : 'bg-white'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></span>
            ))}
          </div>
        </div>
        {/* Image Section */}
        <div className="w-1/2">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-xl shadow-lg transition-opacity duration-1000 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
