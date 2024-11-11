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
      <h2 className="section-title">Triangular Spatial Relationship (TSR)</h2>
          <p className="section-paragraph">
            {/* Insert the abstract content here. Describe the TSR method, its purpose, etc. */}
            The Triangular Spatial Relationship (TSR) method is an innovative approach for comparing 3D protein structures, designed to overcome the limitations of existing structural comparison techniques. By representing protein structures using a set of unique integers called "keys," TSR provides a comprehensive and efficient way to analyze structural similarities and substructures without needing superimposition or complex alignment.
          </p>
          <h3 className='section-title'>Method Overview</h3>
          <h4 className='section-subtitle'>Key Generation Process</h4>
          <p className='section-paragraph'>
          <ul>
            <li>
              <strong>Cα Atom Selection:</strong> TSR begins by selecting Cα atoms from the protein's PDB file as vertices for triangle construction.
            </li>
            <li>
              <strong>Triangle Construction:</strong> All possible triangles formed by these Cα atoms are generated, with their edge lengths and internal angles calculated.
            </li>
            <li>
              <strong>Label Assignment:</strong> Each Cα is assigned an integer identifier (ranging from 4 to 23), which uniquely represents the amino acid. This ensures that identical triangles across different proteins are assigned the same integer identifiers.
            </li>
            <li>
              <strong>Key Calculation:</strong> The identifiers for each triangle are transformed to create labels (li1, li2, li3). Using a rule-based formula, distances and specific angles are determined, which are then used in equations to generate the unique integer key for each triangle.
            </li>
          </ul>
          </p>
          <p className='section-paragraph'>
            <h4 className='section-subtitle'>Unique Features</h4>
            <ul>
              <li>
                <strong>No Structural Superimposition:</strong> TSR avoids rotation and translation issues, unlike RMSD-based methods, enabling more consistent structural comparison.
              </li>
              <li>
                <strong>Shape Representation:</strong> By using triangles—the simplest form to capture shape—TSR effectively identifies local substructures.
              </li>
              <li>
                <strong>Amino Acid Integration:</strong> The inclusion of amino acid information ensures that triangles with the same geometric properties but different amino acids are assigned different keys.
              </li>
              <li>
                <strong>Motif Discovery:</strong> TSR allows for the discovery of shared substructures, from simple triangles to complex motifs, by identifying connected triangles through shared vertices or edges.
              </li>
            </ul>
          </p>
          <h4 className='section-subtitle'>Applications</h4>
          <p className='section-paragraph'>
          <ul>
            <li>
              <strong>Structural Comparison:</strong> TSR quantifies protein similarity based on the number of identical keys, providing insight into protein relationships.
            </li>
            <li>
              <strong>Motif Search:</strong> Capable of identifying unique and conserved motifs across protein families.
            </li>
            <li>
              <strong>Conformational Analysis:</strong> TSR can capture protein conformational changes and differentiate between homologous and non-homologous structures.
            </li>
          </ul>
          </p>

          {/* Protein image with description */}
          <div className="protein-illustration">
            <img src={proteinImage} alt="Protein Structure Illustration" className="protein-image" />
          </div>
        </section>

        {/* Learn More Section */}
        <section id="learn-more" className="section-tsr learn-more-section">
          <h2 className="section-title">Learn More</h2>
          <p className="section-paragraph">
            For more in-depth information on the TSR method, please refer to the published research paper. This paper provides detailed explanations, methodology, and results that might be valuable for your research and understanding.
          </p>
          <a 
            href="https://doi.org/10.3389/fchem.2020.602291" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="learn-more-button"
          >
            Read the Full Paper
          </a>
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
              <span className="step-title">Installing the Package:</span>
              <div className="code-block">
                <code>
                  pip install .<br />
                </code>
              </div>
              <p>Alternatively, you can install the package from the built wheel, but first, you should build the distribution files:</p>
              <div className="code-block">
                <code>
                  python setup.py sdist bdist_wheel<br />
                  pip install dist/tsr_package-0.1.1-py3-none-any.whl
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
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              <br />
              # Retrieve PDB files for the specified PDB IDs<br />
              pdb_ids = ["1GTA", "1GTB", "1LBE"]<br />
              PDB_DL(pdb_ids, 'Dataset')
            </code>
          </div>
          <p>This command will download the PDB files into the specified <strong>Dataset/</strong> directory. The default directory is also <strong>Dataset/</strong> if not provided.</p>

          <h4 className="step-title">Generate Keys and Triplets</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Define the directory where PDB files are stored<br />
              data_dir = "Dataset"<br />
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
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset"<br />
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
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset"<br />
              pdb_ids = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              PDB_DL(pdb_ids, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              TSR(data_dir, pdb_ids, chain=chain, output_option="keys")
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Use CSV input for batch processing<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              PDB_DL(csv_file)<br />
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

