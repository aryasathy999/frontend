import React,{ useState } from 'react';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Product from './Product';
import Invoice from './Invoice';

//Create Context
export const Context=React.createContext();
function App() {
  const [username, setUsername]=useState(""); //To store username
  const [page, setPage]=useState("login"); //To manage current page
  const [cart, setCart]=useState([]); //To store all products added to cart
  // console.log("Current page:", page);
  // console.log("Cart contents:", cart);
  return (
    <>
      <Context.Provider value={{username,setUsername,setPage,cart,setCart}}>
        <Nav setPage={setPage} />
        {page == "login" ? <Login /> : ""}
        {page == "home" ? <Home /> : ""}
        {page == "product" ? <Product /> : ""}
        {page == "invoice" ? <Invoice /> : ""}
      </Context.Provider>
    </>
  );
}

export default App;
