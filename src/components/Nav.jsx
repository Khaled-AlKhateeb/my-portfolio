import React from "react";
import '../styles/Nav.css';

const Nav = () => {
  return <div className="nav-container">
      <a href="#language" className="nav-btn">Languages</a>
      <a href="#frameworks" className="nav-btn">Framworks</a>
      <a href="#tools" className="nav-btn">Tools & Tech</a>
  </div>
}

export default Nav;