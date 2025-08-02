import React, { useEffect } from 'react';
import { useAuth } from './AuthenticationContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const { isLoggedIn, userName, userEmail } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedIn) {
      toast.error('Please login to view profile');
      navigate('/login'); 
    }
  }, [isLoggedIn, navigate]);

  return (
    isLoggedIn && (
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
          <p className="text-lg mb-2"><strong>Name:</strong> {userName}</p>
          <p className="text-lg"><strong>Email:</strong> {userEmail}</p>
        </div>
      </div>
    )
  );
};

export default Profile;
