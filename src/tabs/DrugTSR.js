import React from 'react';
import './TSR.css';

const DrugTSR = () => {
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
          <h2>Drug TSR Method</h2>
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

export default DrugTSR;

