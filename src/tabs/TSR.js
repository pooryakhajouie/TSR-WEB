import React from 'react';
import './TSR.css';
import proteinImage from '../images/tsr-method.png';

const TSR = () => {
  return (
    <div className="tsr-method-page">
      <aside className="toc">
        <nav>
          <ul>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#tutorial">Tutorial</a></li>
            <li><a href="#source-code">Source Code</a></li>
          </ul>
        </nav>
      </aside>
      
      <div className="content-tsr">
      <section id="abstract" className="section-tsr">
          <h2>Abstract / Description</h2>
          <p>
            Understanding protein functions often hinges on comparing their 3D structures. However, developing effective methods for such comparisons remains a significant challenge. Over the past four decades, approximately 200 papers have proposed various approaches, categorizing them into sequence-based, distance-based, secondary structure-based, geometry-based, and network-based comparisons. Each method has its strengths, but also limitations.
          </p>
          <p>
            We introduce a novel approach called the <strong>Triangular Spatial Relationship (TSR)</strong> method, which models a protein's 3D structure using triangles formed by Cα atoms as vertices. Each triangle is assigned a unique integer "key," calculated using its side lengths, angles, and vertex labels. This rule-based computation ensures that identical TSRs across proteins receive the same key, allowing us to represent protein structures as vectors of integers.
          </p>
          <p>
            Our method offers three key advantages:
          </p>
          <ul>
            <li><strong>No Structural Superimposition</strong>: By representing structures as integer vectors, we avoid the complexity of structural superimposition.</li>
            <li><strong>Efficient Shape Representation</strong>: Triangles are the simplest primitives for capturing protein shape, enabling precise substructure comparisons.</li>
            <li><strong>Comprehensive Comparison</strong>: We compare every substructure of one protein with those of another, using matching integers to identify structural similarities.</li>
          </ul>

          {/* Protein image with description */}
          <div className="protein-illustration">
            <img src={proteinImage} alt="Protein Structure Illustration" className="protein-image" />
            <div className="protein-description">
              <h3>Overview:</h3>
              <ul>
                <li><strong>Triangle Formation:</strong> Select three alpha carbon (Cα) atoms from amino acids to form a triangle.</li>
                <li><strong>Angle Calculation:</strong> Calculate the angle (θ) between the sides of the triangle. If the angle is greater than 90°, adjust it using the formula θ_Δ = 180° - θ.</li>
                <li><strong>Distance Measurement:</strong> Determine the distances between the atoms (d₁₃, d₁₂, and d₂₃), which define the sides of the triangle.</li>
                <li><strong>Key Calculation:</strong> Assign bin numbers based on the calculated angles and distances. This creates unique structural "keys" for all triplets (Cα₃), representing a part of the protein structure.</li>
                <li><strong>Label Assignment:</strong> The image provides rules for assigning labels based on the relative sizes of the triangle sides and distances. Four distinct cases are shown, each detailing how to assign labels (Label₁, Label₂, Label₃) depending on the symmetry and geometry of the triangle.</li>
              </ul>
              <h4>Rule-Based Label Assignment:</h4>
              <ul>
                <li><strong>Case 1:</strong> When the three triangle sides differ, assign labels based on the largest, smallest, and middle values.</li>
                <li><strong>Case 2 & 3:</strong> When two sides are equal and one is different, assign labels based on the distances between the atoms.</li>
                <li><strong>Case 4:</strong> When all sides are equal, labels are assigned according to the maximum distance between atoms.</li>
              </ul>
            </div>
          </div>

          <p>
            This method has already shown promise in analyzing proteases and kinases, proteins critical for cell signaling and drug targeting. Additionally, our analysis of CATH and SCOP datasets demonstrates the TSR method’s ability to distinguish between alpha helices and beta sheets. Looking ahead, this approach could evolve into a powerful tool for structural comparison akin to BLAST for sequence alignment.
          </p>
        </section>
        
        <section id="tutorial" className="section-tsr">
          <h2>Tutorial</h2>
          <p>Follow these steps to use the TSR-Based Method:</p>
          <ol>
            <li>Install the required dependencies</li>
            <li>Clone the GitHub repo</li>
            <li>Run the method with your input data</li>
            <li>Interpret the output...</li>
          </ol>
        </section>
        
        <section id="tutorial" className="section-tsr">
          <h2>Tutorial</h2>
          <p>Follow these steps to use the TSR-Based Method:</p>
          <ol>
            <li>Install the required dependencies</li>
            <li>Clone the GitHub repo</li>
            <li>Run the method with your input data</li>
            <li>Interpret the output...</li>
          </ol>
        </section>
        
        <section id="source-code" className="section-tsr">
          <h2>Source Code</h2>
          <p>
            The source code for the TSR Method is available on <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a>. Feel free to clone the repository and contribute!
          </p>
        </section>
      </div>
    </div>
  );
}

export default TSR;

