// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import './stylesheets/navbar.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
    
      <header className="App-header">
        <Switch>
          {/* <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} /> */}
          <Route path="/about" component={About} />
          <Route path='/' component={Home} />
        </Switch>
        <Navbar></Navbar> 
      </header>
    </div>
    </Router>
  );
}

export default App;
