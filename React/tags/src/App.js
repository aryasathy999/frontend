import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Links</h1>
        <nav>
          <ul>
            {/* Link to Home section */}
            <li>
              <a href="#home">Home</a>
            </li>
            {/* Link to About section */}
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>
      {/* Content Sections */}
      <section id="home" style={{height: '100vh', backgroundColor: 'lightblue'}}>
        <h2>Home Section</h2>
        <p>Welcome to the Home Section.</p>
      </section>
      <section id="about" style={{height: '100vh', backgroundColor: 'lightgreen'}}>
        <h2>About Section</h2>
        <p>Welcome to the About Section.</p>
      </section>
    </div>
  );
}

export default App;
