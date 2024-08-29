import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/tsr">TSR</Link></li>
        <li><Link to="/proteins">Proteins</Link></li>
        <li><Link to="/ligands">Ligands</Link></li>
        <li><Link to="/drug-protein">Drug-Protein</Link></li>
        <li><Link to="/protein-protein">Protein-Protein</Link></li>
        <li><Link to="/neudeotide">Neudeotide</Link></li>
        <li><Link to="/neudeotide-protein">Neudeotide-Protein</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;


