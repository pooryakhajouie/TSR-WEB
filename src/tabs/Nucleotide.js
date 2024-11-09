import React from 'react';
import './TSR.css';
import proteinImage from '../images/tsr-method.png';

const Nucleotide = () => {
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
      <h2 className="section-title">Nucleotide TSR</h2>
          <p className="section-paragraph">
            {/* Insert the abstract content here. Describe the TSR method, its purpose, etc. */}
            In our computational work, we’ve applied a specialized code to filter and analyze nucleotide residues, specifically focusing on those with exactly eight nucleotide residues. Nucleotides, the building blocks of DNA and RNA, consist of a sugar, phosphate group, and a nitrogenous base, and they play a crucial role in encoding genetic information and facilitating various biological processes.
          </p>
          <p>
            Our code enables efficient filtering to isolate sequences with precisely eight nucleotide residues, allowing for targeted analysis and deeper insights into structural and functional aspects of nucleotides. This precision is especially valuable in computational biology and bioinformatics, where residue-specific studies provide a pathway to understanding molecular interactions and drug design.
          </p>
          <p>
            Each type has a specific expected residue length, which we use as a filtering criterion to ensure accurate data processing.
          </p>
          <ul>
            <li><strong>Guanine ("G")</strong>: Guanine is a purine base found in both DNA and RNA, forming complementary pairs with cytosine. For our purposes, sequences with this chain identity have a length of 23 residues.</li>
            <li><strong>Adenine ("A")</strong>: Adenine is another purine base, pairing with thymine in DNA and uracil in RNA. Sequences with adenine have a length of 22 residues in our analysis.</li>
            <li><strong>Cytosine ("C")</strong>: Cytosine is a pyrimidine base that pairs with guanine in both DNA and RNA. In our filter, cytosine chains are expected to contain 20 residues.</li>
            <li><strong>Uracil ("U")</strong>: Uracil is a unique pyrimidine base found only in RNA, where it pairs with adenine. Our analysis recognizes uracil sequences with 20 residues.</li>
            <li><strong>Deoxyguanosine ("DG")</strong>: Deoxyguanosine is the DNA-specific form of guanine, with an expected residue length of 22. This is used to distinguish DNA strands from RNA in our filtering process.</li>
            <li><strong>Deoxyadenosine ("DA")</strong>: Deoxyadenosine is the DNA counterpart of adenine, with a typical length of 21 residues.</li>
            <li><strong>Deoxycytosine ("DC")</strong>: Deoxycytosine is the DNA-specific form of cytosine, with a shorter expected length of 19 residues.</li>
            <li><strong>Deoxythymidine ("DT")</strong>: Thymine’s counterpart in DNA, deoxythymidine (often simply called thymidine) pairs with adenine. Our process filters these sequences at 20 residues.</li>
          </ul>
          <p>
            In this method we create the keys and triplets of the Nucleotide with all the eight residue types, and we can also create mirror images using an argument shown in the tutorial below.
          </p>
        </section>
        
        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>

          {/* Installation Section */}
          <h3 className="step-title">Installation</h3>
          <p>To use the Nucleotide TSR package, follow the steps below to clone the repository and install the necessary dependencies:</p>
          <ol className="tutorial-steps">
            <li className="tutorial-step-item">
              <span className="step-title">Clone the repository:</span>
              <div className="code-block">
                <code>
                  git clone https://github.com/KrishnaRauniyar/TSR_NUCLEOTIDE_PACKAGE.git<br />
                  cd TSR_NUCLEOTIDE_PACKAGE
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
              from nucleotide_tsr_package.tsr.retrieve_pdb_files import retrieve_pdb_files<br />
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
              from nucleotide_tsr_package.tsr.generate_keys_and_triplets import NucleotideTSR<br />
              <br />
              # Define the directory where PDB files are stored<br />
              data_dir = "Dataset/"<br />
              input_files = ["1GTA", "1GTB", "1LBE"]<br />
              chain = ["A", "A", "A"]  # specify chains for each PDB file<br />
              output_option = "keys"  # choose 'keys', 'triplets', or 'both'<br />
              mirror_image: "True" # Optional argument. Set to True if you want the TSR to address for the mirror image triangles. <br />
              <br />
              # Process protein data to generate key files<br />
              NucleotideTSR(data_dir, input_files, chain=chain, output_option=output_option, mirror_image=mirror_image)
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file.</p>

          <h4 className="step-title">Using a CSV File as Input</h4>
          <div className="code-block">
            <code>
              from nucleotide_tsr_package.tsr.generate_keys_and_triplets import NucleotideTSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              mirror_image: "True"<br />
              <br />
              # Process the CSV input<br />
              NucleotideTSR(data_dir, csv_file, output_option="keys", mirror_image=mirror_image)
            </code>
          </div>
          <p>The CSV file should have two columns: one for the protein IDs and one for the corresponding chains.</p>

          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Example 1: Retrieving PDB Files and Generating Keys</h4>
          <div className="code-block">
            <code>
              from nucleotide_tsr_package.tsr.retrieve_pdb_files import retrieve_pdb_files<br />
              from nucleotide_tsr_package.tsr.generate_keys_and_triplets import NucleotideTSR<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset/"<br />
              pdb_ids = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              mirror_image: "True"<br />
              retrieve_pdb_files(pdb_ids, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              NucleotideTSR(data_dir, pdb_ids, chain=chain, output_option="keys", mirror_image=mirror_image)
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from nucleotide_tsr_package.tsr.retrieve_pdb_files import retrieve_pdb_files<br />
              from nucleotide_tsr_package.tsr.generate_keys_and_triplets import NucleotideTSR<br />
              <br />
              # Use CSV input for batch processing<br />
              data_dir = "Dataset/"<br />
              csv_file = "sample_details.csv"<br />
              mirror_image: "True"<br />
              retrieve_pdb_files(csv_file, data_dir)<br />
              NucleotideTSR(data_dir, csv_file, output_option="triplets", mirror_image=mirror_image)
            </code>
          </div>
        </section>
        
        <section id="source-code" className="section-tsr source-code-section">
          <h2 className="section-title">Source Code</h2>
          <p className="section-paragraph">
            The full source code for the Nucleotide TSR package is available on GitHub. You can explore, contribute, or fork the repository using the following link:
          </p>
          <div className="code-block">
            <code>
              <a href="https://github.com/KrishnaRauniyar/TSR_NUCLEOTIDE_PACKAGE.git" target="_blank" rel="noopener noreferrer" className="source-code-link">
                GitHub Repository: https://github.com/KrishnaRauniyar/TSR_NUCLEOTIDE_PACKAGE
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

export default Nucleotide;

