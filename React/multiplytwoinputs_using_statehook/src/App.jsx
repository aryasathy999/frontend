import React,{ useState } from 'react'

function App() {
  const [val1,setVal1]=useState(''); //state for first input
  const [val2,setVal2]=useState(''); //state for second input
  const getMultipliedValue = () => {
    const num1 = parseFloat(val1); //convert first input to a number
    const num2 = parseFloat(val2); //convert second input to a number
    if(isNaN(num1) || isNaN(num2)){
      return ''; //Handle invalid inputs
    }
    else{
      return num1 * num2; //Handle valid inputs
    }
  }
  return(
    <div style={{textAlign: 'center', marginTop: '20px'}}>
      <h1>Multiply Two Inputs</h1>
      <input type="text"
      value={val1} //Link the value to state
      onChange={(e) => setVal1(e.target.value)} //Updates state directly using on change
      placeholder='Enter first number'
      style={{margin: '5px'}}
      />
      <input type="text"
      value={val2} //Link the value to state
      onChange={(e) => setVal2(e.target.value)} //Updates state directly using on change
      placeholder='Enter second number'
      style={{margin: '5px'}}
      />
      <p>Result : {getMultipliedValue()}</p>
    </div>
  )
}

export default App;
