// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import './NavBar.css';

// const NavBar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen((prev) => !prev);
//   };

//   return (
//     <nav className="navbar">
//       <div className="menu-toggle" onClick={toggleMenu}>
//         ☰
//       </div>
//       <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
//         <li><NavLink to="/" exact="true">Home</NavLink></li>
//         <li className="dropdown">
//           <NavLink to="/tsr">TSR Method</NavLink>
//         </li>
//         <li className="dropdown">
//           <span className="dropdown-title">Other TSR-Based Methods</span>
//           <ul className="dropdown-content">
//             <li><NavLink to="/aa-grouping">AminoAcid Grouping TSR</NavLink></li>
//             <li><NavLink to="/mirror-image">Mirror-Image TSR</NavLink></li>
//             <li><NavLink to="/size-filtering">Size-Filtering TSR</NavLink></li>
//             <li><NavLink to="/drug-tsr">DrugTSR</NavLink></li>
//             <li><NavLink to="/sse-tsr">SSETSR</NavLink></li>
//             <li><NavLink to="/cross-tsr">CrossTSR</NavLink></li>
//             <li><NavLink to="/nucleotide-protein">Nucleotide-Protein TSR</NavLink></li>
//           </ul>
//         </li>
//         <li><NavLink to="/publications">Our Publications</NavLink></li>
//         <li className="dropdown">
//           <span className="dropdown-title">TSR Key Analysis</span>
//           <ul className="dropdown-content">
//             <li><NavLink to="/people">Key to 2D Image</NavLink></li>
//             <li><NavLink to="/contact">Common Key</NavLink></li>
//           </ul>
//         </li>
//         <li className="dropdown">
//           <span className="dropdown-title">About Us</span>
//           <ul className="dropdown-content">
//             <li><NavLink to="/people">Lab Members</NavLink></li>
//             <li><NavLink to="/contact">Contact Us</NavLink></li>
//           </ul>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((isMenuOpen) => !isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Clean up the event listener on component unmount or when menu is closed
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" exact="true">Home</NavLink></li>
        <li className="dropdown">
          <NavLink to="/tsr">TSR Method</NavLink>
        </li>
        <li className="dropdown">
          <span className="dropdown-title">Other TSR-Based Methods</span>
          <ul className="dropdown-content">
            <li><NavLink to="/aa-grouping">AminoAcid Grouping TSR</NavLink></li>
            <li><NavLink to="/mirror-image">Mirror-Image TSR</NavLink></li>
            <li><NavLink to="/size-filtering">Size-Filtering TSR</NavLink></li>
            <li><NavLink to="/drug-tsr">DrugTSR</NavLink></li>
            <li><NavLink to="/sse-tsr">SSETSR</NavLink></li>
            <li><NavLink to="/cross-tsr">CrossTSR</NavLink></li>
            <li><NavLink to="/nucleotide-protein">Nucleotide-Protein TSR</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/publications">Our Publications</NavLink></li>
        <li className="dropdown">
          <span className="dropdown-title">TSR Key Analysis</span>
          <ul className="dropdown-content">
            <li><NavLink to="/people">Key to 2D Image</NavLink></li>
            <li><NavLink to="/contact">Common Key</NavLink></li>
          </ul>
        </li>
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
