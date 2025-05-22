import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function NavigationBar(){
  return(
    <nav className="navbar">
        
        <ul className = "nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
    </nav>


  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
         
        <div>
           <NavigationBar/>
            <header>Zachary Ahmad</header>
            <h1>welcome to my app</h1>
            <MyButton/>
            

        </div>
        
      </header>
    </div>
  );
}

export default App;

