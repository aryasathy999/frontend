import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {useAuth} from './AuthenticationContext';
import userIcon from './assets/images/user.png';
import shoppingcartIcon from './assets/images/shoppingcart.jpg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = () => {
  const {isLoggedIn, handleLogout} = useAuth();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState('');
  const [date, setDate] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const handleBooking = (e) => {
    e.preventDefault();
    if(!isLoggedIn) {
      toast.warn(" Login and book it", { position: "top-center" });
      return;
    }
    if(!date || !tableNumber) {
       toast.error(" Please select both date and table number.", { position: "top-center" });
       return;
    }
    const newBooking = {date, tableNumber};
    const existingBookings = JSON.parse(localStorage.getItem('bookedTables')) || [];
    const isAlreadyBooked = existingBookings.some((booked) => booked.date === newBooking.date && booked.tableNumber === newBooking.tableNumber);
    if (isAlreadyBooked) {
      toast.error(` Table ${tableNumber} is already booked for ${date}`, { position: "top-center" });
      return;
    }
    existingBookings.push(newBooking);
    localStorage.setItem('bookedTables', JSON.stringify(existingBookings));
    toast.success(` Table ${tableNumber} booked for ${date}`, { position: "top-center" });
    setName('');
    setPhone('');
    setEmail('');
    setPeople('');
    setDate('');
    setTableNumber('');
  }
  return (
    <>
      {/* Header using TailwindCSS */}
      <div className="text-white min-h-screen flex flex-col">
        <header className="bg-black flex flex-wrap items-center justify-between px-8 py-4">
          <Link to="/" className="text-2xl font-bold italic text-white cursor-pointer">Feane</Link>
          <nav className="flex flex-wrap items-center gap-6 mt-4 md:mt-0">
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
            <div className="flex items-center gap-4 ml-4">
              <Link to="/profile">
                <img src={userIcon} alt="User" className="w-5 h-5 cursor-pointer" />
              </Link>
              <Link to="/addtocart">
                <img src={shoppingcartIcon} alt="Cart" className="w-5 h-5" />
              </Link>
            </div>
            <Link
              to="/menu"
              className="ml-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold"
            >
              Order Online
            </Link>
          </nav>
        </header>
        {/* Book Table Form and Map */}
        <div style={styles.container}>
          {/* Form */}
          <div style={styles.formContainer}>
            <h2 style={styles.heading}>Book A Table</h2>
            <form style={styles.form} onSubmit={handleBooking}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={styles.input}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              <select
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                style={styles.input}
                required
              >
                <option value="">How many persons?</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </select>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Select Date"
                style={styles.input}
                required
              />
              <input
                type="number"
                min="1"
                max="50"
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder="Enter Table Number"
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>BOOK NOW</button>
            </form>
          </div>
          {/* Map */}
          <div style={styles.mapContainer}>
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.845554782139!2d-74.00747368459341!3d40.71277677933047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjguOCJX!5e0!3m2!1sen!2sin!4v1594896893873!5m2!1sen!2sin"
              allowFullScreen
              style={styles.iframe}
            />
          </div>
        </div>
        <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
      </div>
    </>
  );
};

// Internal styles for form and layout
const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '40px 20px',
    gap: '100px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    backgroundColor: '#fff', 
    color: '#000'
  },
  formContainer: {
    flex: 1,
    minWidth: '300px',
    paddingRight: '20px'
  },
  heading: {
    fontFamily: 'Brush Script MT, cursive',
    fontSize: '32px',
    marginBottom: '30px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px'
  },
  button: {
    backgroundColor: '#f5a623',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '24px',
    cursor: 'pointer',
    alignSelf: 'flex-start'
  },
  mapContainer: {
    flex: 1,
    width: '800px',
    height: '310px',
    marginTop: '75px',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none'
  }
};

export default Book;
