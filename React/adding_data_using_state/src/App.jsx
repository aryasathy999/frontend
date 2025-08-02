import { React, useState } from 'react';

function App() {
  const initialStudents=[
    {id:1, mark:50},
    {id:2, mark:30},
    {id:3, mark:40},
    {id:4, mark:60}
  ]
  const [students,setStudents]=useState(initialStudents);
  const [newMarks,setNewMarks]=useState('');
  const [newid,setNewId]=useState('');
  const addStudent = () => {
    const id=parseInt(newid);
    const mark=parseInt(newMarks);
    if(!isNaN(id) && !isNaN(mark)){
      const newStudent={id, mark};
      setStudents(students.concat(newStudent));
      setNewId('');
      setNewMarks('');
    }
    else{
      alert('Please enter valid Id and Mark');
    } 
  }
  return(
    <>
    <h2>Studnets List:</h2>
    <ul>
      {students.map((student) => (
        <li key={student.id}>ID: {student.id} Mark: {student.mark}</li>
      ))}
    </ul>
    <h3>Add a New Student:</h3>
    <input
    type="number"
    value={newid}
    placeholder='Enter a new student id'
    onChange={(e) => setNewId(e.target.value)} 
    />
    <input 
    type="number"
    value={newMarks}
    placeholder='Enter new student mark'
    onChange={(e) => setNewMarks(e.target.value)}
    />
    <button onClick={addStudent}>Add Student</button>   
    </>
  )
}

export default App;
