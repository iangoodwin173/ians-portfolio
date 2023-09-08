import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/navbar.css';

function Navbar() {
  return (
    <nav className="nav nav-tabs">
      <ul className="navbar-links">
        <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
        <li className="nav-item">
          <Link to="/about">About Me</Link>
        </li>
        <li className="nav-item">
            <Link to="/projects">My Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
      </ul>
    </nav>
  );
}
export default Navbar;
