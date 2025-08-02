import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=(?:.*[a-z]){3,})(?=.*\d{4})(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{9,}$/;
    if (!nameRegex.test(formData.name)) {
      toast.error(" Name must contain alphabets only.");
      return false;
    }
    if (!emailRegex.test(formData.email)) {
      toast.error(" Enter a valid email address.");
      return false;
    }
    if (!passwordRegex.test(formData.password)) {
      toast.error(" Password must have 1 capital, 3 lowercase, 1 special character, and 4 digits.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const isDuplicate = existingUsers.some(user => user.email === formData.email);
      if (isDuplicate) {
        toast.error(" This email is already registered.");
        return;
      }
      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
      toast.success(" Registered successfully!");
      setFormData({ name: '', email: '', password: '' });
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Register</h2>
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 rounded px-4 py-2"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="text-xs text-gray-500 mt-1">
            Must have 1 capital, 3 lowercase, 1 special character, 4 digits
          </p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Register
        </button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} />
    </div>
  );
};

export default Register;
