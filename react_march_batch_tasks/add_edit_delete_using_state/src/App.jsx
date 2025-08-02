import React, { useState } from 'react';

function App() {
  const initialStudents = [
    { id: 1, mark: 56 },
    { id: 2, mark: 30 },
    { id: 3, mark: 40 },
    { id: 4, mark: 60 },
    { id: 5, mark: 67 }
  ];
  const [students, setStudents] = useState(initialStudents);
  const [id, setId] = useState('');
  const [marks, setMarks] = useState('');
  const [isEditing, setEditing] = useState(false);
  const addStudent = () => {
    const id = parseInt(newId);
    const mark = parseInt(newMarks);
    if (!isNaN(id) && !isNaN(mark)) {
      const newStudent = { id, mark };
      setStudents(students.concat(newStudent));
      setId('');
      setMarks('');
    } else {
      alert('Please enter valid Id and Mark');
    }
  };
  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };
  const editStudent = (student) => {
    setId(student.id);
    setMarks(student.mark);
    setEditing(true);
  }
  const updateStudent = () => {
    const newId=parseInt(id);
    const newMark=parseInt(marks);
    if(!isNaN(newId) && !isNaN(newMark)){
      const updatedStudent=students.map((student) => student.id === id ? {...student,mark:newMark} : student)
      setStudents(updatedStudent);
      setId('');
      setMarks('');
      setEditing(false);
    }
    else{
      alert('Please enter valid Id and Mark');
    }
  }
  return (
    <div style={{display: "flex", gap: "600px"}}>
      <div>
        <h2>Student List:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              ID: {student.id} - Mark: {student.mark}
              <button onClick={() => editStudent(student)}>Edit</button>
              <button onClick={() => deleteStudent(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <h3>Add a New Student</h3>
        <input
          type="text"
          value={id}
          placeholder="Enter a student ID"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={marks}
          placeholder="Enter student mark"
          onChange={(e) => setMarks(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>

      {isEditing && (
        <div>
          <h2>Student List:</h2>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                ID: {student.id} - Mark: {student.mark}
              </li>
            ))}
          </ul>
          <h3>Update Student</h3>
          <input
            type="text"
            value={id}
            placeholder="Enter a student ID"
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type="text"
            value={marks}
            placeholder="Enter student mark"
            onChange={(e) => setMarks(e.target.value)}
          />
          <button onClick={updateStudent}>Update Student</button>
        </div>
      )}
    </div>
  );
}

export default App;
