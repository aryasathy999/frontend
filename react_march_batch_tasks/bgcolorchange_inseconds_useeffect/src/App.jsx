import React,{ useState,useEffect } from 'react';

function App() {
 const colors = ['white', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'gray', 'teal', 'brown'];
 const [index,setIndex]=useState(0);
 useEffect(() => {
  document.body.style.backgroundColor=colors[index];
  
  const interval = setInterval(() => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  },1000);
  
  return() => clearInterval(interval);
  }, [index,colors]);
 return(
  <div>
    <h2>Change Background Color: {colors[index]}</h2>
  </div>
 )
}

export default App;
 