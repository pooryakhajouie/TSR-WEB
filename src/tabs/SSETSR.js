import React from 'react';
import './TSR.css';
import sse_tsr from '../images/sse-tsr.png';

const SSETSR = () => {
  return (
    <div className="tsr-method-page">
      <aside className="toc">
        <nav>
          <ul>
            <li><a href="#abstract">Abstract</a></li>
            {/* <li><a href="#learn-more">Learn More</a></li> */}
            <li><a href="#tutorial">Tutorial</a></li>
            <li><a href="#source-code">Source Code</a></li>
          </ul>
        </nav>
      </aside>
      
      <div className="content-tsr">
      <section id="abstract" className="section-tsr">
          <h2 className='section-title'>SSETSR</h2>
          <p className='section-paragraph'>
          Integration of secondary structure information with TSR (SSE-TSR) is an advanced method for protein structure analysis that integrates secondary structural information with the Triangular Spatial Relationship (TSR) framework. Traditional TSR creates triangles between Cα atoms in protein structures and assigns unique integer keys based on geometric features like distance, angle, and atom type. SSETSR builds on this by categorizing TSR keys into 18 distinct groups based on secondary structural elements such as alpha helices, beta sheets, and coils.
          </p>
          <p className='section-paragraph'>
          This enhanced approach offers a more detailed representation of protein structures, improving classification accuracy. By focusing not only on the geometric arrangement of Cα atoms but also on secondary structures, SSE-TSR ensures a richer and more robust characterization of proteins. This dual-level representation allows for efficient, alignment-free comparisons between proteins, making it possible to capture both high-level structural features and subtle substructural variations.
          </p>
          <p className='section-paragraph'>
          The method has been tested on two major protein datasets, demonstrating superior performance in classifying proteins based on structure. These results highlight SSE-TSR’s potential for advancing bioinformatics research by providing more precise and scalable tools for protein structure analysis.
          </p>
          <div className="protein-illustration">
            <img src={sse_tsr} alt="Size Filtering Illustration Illustration" className="mirror-image" />
          </div>
        </section>

        {/* <section id="learn-more" className="section-tsr learn-more-section">
          <h2 className="section-title">Learn More</h2>
          <p className="section-paragraph">
            For more in-depth information on the AminoAcid Grouping TSR method, please refer to the published research paper. This paper provides detailed explanations, methodology, and results that might be valuable for your research and understanding.
          </p>
          <a 
            href="https://doi.org/10.1016/j.compbiolchem.2021.107479" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="learn-more-button"
          >
            Read the Full Paper
          </a>
        </section> */}
        
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
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              <br />
              # Retrieve PDB files for the specified PDB IDs<br />
              pdb_ids = ["1GTA", "1GTB", "1LBE"]<br />
              PDB_DL(pdb_ids, 'Dataset/')
            </code>
          </div>
          <p>This command will download the PDB files into the specified <strong>Dataset/</strong> directory. The default directory is also <strong>Dataset/</strong> if not provided.</p>

          <h4 className="step-title">Generate Keys and Triplets with Integrated Secondary Structure Information</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.SSE_TSR import SSETSR<br />
              <br />
              # Define the directory where PDB files are stored<br />
              data_dir = "Dataset"<br />
              input_files = ["1GTA", "1GTB", "1LBE"]<br />
              chain = ["A", "A", "A"]  # specify chains for each PDB file<br />
              output_option = "keys"  # choose 'keys', 'triplets', or 'both'<br />
              <br />
              # Process protein data to generate key files<br />
              SSETSR(data_dir, input_files, chain=chain, output_option=output_option)
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file. You can also add mirror image, amino acid grouping, and size filtering arguments to the function call.</p>

          <h4 className="step-title">Using a CSV File as Input for Generating key files with their Secondary Structure Information</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.SSE_TSR import SSETSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              <br />
              # Process the CSV input<br />
              SSETSR(data_dir, csv_file, output_option="keys")
            </code>
          </div>
          <p>The CSV file should have two columns: one for the protein IDs and one for the corresponding chains.</p>

          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Example 1: Retrieving PDB Files and Generating Keys</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.SSE_TSR import SSETSR<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset"<br />
              input_files = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              PDB_DL(input_files, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              SSETSR(data_dir, input_files, chain=chain, output_option="keys")
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.SSE_TSR import SSETSR<br />
              <br />
              # Use CSV input for batch processing<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              PDB_DL(csv_file)<br />
              SSETSR(data_dir, csv_file, output_option="triplets")
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

export default SSETSR;

