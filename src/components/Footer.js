// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <Link to="/people" className="footer-section">
//         <h3>People</h3>
//         <p>Information about the team and contributors.</p>
//       </Link>
//       <Link to="/community" className="footer-section">
//         <h3>Community</h3>
//         <p>Join our community and connect with others.</p>
//       </Link>
//       <Link to="/source-code" className="footer-section">
//         <h3>Source Code</h3>
//         <p>Find our source code on GitHub and contribute.</p>
//       </Link>
//       <Link to="/problems" className="footer-section">
//         <h3>Problems</h3>
//         <p>Report issues or request new features.</p>
//       </Link>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/people" className="footer-section">
          <h3>People</h3>
          <p>Meet our team and contributors.</p>
        </Link>
        <Link to="/community" className="footer-section">
          <h3>Community</h3>
          <p>Join and connect with our community.</p>
        </Link>
        <Link to="/source-code" className="footer-section">
          <h3>Source Code</h3>
          <p>View and contribute to our GitHub repository.</p>
        </Link>
        <Link to="/problems" className="footer-section">
          <h3>Report Issues</h3>
          <p>Submit bug reports or request new features.</p>
        </Link>
      </div>

      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p>Oliver Hall Room 317</p>

        <p>301 East Lewis Street P.O. Box 43586</p>

        <p>Lafayette, LA 70504-3586</p>
        
        <p>Email: <a href="mailto:contact@ourlab.com">contact@ourlab.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;
