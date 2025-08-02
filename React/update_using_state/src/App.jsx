import React, { useState } from 'react';

const initialStudents = [
  { id: 1, mark: 50 },
  { id: 2, mark: 30 },
  { id: 3, mark: 40 },
  { id: 4, mark: 60 }
];
function App() {
  const [students, setStudents] = useState(initialStudents);
  const [inputId, setInputId] = useState('');
  const [newMark, setNewMark] = useState('');
  const handleIdChange = (e) => setInputId(e.target.value);
  const handleMarkChange = (e) => setNewMark(e.target.value);
  const updateStudentMark = () => {
    const idToUpdate = parseInt(inputId);
    const markValue = parseInt(newMark);
    if (!isNaN(idToUpdate) && !isNaN(markValue)) {
      const updatedStudents = students.map((student) => {
        if (student.id === idToUpdate) {
          student.mark = markValue; //  Direct mutation
        }
        return student;
      });
      setStudents(updatedStudents);
      setInputId('');
      setNewMark('');
    } else {
      alert('Please enter valid ID and Mark values');
    }
  };
  return (
    <div>
      <h2>Student List:</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            ID: {student.id} - Mark: {student.mark}
          </li>
        ))}
      </ul>
      <h3>Update a Student's Mark by ID</h3>
      <input
        type="number"
        value={inputId}
        onChange={handleIdChange}
        placeholder="Enter student ID"
      />
      <input
        type="number"
        value={newMark}
        onChange={handleMarkChange}
        placeholder="Enter new mark"
      />
      <button onClick={updateStudentMark}>Update</button>
    </div>
  );
}
export default App;