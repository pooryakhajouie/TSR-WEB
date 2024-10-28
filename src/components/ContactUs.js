import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="contact-us-container">
      <h2>Contact Us</h2>
      <div className="contact-us-content">
        {/* Left section: Google Map, Mailing, and Physical Address */}
        <div className="contact-info">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6895.86032070805!2d-92.02074419999998!3d30.21054070000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249cf31074b931%3A0x9dadf78e1b771487!2sOliver%20Hall!5e0!3m2!1sen!2sus!4v1725580363471!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="address-info">
            <p><strong>Mailing Address:</strong></p>
            <p>Oliver Hall Room 317</p>
            <p>301 East Lewis Street
            P.O. Box 43586</p>
            <p>Lafayette, LA 70504-3586</p>

            <p><strong>Physical Address:</strong></p>
            <p>School of Computing and Informatics
                Ray P. Authement College of Sciences</p>
            <p>University of Louisiana at Lafayette
            301 E. Lewis Street, Lafayette, LA 70503</p>
          </div>
        </div>

        {/* Right section: Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
