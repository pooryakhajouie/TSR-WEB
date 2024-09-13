import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import illustration from '/Users/C00527662/Desktop/TSR-WEB/src/images/tsr-home.png';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Innovating Protein Structure Analysis</h1>
          <p>Pioneering computational approaches to quantify structural similarities between proteins.</p>
          <div className="cta-buttons">
            <NavLink to="/tsr">
              <button className="cta-button">Learn More About TSR Method</button>
            </NavLink>
            <button className="cta-button">Explore Other TSR-Based Methods</button>
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
          <NavLink to="/people">
            <button className="cta-button">Meet Our Lab Members</button>
          </NavLink>
        </div>
      </section>

      {/* TSR-Based Method Overview Section */}
      <section className="tsr-method-section">
        <div className="tsr-method-content">
          <h2>Overview of the TSR Method</h2>
          <p>
            The TSR-Based Method is an innovative approach to protein structure analysis. By modeling the 3D structure of proteins using triangular spatial relationships (TSRs) among Cα atoms, we assign a unique integer "key" to each triangle. These keys are computed based on the lengths, angles, and vertex labels of the triangles, ensuring that identical TSRs across different proteins receive the same key. This method allows for accurate quantification of structural similarities between proteins by comparing the number of matching keys.
          </p>
          {/* Replace placeholder with actual image */}
          <div className="tsr-illustration">
            <img src={illustration} alt="TSR-Based Method Illustration" />
          </div>
        </div>
      </section>

      {/* Research Projects and Methods Section */}
      <section className="research-projects-section">
        <h2>Research Projects and Methods</h2>
        <p>
          Our lab is focused on developing and refining various scientific methods
          that drive forward research in our field. Below are some of the key
          methods we're currently working on.
        </p>
        <div className="research-buttons">
          <NavLink to="/other-method/item1" className="cta-button">SSE-TSR</NavLink>
          <NavLink to="/other-method/item2" className="cta-button">Drug Development</NavLink>
          {/* More buttons can be added as more methods are developed */}
        </div>
      </section>

      {/* Latest News/Research Publications Section */}
      <section className="publications-section">
        <h2>Latest Research Publications</h2>
        <p>
          Stay updated with our lab's latest research findings and news. Below are
          some of our recent publications and updates.
        </p>
        
        <div className="publications-list">
          <div className="publication-item">
            <h3>Development of a TSR-Based Method for Protein 3-D Structural Comparison With Its Applications to Protein Classification and Motif Discovery</h3>
            <p>
            developed a novel method where the 3-D structure of a protein is modeled using the concept of Triangular Spatial Relationship (TSR)
            </p>
            <a href="https://www.frontiersin.org/journals/chemistry/articles/10.3389/fchem.2020.602291/full" className="publication-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="publication-item">
            <h3>Development of a novel representation of drug 3D structures and enhancement of the TSR-based method for probing drug and target interactions</h3>
            <p>
                A new approach to representing ligand and drug 3D structures is introduced and evaluated
            </p>
            <a href="https://www.sciencedirect.com/science/article/pii/S1476927124001051" className="publication-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <div className="publication-item">
            <h3>Introducing mirror-image discrimination capability to the TSR-based method for capturing stereo geometry and understanding hierarchical structure relationships of protein receptor family</h3>
            <p>
                Mirror-image discrimination capability is introduced into the Triangular Spatial Relationship (TSR)-based key generation formula to capture stereo geometry
            </p>
            <a href="https://www.sciencedirect.com/science/article/pii/S1476927123000154" className="publication-link" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
          <NavLink to="/publications" className="cta-button">See All Publications</NavLink>
        </div>
      </section>

      {/* Call to Action (Contact Us) Section */}
      <section className="cta-section">
        <h2>Ready to Collaborate?</h2>
        <p>If you're interested in learning more about our research or want to work with us, we'd love to hear from you.</p>
        <NavLink to="/contact" className="cta-button">Contact Us</NavLink>
      </section>
    </div>
  );
};

export default Home;
