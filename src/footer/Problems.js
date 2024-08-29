import React, { useState } from 'react';
import './Problems.css';

const Problems = () => {
  const [problem, setProblem] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the problem and email data to your backend or handle it in any other way
    console.log(`Problem: ${problem}\nEmail: ${email}`);
    // Reset the form fields after submission
    setProblem('');
    setEmail('');
    // Show success message
    setSubmitted(true);
  };

  return (
    <div className="problems-page">
      <div className="future-enhancement">
        <h1>Future Enhancements</h1>
        <p>In some future enhancement, we are working on...
            we are working in more things that are in the past done 
        </p>
      </div>
      <div className="form-container">
        <h1>Problems</h1>
        <h2>Report issues or request new features</h2>
        <form onSubmit={handleSubmit} className="problem-form">
          <textarea
            placeholder="Describe the problem or request new feature..."
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            required
          ></textarea>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        {submitted && (
          <p className="success-message">Thank you for your submission! We will be in touch with you soon.</p>
        )}
        <p className="contact-info">For further assistance, contact us at <a href="mailto:contact@louisiana.edu">contact@louisiana.edu</a>.</p>
      </div>
    </div>
  );
};

export default Problems;
