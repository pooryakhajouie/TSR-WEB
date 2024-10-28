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
      <section id="abstract" className="section-tsr abstract-section">
      <h2 className="section-title">Abstract / Description</h2>
          <p className="section-paragraph">
            {/* Insert the abstract content here. Describe the TSR method, its purpose, etc. */}
            Understanding protein functions often hinges on comparing their 3D structures.
            However, developing effective methods for such comparisons remains a significant challenge.
            Over the past four decades, approximately 200 papers have proposed various approaches, categorizing them into sequence-based, distance-based, secondary structure-based, geometry-based, and network-based comparisons.
            Each method has its strengths, but also limitations.
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
        
        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>

          {/* Installation Section */}
          <h3 className="step-title">Installation</h3>
          <p>To use the TSR package, follow the steps below to clone the repository and install the necessary dependencies:</p>
          <ol className="tutorial-steps">
            <li className="tutorial-step-item">
              <span className="step-title">Clone the repository:</span>
              <div className="code-block">
                <code>
                  git clone https://github.com/pooryakhajouie/TSR-Package.git<br />
                  cd TSR-Package
                </code>
              </div>
            </li>
            <li className="tutorial-step-item">
              <span className="step-title">Create a virtual environment and activate it:</span>
              <div className="code-block">
                <code>
                  python3 -m venv tsrenv<br />
                  source tsrenv/bin/activate  # Mac/Linux<br />
                  tsrenv\Scripts\activate  # Windows
                </code>
              </div>
            </li>
            <li className="tutorial-step-item">
              <span className="step-title">Install the required dependencies:</span>
              <div className="code-block">
                <code>pip install -r requirements.txt</code>
              </div>
            </li>
          </ol>

          {/* Usage Section */}
          <h3 className="step-title">Usage</h3>
          <p>Once installed, you can use the following steps to retrieve PDB files and generate key/triplet files.</p>

          <h4 className="step-title">Retrieve PDB Files</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.retrieve_pdb_files import retrieve_pdb_files<br />
              <br />
              # Retrieve PDB files for the specified PDB IDs<br />
              pdb_ids = ["1GTA", "1GTB", "1LBE"]<br />
              retrieve_pdb_files(pdb_ids, 'Dataset/')
            </code>
          </div>
          <p>This command will download the PDB files into the specified <strong>Dataset/</strong> directory. The default directory is also <strong>Dataset/</strong> if not provided.</p>

          <h4 className="step-title">Generate Keys and Triplets</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.generate_keys_and_triplets import TSR<br />
              <br />
              # Define the directory where PDB files are stored<br />
              data_dir = "Dataset/"<br />
              input_files = ["1GTA", "1GTB", "1LBE"]<br />
              chain = ["A", "A", "A"]  # specify chains for each PDB file<br />
              output_option = "keys"  # choose 'keys', 'triplets', or 'both'<br />
              <br />
              # Process protein data to generate key files<br />
              TSR(data_dir, input_files, chain=chain, output_option=output_option)
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file.</p>

          <h4 className="step-title">Using a CSV File as Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.generate_keys_and_triplets import TSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              <br />
              # Process the CSV input<br />
              TSR(data_dir, csv_file, output_option="keys")
            </code>
          </div>
          <p>The CSV file should have two columns: one for the protein IDs and one for the corresponding chains.</p>

          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Example 1: Retrieving PDB Files and Generating Keys</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.retrieve_pdb_files import retrieve_pdb_files<br />
              from tsr_package.tsr.generate_keys_and_triplets import TSR<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset/"<br />
              pdb_ids = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              retrieve_pdb_files(pdb_ids, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              TSR(data_dir, pdb_ids, chain=chain, output_option="keys")
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.generate_keys_and_triplets import TSR<br />
              <br />
              # Use CSV input for batch processing<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              retrieve_pdb_files(csv_file)<br />
              TSR(data_dir, csv_file, output_option="triplets")
            </code>
          </div>
        </section>
        
        <section id="source-code" className="section-tsr source-code-section">
          <h2 className="section-title">Source Code</h2>
          <p className="section-paragraph">
            The full source code for the TSR package is available on GitHub. You can explore, contribute, or fork the repository using the following link:
          </p>
          <div className="code-block">
            <code>
              <a href="https://github.com/pooryakhajouie/TSR-Package" target="_blank" rel="noopener noreferrer" className="source-code-link">
                GitHub Repository: https://github.com/pooryakhajouie/TSR-Package
              </a>
            </code>
          </div>
          <p className="section-paragraph">
            Feel free to review the README.md file for more detailed instructions, and don’t hesitate to open issues or pull requests to help improve the project.
          </p>
        </section>
      </div>
    </div>
  );
}

export default TSR;

