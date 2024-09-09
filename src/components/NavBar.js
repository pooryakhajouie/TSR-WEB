import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    // <nav className="navbar">
    //   <ul>
    //     <li><Link to="/tsr">TSR</Link></li>
    //     <li><Link to="/proteins">Proteins</Link></li>
    //     <li><Link to="/ligands">Ligands</Link></li>
    //     <li><Link to="/drug-protein">Drug-Protein</Link></li>
    //     <li><Link to="/protein-protein">Protein-Protein</Link></li>
    //     <li><Link to="/neudeotide">Neudeotide</Link></li>
    //     <li><Link to="/neudeotide-protein">Neudeotide-Protein</Link></li>
    //   </ul>
    // </nav>
    <nav className="navbar">
    <ul className="navbar-menu">
      <li><NavLink to="/" exact="true">Home</NavLink></li>

      {/* TSR Method with Dropdown */}
      <li className="dropdown">
        <NavLink to="/tsr">TSR Method</NavLink>
        <ul className="dropdown-content">
          <li><NavLink to="/tsr/source-code">Source Code</NavLink></li>
          <li><NavLink to="/tsr/tutorial">Tutorial</NavLink></li>
          <li><NavLink to="/tsr/abstract">Abstract</NavLink></li>
        </ul>
      </li>

      {/* Other Methods with Dropdown */}
      <li className="dropdown">
        <NavLink to="/other-method">Other Projects</NavLink>
        <ul className="dropdown-content">
          {/* Add items dynamically if needed */}
          <li><NavLink to="/other-method/project1">SSE-TSR</NavLink></li>
          <li><NavLink to="/other-method/project1">Drug Development</NavLink></li>
        </ul>
      </li>

      {/* About Us with Dropdown */}
      <li className="dropdown">
        <NavLink to="/about">About Us</NavLink>
        <ul className="dropdown-content">
          <li><NavLink to="/people">Lab Members</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
          <li><NavLink to="/about/cite-us">Cite Us</NavLink></li>
        </ul>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;


