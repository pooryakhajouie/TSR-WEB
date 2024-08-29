import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import './Header.css';
import tsrLogo from '../images/tsrlogo.png'; 

const Header = ({ setActiveTab }) => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={tsrLogo} alt="TSR Logo" className="header-logo" />
        <SearchBar />
      </div>
      <NavBar setActiveTab={setActiveTab} />
    </header>
  );
};

export default Header;
