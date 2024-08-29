import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit">GO</button>
    </form>
  );
};

export default SearchBar;
