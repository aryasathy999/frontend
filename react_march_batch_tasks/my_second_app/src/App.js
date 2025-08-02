import logo from './step3.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Six Fast Facts About Mr Bateup</h2>
        <p>
          My name is <strong>Mr Bateup</strong><br />
          My favourite colour is <strong>blue</strong><br />
          My favourite food is <strong>chocolate</strong><br />
          My favourite TV show is <strong>Breaking Bad</strong><br />
          My favourite website is <a href="Google" target='_blank'>Google</a><br />
          My email address is <a href="myemail@gmail.com" target="_blank">myemail@gmail.com</a><br />
          <img src={logo} className="App-logo" alt="logo" />
        </p>
      </header>
      <header className='App-Header2'>
        <h1>Birds of the same Feather</h1>
        <h3>An English proverb</h3>
        <h5>It meant that people who possess common traits tend to associate<br />
          with one another and do things together</h5>
      </header>
    </div>
  );
}

export default App;
