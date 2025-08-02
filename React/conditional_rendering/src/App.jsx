import React,{ useState } from 'react';
import {BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom';
import AdminPage from './AdminPage';
import ClientPage from './ClientPage';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/client" element={<ClientPage />} />
    </Routes>
  </Router>
  );
};

//Login Component
const LoginPage = () => {
  const navigate=useNavigate();
  const handleLogin = (event) => {
    const username=event.target.username.value;
    const password=event.target.password.value;
    if(username == "admin" && password == "admin") {
      navigate("/admin");
    }
    else {
      navigate("/client");
    }
  };

  return (
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input type='text' name="username" required placeholder='Enter useername' />
        </div>
      </form>
    </div>
  )
}

export default App;
