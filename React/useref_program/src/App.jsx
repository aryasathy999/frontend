import React,{ useState } from 'react';
import { useRef } from 'react';

function App() {
  const [time, setTime]=useState(0); //State to track elapsed time in seconds
  const intervalRef=useRef(null); //Ref to store the interval ID
  //Start Stopwatch
  const startStopwatch = () => {
    if(intervalRef){
      intervalRef.current = setInterval(() => {
        setTime((time) => time + 1);
        //Increment time by 1 second
      },1000);
    }
  };

  //Stop Stopwatch
  const stopStopwatch = () => {
    clearInterval(intervalRef.current);
    //Clear the interval to stop the stopwatch
    intervalRef.current=null; //Reset the ref
  };

  //Reset Stopwatch
  const resetStopwatch = () => {
    clearInterval(intervalRef.current); //Stop the stopwatch
    intervalRef.current=null; //Reset the ref
    setTime(0); //Reset the time
  };
  
  return(
    <div style={{textAlign: "center", marginTop: "50px"}}>
      <h1>useRef Stopwatch Example</h1>
      <h2>{time} seconds</h2>
      <h2>{intervalRef.current}</h2>
      <button onClick={startStopwatch} style={{padding: "8px 12px", margin: "5px"}}>Start</button>

      <button onClick={stopStopwatch} style={{padding: "8px 12px", margin: "5px"}}>Stop</button>

      <button onClick={resetStopwatch} style={{padding: "8px 12px", margin: "5px"}}>Reset</button>
    </div>
  )
}

export default App;
