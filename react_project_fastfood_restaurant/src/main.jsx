import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './CartContext.jsx';
import { AuthenticationProvider } from './AuthenticationContext.jsx';
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthenticationProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
