import React,{ useState,useEffect } from 'react'

function App() {
  const [enteredColor, setEnteredColor]=useState('');
  useEffect(() => {
    document.body.style.backgroundColor=enteredColor;
  },[enteredColor]);
  return(
    <div style={{textAlign: 'center', marginTop: "250px"}}>
    <h2>Change Background Color</h2>
    <input type="text" value={enteredColor} placeholder='change color' onChange={(e) => setEnteredColor(e.target.value)} style={{padding: "5px 20px 5px 20px"}} />
    </div>
  )
}

export default App
