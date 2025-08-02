import React,{ useState,useEffect } from 'react';

function App() {
  //state to store dog image URL
  const [dogImage, setDogImage]=useState(null);
  const [val,setVal]=useState(0);
  //Fetch dog image on component mount
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json()) //Convert response to JSON
    .then((dt) => {
      setDogImage(dt.message) //Set the image URL
    })
    .catch((error) => {
      console.error('Error fetching dog image',error);
  });
  },[val]);
  return(
    <div>
      <h1>Random Dog Image</h1>
      <div>
        <img src={dogImage} alt='A Random Dog' style={{width: '300px', height: 'auto'}}></img>
        <button onClick={() => setVal(val + 1)}>Change</button>
      </div>
    </div>
  )
}

export default App;
