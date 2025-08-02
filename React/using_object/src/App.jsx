import React from 'react';

const students=[
{id:1,mark: 50},
{id:2,mark: 30},
{id:3,mark: 40},
{id:4,mark: 60}
];
function App(){
  //Filter students with mark greater than 40
  const st=students.filter((i) => i.mark > 40);
  //st = [{mark:50},{mark:60}]
  return(
    <div>
      <h2>Students with Marks Greater than 40:</h2>
      <ul>
        {st.map((i) => (
          <li key={i.id}>Mark: {i.mark}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
