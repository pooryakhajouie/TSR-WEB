import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Innovating Protein Structure Analysis</h1>
          <p>Pioneering computational approaches to quantify structural similarities between proteins.</p>
          <div className="cta-buttons">
            <button className="cta-button">Explore Our Methods</button>
            <button className="cta-button">Learn More About TSR Method</button>
          </div>
        </div>
      </section>

      {/* Introduction to Our Lab Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h2>Welcome to Our Lab</h2>
          <p>
            Our lab is dedicated to advancing the field of protein structure analysis through innovative computational methods. We specialize in developing tools that allow researchers to compare and quantify the similarity between protein structures with unparalleled precision.
          </p>
          <p>
            Our flagship research tool, the TSR-based method, leverages triangular spatial relationships to accurately model and compare protein structures. This novel approach offers significant advancements in structural biology, facilitating breakthroughs in drug discovery, molecular biology, and beyond.
          </p>
          <button className="cta-button">Meet Our Lab Members</button>
        </div>
      </section>

      {/* TSR-Based Method Overview Section */}
      <section className="tsr-method-section">
        <div className="tsr-method-content">
          <h2>Overview of the TSR-Based Method</h2>
          <p>
            The TSR-Based Method is an innovative approach to protein structure analysis. By modeling the 3D structure of proteins using triangular spatial relationships (TSRs) among Cα atoms, we assign a unique integer "key" to each triangle. These keys are computed based on the lengths, angles, and vertex labels of the triangles, ensuring that identical TSRs across different proteins receive the same key. This method allows for accurate quantification of structural similarities between proteins by comparing the number of matching keys.
          </p>
          <div className="tsr-illustration-placeholder">
            <p>Illustration coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
