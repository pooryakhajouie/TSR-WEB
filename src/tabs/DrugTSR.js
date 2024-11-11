import React from 'react';
import './TSR.css';
import drug_tsr from '../images/drug-tsr.png';

const DrugTSR = () => {
  return (
    <div className="tsr-method-page">
      <aside className="toc">
        <nav>
          <ul>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#learn-more">Learn More</a></li>
            <li><a href="#tutorial">Tutorial</a></li>
            <li><a href="#source-code">Source Code</a></li>
          </ul>
        </nav>
      </aside>
      
      <div className="content-tsr">
      <section id="abstract" className="section-tsr">
          <h2 className='section-title'>DrugTSR: Analyzing Drug-Target Interactions with TSR-based Keys</h2>
          <p className='section-paragraph'>
          DrugTSR is our advanced method for examining drug-target interactions, extending the Triangular Spatial Relationship (TSR)-based approach to provide unique insights into drug behavior and specificity. This innovative method introduces specialized TSR keys for both drug and target structures, enabling a detailed analysis of their interactions. DrugTSR makes three key contributions:
          </p>
          <p className='section-paragraph'>
          <ul>
            <li>
            <strong>3D Structure Representation for Drugs and Ligands:</strong> DrugTSR uses TSR keys to represent the 3D structures of drugs, capturing essential structural relationships. These keys facilitate the search for common substructures, allowing for the comparison of drug properties and interaction patterns.
            </li>
            <br></br>
            <li>
            <strong>Cross TSR Keys (CATOM) for Drug-Target Interactions:</strong> By creating triangles that span both drug and protein atoms, cross TSR keys quantify the structural relationship within a drug-target complex. These keys distinguish unique binding sites and reveal interactions specific to primary or off-target sites, supporting selective drug design.
            </li>
            <br></br>
            <li>
            <strong>Side Chain Representations for Amino Acids:</strong> DrugTSR includes a refined approach to represent side-chain interactions, which are crucial for drug-target binding accuracy. This improvement aids in the identification of drug binding sites while minimizing off-target effects.
            </li>
          </ul>
          </p>
          <p className='section-paragraph'>
          Our results indicate that DrugTSR can enhance clustering accuracy for drug families and predict interaction profiles across similar drugs. It enables researchers to identify specific binding patterns for drug types, with applications ranging from virtual screening to drug design. By facilitating the discovery of unique and common binding interactions, DrugTSR offers an effective computational tool for advancing precision medicine and drug discovery.
          </p>

          <div className="protein-illustration">
            <img src={drug_tsr} alt="DrugTSR Illustration" className="mirror-image" />
          </div>
        </section>

        <section id="learn-more" className="section-tsr learn-more-section">
          <h2 className="section-title">Learn More</h2>
          <p className="section-paragraph">
            For more in-depth information on the DrugTSR method, please refer to the published research paper. This paper provides detailed explanations, methodology, and results that might be valuable for your research and understanding.
          </p>
          <a 
            href="https://doi.org/10.1016/j.compbiolchem.2024.108117" 
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
              pdb_files = ['4CI2', '4ci1']<br />
              PDB_DL(pdb_files, 'Dataset')
            </code>
          </div>
          <p>This command will download the PDB files into the specified <strong>Dataset/</strong> directory. The default directory is also <strong>Dataset/</strong> if not provided.</p>

          <h4 className="step-title">Generate Keys and Triplets</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.Drug_TSR import DrugTSR<br />
              <br />
              # Define the directory where PDB files are stored<br />
              data_dir = "Dataset"<br />
              pdb_files = ['4CI2', '4ci1'] <br />
              chain=['B', 'B']  # specify chains for each PDB file<br />
              drug_name=['LVY', 'EF2'] <br />
              drug_id=['1429', '21429'] <br />
              <br />
              # Process protein data to generate key files<br />
              DrugTSR(data_dir, input_files=pdb_files, chain=chain, drug_name=drug_name, drug_id=drug_id, output_option='both')
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file. With 'aa_grouping' argument set to 'True', the Method will group amino acids together and assign a same label to each group of them.</p>

          <h4 className="step-title">Using a CSV File as Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.Drug_TSR import DrugTSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              <br />
              # Process the CSV input<br />
              DrugTSR(data_dir, input_files=csv_file, output_option='both')
            </code>
          </div>
          <p>The CSV file should have two columns: one for the protein IDs and one for the corresponding chains.</p>
          <div className="table-code-block">
            <code>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>protein</th>
                      <th>chain</th>
                      <th>drug_name</th>
                      <th>drug_id</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>5L2I</td>
                      <td>B</td>
                      <td>LVY</td>
                      <td>1429</td>
                    </tr>
                    <tr>
                      <td>5XYZ</td>
                      <td>A</td>
                      <td>LQQ</td>
                      <td>21429</td>
                    </tr>
                    <tr>
                      <td>1ABC</td>
                      <td>C</td>
                      <td>EF2</td>
                      <td>402</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </code>
          </div>

          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Example 1: Retrieving PDB Files and Generating Keys</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.Drug_TSR import DrugTSR<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset"<br />
              pdb_files = ['4CI2', '4ci1']<br />
              chain=['B', 'B']<br />
              drug_name=['LVY', 'EF2'] <br />
              drug_id=['1429', '21429'] <br />
              PDB_DL(pdb_files)<br />
              <br />
              # Step 2: Generate key files<br />
              DrugTSR(data_dir, input_files=pdb_files, chain=chain, drug_name=drug_name, drug_id=drug_id, output_option='both')
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.Drug_TSR import DrugTSR<br />
              <br />
              # Use CSV input for batch processing<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              PDB_DL(csv_file)<br />
              DrugTSR(data_dir, input_files=csv_file, output_option='both')
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

export default DrugTSR;

