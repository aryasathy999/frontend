import React, { useState } from 'react'

const initialStudents=[
  {id:1, mark:50},
  {id:2, mark:30},
  {id:3, mark:40},
  {id:4, mark:60}
];
function App() {
 //State to hold students data
 const [students, setStudents]=useState(initialStudents);
 //Function to delete a student by ID
 const deleteStudent = (id) => {
  const updatedStudents = students.filter((student) => student.id !== id);
  setStudents(updatedStudents);
 };
 return(
  <div>
    <h2>Student List:</h2>
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          Mark: {student.mark}
          <button onClick={() => deleteStudent(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
 );
}

export default App;
