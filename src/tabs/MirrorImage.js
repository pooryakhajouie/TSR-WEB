import React from 'react';
import './TSR.css';
import mirror_image from '../images/mirror-image.png';

const MirrorImage = () => {
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
          <h2>Mirror-Image TSR</h2>
          <p>
          Building on the Triangular Spatial Relationship (TSR) method, we introduced the Mirror-Image TSR to address a key limitation: the inability to distinguish between triangles that are mirror images of each other. This distinction is critical, as many biological processes are stereospecific, with molecules such as enzymes and receptors showing preferences for particular geometric arrangements of atoms.
          </p>
          <p>
          The Mirror-Image TSR extends the original TSR approach by incorporating keys that account for the chirality of protein structures. Chirality refers to the geometric property where molecules, despite having the same atomic connectivity, exist as non-superimposable mirror images. This is particularly important in drug development, where enantioselectivity plays a crucial role in determining the function of pharmaceuticals.
          </p>
          <p>
          By modifying the key generation formula to include mirror-image recognition, Mirror-Image TSR can now capture the stereochemical properties of protein structures, enabling accurate discrimination between enantiomers. This enhanced capability provides greater precision in identifying dynamic structural changes and molecular recognition processes, making Mirror-Image TSR a powerful tool for analyzing stereochemistry in proteins and their interactions with ligands and drugs.
          </p>

          <div className="protein-illustration">
            <img src={mirror_image} alt="Mirror Key Illustration" className="mirror-image" />
          </div>
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

          <h4 className="step-title">Generate Keys and Triplets, and taking into account the Mirror-Image keys</h4>
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
              TSR(data_dir, input_files, chain=chain, output_option=output_option, mirror_image=True)
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file. With setting the 'mirror_image' argument to 'True', the TSR method will consider the keys and their mirror images by assigning a negative value to the mirror key.</p>

          <h4 className="step-title">Using a CSV File as Input for Mirror-Image TSR</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.generate_keys_and_triplets import TSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              <br />
              # Process the CSV input<br />
              TSR(data_dir, csv_file, output_option="keys", mirror_image=True)
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
              input_files = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              retrieve_pdb_files(input_files, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              TSR(data_dir, input_files, chain=chain, output_option="keys", mirror_image=True)
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
              TSR(data_dir, csv_file, output_option="triplets", mirror_image=True)
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

export default MirrorImage;

