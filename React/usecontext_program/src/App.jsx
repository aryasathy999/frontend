import React,{ useState } from 'react';
import Nav from './Nav';
export const Context=React.createContext();
function App() {
  const [signedIn, setSignedIn]=useState(false);
  return(
    <Context.Provider value={[signedIn,setSignedIn]}>
      <Nav />
      <h1>{signedIn ? 'signed out' : 'signed in'}</h1>
    </Context.Provider>
  );
}

export default App;
