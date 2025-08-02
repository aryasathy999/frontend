import React,{ useState } from 'react';
import Nav from './Nav';
import Login from './Login';
import Home from './Home';
import Product from './Product';

//Create Context
export const Context=React.createContext();
function App() {
  const [username, setUsername]=useState(""); //To store username
  const [page, setPage]=useState("login"); //To manage current page
  return (
    <>
      <Context.Provider value={{username,setUsername,setPage}}>
        <Nav setPage={setPage} />
        {page == "login" ? <Login /> : ""}
        {page == "home" ? <Home /> : ""}
        {page == "product" ? <Product /> : ""}
      </Context.Provider>
    </>
  );
}

export default App;
