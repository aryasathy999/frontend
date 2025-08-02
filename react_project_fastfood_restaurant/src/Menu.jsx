import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthenticationContext'
import { useCart } from './CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import userIcon from './assets/images/user.png';
import shoppingcartIcon from './assets/images/shoppingcart.jpg';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [hoveredItemId, setHoveredItemId] = useState(null);
  const {isLoggedIn, logout} = useAuth();
  const { addToCart } = useCart();
  const navigate=useNavigate();
  useEffect(() => {
    fetch('https://free-food-menus-api-two.vercel.app/burgers')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setMenuItems(data);
      })
      .catch((err) => {
        console.error('Failed to fetch menu data:', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (item) => {
    if(!isLoggedIn) {
       toast.warn(' Please login to add items to cart.');
       setTimeout(() => {
        navigate('/login');
       }, 1500);
       return;
    }
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  const handleLogout = () => {
    logout(); 
    toast.success(' Logged out successfully!');
  };

  const filteredItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Toast container */}
      <ToastContainer position="top-center" autoClose={2000} />
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="text-2xl font-bold italic text-white cursor-pointer">Feane</Link>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-white hover:text-yellow-400">HOME</Link>
          <Link to="/menu" className="text-white hover:text-yellow-400">MENU</Link>
          <Link to="/about" className="text-white hover:text-yellow-400">ABOUT</Link>
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
            <input
              type="text"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="ml-2 px-2 py-1 rounded text-black text-sm bg-white"
            />
          </div>
          <Link to="/menu" className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold">
            Order Online
          </Link>
        </nav>
      </header>
      {/* Menu List */}
      <main className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading ? (
          <p className="text-center col-span-full">Loading menu...</p>
        ) : filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => {
                setHoveredItemId(item.id);
              }}
              onMouseLeave={() => {
                setHoveredItemId(null);
              }}
              className={`bg-white text-black p-4 rounded shadow transition duration-300 cursor-pointer ${
                hoveredItemId === item.id ? 'bg-yellow-100 scale-105' : ''
              }`}
            >
              {item.img && (
                <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
              )}
              <h3 className="font-bold text-xl mb-1">{item.name}</h3>
              <p className="text-sm">{item.dsc}</p>
              <p className="font-semibold mt-2">₹{item.price}</p>
              {item.rate && <p className="text-xs">Rating: {item.rate}</p>}
              <button
                onClick={() => handleAddToCart(item)}
                className="mt-2 bg-yellow-400 px-3 py-1 rounded-full text-black font-medium hover:bg-yellow-500"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full">No matching items found.</p>
        )}
      </main>
    </div>
  );
};

export default Menu;
