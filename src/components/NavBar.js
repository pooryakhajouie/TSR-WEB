import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" exact="true" onClick={toggleMenu}>Home</NavLink></li>
        <li className="dropdown">
          <NavLink to="/tsr" onClick={toggleMenu}>TSR Method</NavLink>
        </li>
        <li className="dropdown">
          <span className="dropdown-title">Other TSR-Based Methods</span>
          <ul className="dropdown-content">
            <li><NavLink to="/aa-grouping" onClick={toggleMenu}>AminoAcid Grouping TSR</NavLink></li>
            <li><NavLink to="/mirror-image" onClick={toggleMenu}>Mirror-Image TSR</NavLink></li>
            <li><NavLink to="/size-filtering" onClick={toggleMenu}>Size-Filtering TSR</NavLink></li>
            <li><NavLink to="/drug-tsr" onClick={toggleMenu}>DrugTSR</NavLink></li>
            <li><NavLink to="/sse-tsr" onClick={toggleMenu}>SSETSR</NavLink></li>
            <li><NavLink to="/cross-tsr" onClick={toggleMenu}>CrossTSR</NavLink></li>
            <li><NavLink to="/nucleotide-protein" onClick={toggleMenu}>Nucleotide-Protein TSR</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/publications" onClick={toggleMenu}>Our Publications</NavLink></li>
        <li className="dropdown">
          <span className="dropdown-title">TSR Key Analysis</span>
          <ul className="dropdown-content">
            <li><NavLink to="/people" onClick={toggleMenu}>Key to 2D Image</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Common Key</NavLink></li>
          </ul>
        </li>
        <li className="dropdown">
          <span className="dropdown-title">About Us</span>
          <ul className="dropdown-content">
            <li><NavLink to="/people" onClick={toggleMenu}>Lab Members</NavLink></li>
            <li><NavLink to="/contact" onClick={toggleMenu}>Contact Us</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
