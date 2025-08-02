import './App.css';

function App(){
  const handleKeyDown = (event) => {
    switch(event.key){
      case "ArrowUp":
        document.body.style.backgroundColor="lightgreen";
        break;
      case "ArrowDown":
        document.body.style.backgroundColor="lightpink";
        break;
      case "Backspace":
        document.body.style.backgroundColor="orange";
        break;
      case "Escape":
        document.body.style.backgroundColor="red";
        break;
      case "Default":
        document.body.style.backgroundColor="black";
        break;
    }
  }
  return (
    <div>
      <h1>Background color change</h1>
      <input type="text" placeholder='type color' onKeyDown={handleKeyDown} />
    </div>
  )
}

export default App;

// function App(){
//   const handleChange = (event) => {
//     const color=event.target.value.toLowerCase();
//     if(color){
//       document.body.style.backgroundColor=color;
//     }
//     else{
//       document.addEventListener('keydown', function(event){
//         if(event.code==='Space'){
//           document.body.style.backgroundColor="";
//         }
//       })
//     }
//   }
//   return(
//     <div>
//       <h1>Background color change</h1>
//       <input type="text" placeholder='Enter color' onChange={handleChange} />
//     </div>
//   )
// }

// export default App;