import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/people" className="footer-section">
        <h3>People</h3>
        <p>Information about the team and contributors.</p>
      </Link>
      <Link to="/community" className="footer-section">
        <h3>Community</h3>
        <p>Join our community and connect with others.</p>
      </Link>
      <Link to="/source-code" className="footer-section">
        <h3>Source Code</h3>
        <p>Find our source code on GitHub and contribute.</p>
      </Link>
      <Link to="/problems" className="footer-section">
        <h3>Problems</h3>
        <p>Report issues or request new features.</p>
      </Link>
    </footer>
  );
};

export default Footer;
