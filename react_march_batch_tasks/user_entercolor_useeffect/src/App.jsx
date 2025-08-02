import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const colors = ['white', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'gray', 'teal', 'brown'];
  const [userColor, setUserColor]=useState('');
  useEffect(() => {
    const colorToApply=colors.includes(userColor.toLowerCase()) ? userColor.toLowerCase() : 'white';
    document.body.style.backgroundColor=colorToApply;
  },[userColor]);
  return(
    <div>
      <h2>Change Background Color</h2>
      <input type="text" value={userColor} placeholder='Enter color' onChange={(e) => setUserColor(e.target.value)} />
    </div>
  )
}

export default App;
