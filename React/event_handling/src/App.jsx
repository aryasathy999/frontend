import './App.css'

const handleClick = (name) => {
  const message=`Have a nice day, ${name}`;
  alert(message);
};
function App() {
  return (
    <div>
      <button onClick={()=>handleClick("Arya")}>Click Me</button>
    </div>
  );
}

export default App;
