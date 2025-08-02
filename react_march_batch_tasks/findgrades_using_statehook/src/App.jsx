import React,{ useState } from 'react';

function App() {
  const [marks,setMarks]=useState(['','','','','']);
  const [grade,setGrade]=useState('');
  
  const handleInputChange=(index,value)=>{
    const updatedMarks=[...marks];
    updatedMarks[index]=value;
    setMarks(updatedMarks);
  };

  const calculateGrade = () => {
    const numericMarks=marks.map(m => parseFloat(m)); //iterate over array items and returns it according to it
    if(numericMarks.some(isNaN)){ //some method returns true if one array item matches the condition
      setGrade("Please enter all 5 valid marks");
      return;
    }
    const average=numericMarks.reduce((a,b) => a+b,0)/5; //reduce method returns single value after iterating array of items
    let result="";
    if(average>=90) result="A+";
    else if(average>=80) result="A";
    else if (average >= 70) result = "B+";
    else if (average >= 60) result = "B";
    else if (average >= 50) result = "C+";
    else result="Fail";

    setGrade(`Average: ${average.toFixed(2)} - Grade: ${result}`);
  };

  return (
    <div style={{padding: '20px'}}>
      <h2>Calculate Average of Marks</h2>
      {marks.map((mark,index) => (
        <input 
        key={index}
        type="number"
        value={mark}
        placeholder={`Subject${index + 1}`}
        onChange={(e) => handleInputChange(index,e.target.value)}
        style={{margin: '5px'}}
        />
      ))}
      <br></br>
      <button onClick={calculateGrade} style={{marginTop: '10px'}}>Get grade</button>
      <h3>{grade}</h3>
    </div>
  );
}

export default App;
