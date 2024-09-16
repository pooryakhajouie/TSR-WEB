import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><NavLink to="/" exact="true">Home</NavLink></li>

        {/* TSR Method with Dropdown */}
        <li className="dropdown">
          <NavLink to="/tsr">TSR Method</NavLink>
        </li>

        {/* Other Methods with Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">Other TSR-Based Methods</span>
          <ul className="dropdown-content">
            <li><NavLink to="/drug-tsr">Drug TSR</NavLink></li>
            <li><NavLink to="/mirror-image">Mirror-Image TSR</NavLink></li>
            <li><NavLink to="/metal-ion">Metal-Ion TSR</NavLink></li>
            <li><NavLink to="/size-filtering">Size-Filtering TSR</NavLink></li>
            <li><NavLink to="/aa-grouping">AminoAcid Grouping TSR</NavLink></li>
            <li><NavLink to="/sse-tsr">SSE-TSR</NavLink></li>
          </ul>
        </li>

        <li className="dropdown">
          <NavLink to="/publications">Our Publications</NavLink>
        </li>

        {/* About Us with Dropdown */}
        <li className="dropdown">
          <span className="dropdown-title">About Us</span>
          <ul className="dropdown-content">
            <li><NavLink to="/people">Lab Members</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
