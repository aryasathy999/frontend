import './App.css'

function App() {
  const handleKeyPress = (event) => {
    if(event.key=="Enter"){
      document.body.style.backgroundColor="lightblue";
      document.body.style.color="black";
      const heading=document.querySelector("h1");
      heading.textContent=`You typed: ${event.target.value}`;
    }
  };
  return(
    <div>
      <h1>Press 'Enter' to change background color</h1>
      <input type="text" placeholder="Press 'Enter' key" onKeyDown={handleKeyPress} />
    </div>
  );
}

export default App;
