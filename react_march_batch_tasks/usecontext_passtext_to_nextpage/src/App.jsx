import React,{ useState } from 'react';
import Login from './Login';
import Home from './Home';

export const Context=React.createContext();
function App() {
  const [username,setUsername]=useState("");
  const [page,setPage]=useState("login");
  return(
    <Context.Provider value={{username,setUsername,setPage}}>
      {page == 'login' ? <Login /> : ""}
      {page == 'home' ? <Home /> : ""}
    </Context.Provider>
  );
}

export default App;
