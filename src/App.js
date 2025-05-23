import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contacts';
import Projects from './Projects';
import About from './About'


function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/About">About</Link></li>

        
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <div className="titleCard">
      <h2>Zachary Ahmad's Personal Website!</h2>
      <img id="careerfair" src="profess.png" alt="Me at the Career Fair" />
      <h3>Hello my name is Zach</h3>
      <p>I'm a passionate Computer Science student who loves building software, solving problems, and exploring new technologies. 
    Outside of coding, I enjoy music, working out, video games, and spending time with friends and family.</p>
    <p>Currently I am persuing my Bachelors Degree in Computer Science at Iowa State University where I will begin my Senior year coming up in August!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />



        </Routes>

        


      </div>
    </Router>
  );
}

export default App;
