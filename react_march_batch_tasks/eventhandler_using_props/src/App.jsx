import './App.css'

const changeBackgroundColor = () => {
  document.body.style.backgroundColor="lightblue";
  const heading1=document.querySelector("first");
  const heading2=document.querySelector("second");
  heading1.style.color="blue";
  heading2.style.color="pink";
}
function App() {
  return(
    <div>
      <h1 className='first'>Have a nice day</h1>
      <h1 className='second'>Have a nice day</h1>
      <button onClick={changeBackgroundColor}>Change Backgorund Color</button>
    </div>
  )
}

export default App;
