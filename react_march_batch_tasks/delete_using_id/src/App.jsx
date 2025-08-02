import React, { useState } from 'react';

function App() {
 const [students,setStudents]=useState([
  {id:1, Mark:10},
  {id:2, Mark:20},
  {id:3, Mark:30},
  {id:4, Mark:40},
  {id:5, Mark:50},
  {id:6, Mark:60}
 ]);
 const [deleteid, setDeleteid]=useState('');
 const deleteStudents=()=>{
  const updatedStudents=students.filter((std) => std.id!==parseInt(deleteid));
  setStudents(updatedStudents);
  setDeleteid('');
 };
 return(
  <>
  <h2>Students List:</h2>
  <ul>
    {students.map((student) => (
      <li key={student.id}>Mark: {student.Mark}</li>
    ))}
  </ul>
  <h2>Delete a Student by ID</h2>
  <input type="Number" value={deleteid} placeholder='Enter student ID' onChange={(e) => setDeleteid(e.target.value)} /> <button onClick={deleteStudents}>Delete Student</button>
  </>
 )
}

export default App;
