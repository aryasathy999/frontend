import React from 'react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <h1>Welcome to My Website</h1>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default App;
