import react,{ useState,useEffect } from 'react';

function App() {
  const colors = ['white', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'gray', 'teal', 'brown'];
  const [index,setIndex]=useState(0);
  useEffect(() => {
    document.body.style.backgroundColor=colors[index];
  },[index]);
  const handleChange = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length); //when it reaches last color, again reinitialize it to 0th index
  }; 
  return(
    <div>
      <h2>Change Background Color</h2>
      <button type='submit' onClick={handleChange}>Change</button>
    </div>
  );
}

export default App;
