import React,{ useState } from 'react';
import dog from './dog.png';

function App() {
  const [pos,setPosition]=useState(0); //Tracks Image Position
  const [facingRight, setFacingRight]=useState(true); //Tracks Image Direction

  //Function to flip and move image left
  const handleLeft = () => {
    setFacingRight(false); //Flip image to face left
    setPosition(pos-30); //Move 20px to the left
  };

  //Function to flip and move image to Right
  const handleRight = () => {
    setFacingRight(true); //Flip image to face Right
    setPosition(pos+30); //Move 20px to the right
  };
  return(
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>Move and Flip an Image</h1>
      <div style={{width: "100%", height: "400px", border: "1px solid #ccc", overflow: "hidden",margin: "20px auto"}}>
        <img 
        src={dog}
        alt="Movable"
        style={{ position: 'relative',top: '75px',left: `${pos}px`,transform: facingRight ? 'scaleX(1)' : 'scaleX(-1)', // Flip image
        transition: 'left 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
        />
        </div>
        <div style={{ marginTop: '20px' }}>
        <button onClick={handleLeft} style={{ marginRight: '10px' }}>Move Left</button>
        <button onClick={handleRight}>Move Right</button>
      </div>
    </div>
  )
}

export default App
