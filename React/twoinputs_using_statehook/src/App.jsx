import React,{ useState } from 'react';

function App() {
  const [val1,setVal1]=useState('');
  const [val2,setVal2]=useState('');
  const [result,setResult]=useState('');
  const getComputedValue = (op) => {
    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    if(isNaN(num1) || isNaN(num2)){
      setResult('Enter a valid number')
      return;
    }
    else{
      let res=0;
      switch(op){
        case '+':
          res=num1 + num2;
          break;
        case '-':
          res=num1-num2;
          break;
        case '*':
          res=num1*num2;
          break;
        case '/':
          res=num2 !==0 ? num1 / num2 : 'Cannot divide by zero';
          break;
        default:
          res='';
      }
      setResult(res);
    }
  }
  return(
    <div style={{textAlign:'center',marginTop:'20px'}}>
      <h1>Two Input Values</h1>
      <input type="text"
      value={val1}
      onChange={(e)=>{setVal1(e.target.value)}}
      placeholder='Enter first number'
      style={{margin: '5px'}}
      />
      <input type="text"
      value={val2}
      onChange={(e)=>{setVal2(e.target.value)}}
      placeholder='Enter second number'
      style={{margin: '5px'}}
      />
      <div style={{marginTop: '10px'}}>
        <button onClick={() => getComputedValue('+')} style={{margin: '5px'}}>+</button>
        <button onClick={() => getComputedValue('-')} style={{margin: '5px'}}>-</button>
        <button onClick={() => getComputedValue('*')} style={{margin: '5px'}}>*</button>
        <button onClick={() => getComputedValue('/')} style={{margin: '5px'}}>/</button>
      </div>
      <p>Result : {result}</p>
    </div>
  )
}

export default App;
