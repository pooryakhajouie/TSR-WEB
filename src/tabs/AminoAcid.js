import React from 'react';
import './TSR.css';
import proteinImage from '../images/tsr-method.png';

const AminoAcid = () => {
  return (
    <div className="tsr-method-page">
      <aside className="toc">
        <nav>
          <ul>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#tutorial">Tutorial</a></li>
            <li><a href="#source-code">Source Code</a></li>
            <li><a href="/slurm-guide">Slurm Guide</a></li>
          </ul>
        </nav>
      </aside>

      <div className="content-tsr">
        <section id="abstract" className="section-tsr abstract-section">
          <h2 className="section-title">AminoAcid TSR</h2>
          <p className="section-paragraph">
            {/* Insert the abstract content here. Describe the TSR method, its purpose, etc. */}
            The key triplets generation code for amino acid proteins leverages detailed filtering criteria based on amino acid chain identities and specific sequence lengths to identify key structural patterns. By predefining exact length requirements for each amino acid type, this tool selectively includes only those triplets that meet the specified conditions, which are as follows:</p>
          <ul>
            <li><strong>GLY (Glycine)</strong>: Length 4</li>
            <li><strong>ALA (Alanine)</strong>: Length 5</li>
            <li><strong>VAL (Valine)</strong>: Length 7</li>
            <li><strong>PRO (Proline), THR (Threonine)</strong>: Length 7</li>
            <li><strong>SER (Serine), CYS (Cysteine)</strong>: Length 6</li>
            <li><strong>PHE (Phenylalanine), ARG (Arginine), TPO (Phosphothreonine)</strong>: Length 11</li>
            <li><strong>TYR (Tyrosine)</strong>: Length 12</li>
            <li><strong>TRP (Tryptophan)</strong>: Length 14</li>
            <li><strong>HIS (Histidine), SEP (Phosphoserine)</strong>: Length 10</li>
            <li><strong>LYS (Lysine), GLU (Glutamic Acid), GLN (Glutamine)</strong>: Length 9</li>
            <li><strong>PTR (Phosphotyrosine)</strong>: Length 16</li>
            <li><strong>LEU (Leucine), ILE (Isoleucine), MET (Methionine), ASP (Aspartic Acid), ASN (Asparagine)</strong>: Length 8</li>
          </ul>
          <p>
            These precise conditions ensure that only relevant sequences are processed, facilitating accurate identification of structural motifs and functional characteristics within protein chains. This capability is essential for computational biology, bioinformatics, and protein research, where detailed triplet-level analysis aids in uncovering significant interactions and structural relationships.          </p>
        </section>

        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>

          {/* Installation Section */}
          <h3 className="step-title">Installation</h3>
          <p>To use the AminoAcid TSR package, follow the steps below to clone the repository and install the necessary dependencies:</p>
          <ol className="tutorial-steps">
            <li className="tutorial-step-item">
              <span className="step-title">Clone the repository:</span>
              <div className="code-block">
                <code>
                  git clone https://github.com/KrishnaRauniyar/TSR_AMINOACID_PACKAGE.git<br />
                  cd TSR_AMINOACID_PACKAGE
                </code>
              </div>
            </li>
            <li className="tutorial-step-item">
              <span className="step-title">Create a virtual environment and activate it:</span>
              <div className="code-block">
                <code>
                  python -m venv tsrenv<br />
                  source tsrenv/bin/activate  # Mac/Linux<br />
                  tsrenv\Scripts\activate  # Windows
                </code>
              </div>
            </li>
            <li className="tutorial-step-item">
              <span className="step-title">Installing the Package:</span>
              <div className="code-block">
                <code>
                  pip install -e .<br />
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
            <li className="tutorial-step-item">
              <span className="step-title">Go to aminoacid_tsr_package directory</span>
              <div className="code-block">
                <code>cd aminoacid_tsr_package</code>
              </div>
            </li>
          </ol>

          {/* Usage Section */}
          <h3 className="step-title">Usage</h3>
          <p>Once installed, you can use the following steps to retrieve PDB files and generate key/triplet files.</p>

          <h4 className="step-title">Retrieve PDB Files</h4>
          <div className="code-block">
            <code>
              from aminoacid_tsr_package.PDB_DL import PDB_DL
              <br />
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
              from aminoacid_tsr_package.AminoAcid import AminoAcidProteinTSR
              <br />
              <br />
              # Define the directory where PDB files are stored<br />
              data_dir = "Dataset/"<br />
              input_files = ["1GTA", "1GTB", "1LBE"]<br />
              chain = ["A", "A", "A"]  # specify chains for each PDB file<br />
              output_option = "keys"  # choose 'keys', 'triplets', or 'both'<br />
              # mirror_image is an optional argument. Set to True if you want the TSR to address for the mirror image triangles. <br />
              <br />
              # Process protein data to generate key files<br />
              AminoAcidProteinTSR(data_dir, input_files, chain=chain, output_option=output_option, mirror_image=True)
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file.</p>

          <h4 className="step-title">Using a CSV File as Input</h4>
          <div className="code-block">
            <code>
              from aminoacid_tsr_package.AminoAcid import AminoAcidProteinTSR
              <br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              # mirror_image is an optional argument. Set to True if you want the TSR to address for the mirror image triangles.<br />
              <br />
              # Process the CSV input<br />
              AminoAcidProteinTSR(data_dir, csv_file, output_option="keys", mirror_image=True)
            </code>
          </div>
          <p>The CSV file should have two columns: one for the protein IDs and one for the corresponding chains.</p>

          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Example 1: Retrieving PDB Files and Generating Keys</h4>
          <div className="code-block">
            <code>
              from aminoacid_tsr_package.PDB_DL import PDB_DL
              <br />
              from aminoacid_tsr_package.AminoAcid import AminoAcidProteinTSR
              <br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset/"<br />
              pdb_ids = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              retrieve_pdb_files(pdb_ids, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              AminoAcidProteinTSR(data_dir, pdb_ids, chain=chain, output_option="keys", mirror_image=True) # Modify the output option as desired
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from aminoacid_tsr_package.PDB_DL import PDB_DL
              <br />
              from aminoacid_tsr_package.AminoAcid import AminoAcidProteinTSR
              <br />
              <br />
              # Use CSV input for batch processing<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              retrieve_pdb_files(csv_file, data_dir)<br />
              AminoAcidProteinTSR(data_dir, csv_file, output_option="triplets", mirror_image=True)              </code>
          </div>
        </section>

        <section id="source-code" className="section-tsr source-code-section">
          <h2 className="section-title">Source Code</h2>
          <p className="section-paragraph">
            The full source code for the AminoAcid TSR package is available on GitHub. You can explore, contribute, or fork the repository using the following link:
          </p>
          <div className="code-block">
            <code>
              <a href="https://github.com/KrishnaRauniyar/TSR_AMINOACID_PACKAGE.git" target="_blank" rel="noopener noreferrer" className="source-code-link">
                GitHub Repository: https://github.com/KrishnaRauniyar/TSR_AMINOACID_PACKAGE.git
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

export default AminoAcid;

