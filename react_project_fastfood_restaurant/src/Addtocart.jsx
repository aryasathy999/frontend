import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useAuth } from './AuthenticationContext'; 
import { Link } from 'react-router-dom';
import userIcon from './assets/images/user.png';
import shoppingcartIcon from './assets/images/shoppingcart.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addtocart = () => {
    const { cartItems, removeFromCart } = useCart();
    const [searchTerm, setSearchTerm] = useState('');
    const { isLoggedIn, logout } = useAuth();

    const handleRemove = (index) => {
        removeFromCart(index);
        toast.success("Item removed successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    };

    const handleLogout = () => {
        logout();
        toast.success("Logged out successfully!", {
            position: "top-right",
            autoClose: 3000,
        });
    };
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);
    const gst = totalPrice * 0.18;
    const totalWithGst = totalPrice + gst;
    return (
        <div className="bg-black text-white min-h-screen flex flex-col">
            <ToastContainer />
            {/* Navbar */}
            <header className="flex items-center justify-between px-8 py-4">
                <div className="text-2xl font-bold italic text-white cursor-pointer">Feane</div>
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
                        <Link to="/addtocart" className="text-white hover:text-yellow-400 cursor-pointer">
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
                    <Link
                        to="/menu"
                        className="ml-6 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold cursor-pointer"
                    >
                        Order Online
                    </Link>
                </nav>
            </header>
            <h2 className="text-3xl font-bold mb-6 text-center">Your Cart{cartItems.length > 0 ? ` - ${cartItems.length}` : ''}</h2>
            {cartItems.length === 0 ? (
                <p className="text-lg text-gray-300 text-center">No items in the cart.</p>
            ) : (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8">
                        {cartItems.map((item, index) => (
                            <div key={index} className="bg-white text-black p-4 rounded shadow">
                                <img src={item.img} alt={item.name} className="w-full h-32 object-cover rounded mb-2" />
                                <h3 className="font-bold text-xl">{item.name}</h3>
                                <p>{item.dsc}</p>
                                <p className="font-semibold mt-2">₹{item.price.toFixed(2)}</p>
                                <button
                                    onClick={() => handleRemove(index)}
                                    className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    {/* Total Price with GST */}
                    <div className="text-center mt-10 mb-8 text-xl font-semibold">
                        <p>Subtotal: ₹{totalPrice.toFixed(2)}</p>
                        <p>GST (18%): ₹{gst.toFixed(2)}</p>
                        <p className="text-yellow-400">Total (Incl. GST): ₹{totalWithGst.toFixed(2)}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default Addtocart;
