import React,{ useState } from 'react';

function App() {
  const [val,setVal]=useState(''); //state to user user input
  const [val1,setVal1]=useState(''); //state to user user input
  return(
    <div style={{textAlign:'center',marginTop:'20px'}}>
      <h1>Simple Input Example</h1>
      <input type="text"
      value={val} //The value is linked to the state
      onChange={(e)=>setVal(e.target.value)} //Updates state directly
      placeholder='Type something here'
      />
      <br></br>
      <input type="text"
      value={val1} //The value is linked to the state
      onChange={(e)=>setVal1(e.target.value)} //Updates state directly
      style={{ marginTop: '10px' }}
      />
      <p>My name is: {val}</p>
      <p>I am teaching : {val1}</p>
    </div>
  );
}

export default App;
