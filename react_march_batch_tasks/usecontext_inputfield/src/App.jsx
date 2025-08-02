import React,{ useState } from 'react';
export const Context=React.createContext();
import Nav from './Nav.jsx';

function App() {
  const [inputText, setInputText]=useState('');
  return(
    <Context.Provider value={[inputText,setInputText]}>
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h2>Live Input Display</h2>
        <Nav />
      </div>
    </Context.Provider>
  )
}
export default App;