import React from 'react';
import './TSR.css';
import size_filtering from '../images/size-filtering.png';

const SizeFiltering = () => {
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
          <h2 className='section-title'>Size Filtering TSR</h2>
          <p className='section-paragraph'>
            Protein comparison often encounters challenges when analyzing proteins of vastly different sizes. Smaller proteins may appear structurally dissimilar to larger ones simply due to the size difference, leading to underestimation of structural similarities. To address this issue, we developed the size filtering algorithm, a novel enhancement to the Triangular Spatial Relationship (TSR)-based method, designed to improve protein structure comparisons by accounting for size disparities.
          </p>
          <p className='section-paragraph'>
            The size filtering method works by calculating the MaxDist (maximum distance between Cα atoms) for all triangles in the proteins being compared. We then filter out triangles from the larger protein that exceed the MaxDist of the smaller one, effectively removing outliers that skew the similarity calculation. After filtering, a more accurate comparison is performed using Jaccard similarity, resulting in improved clustering of proteins.
          </p>
          <p className='section-paragraph'>
            Our studies demonstrated the effectiveness of this method across several protein families. For example, applying size filtering to glucocorticoid receptors led to improved clustering results, grouping proteins that were previously separated due to size differences. Similar improvements were observed with other protein families, including phosphatases and GPCRs.
          </p>
          <p className='section-paragraph'>By enhancing structural similarity measurements, size filtering offers a more refined approach to protein clustering, enabling more accurate comparisons between proteins of different sizes and uncovering deeper insights into their functional relationships.
          </p>
          <div className="protein-illustration">
            <img src={size_filtering} alt="Size Filtering Illustration Illustration" className="mirror-image" />
          </div>
        </section>

        <section id="learn-more" className="section-tsr learn-more-section">
          <h2 className="section-title">Learn More</h2>
          <p className="section-paragraph">
            For more in-depth information on the Size Filtering TSR method, please refer to the published research paper. This paper provides detailed explanations, methodology, and results that might be valuable for your research and understanding.
          </p>
          <a 
            href="https://doi.org/10.1002/prot.26215" 
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

          <h4 className="step-title">Generate Keys and Triplets with Size-Filtering</h4>
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
              TSR(data_dir, input_files, chain=chain, output_option=output_option, <strong><em>size_filter=500</em></strong>)
            </code>
          </div>
          <p>Protein chains are case-sensitive and should match the chain IDs in the PDB file. With the 'size_filter' argument, the TSR method will fiter out keys with maxDist higher that the size_filter.</p>

          <h4 className="step-title">Using a CSV File as Input with Size-Filtering</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Define the directory and CSV file path<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              <br />
              # Process the CSV input<br />
              TSR(data_dir, csv_file, output_option="keys", <strong><em>size_filter=500</em></strong>)
            </code>
          </div>
          <p>The CSV file should have two columns: one for the protein IDs and one for the corresponding chains, like the following:</p>
          <div className="table-code-block">
            <code>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>protein</th>
                      <th>chain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1GTA</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>1GTB</td>
                      <td>A</td>
                    </tr>
                    <tr>
                      <td>1LBE</td>
                      <td>A</td>
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
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset"<br />
              input_files = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              PDB_DL(input_files, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              TSR(data_dir, input_files, chain=chain, output_option="keys", <strong><em>size_filter=500</em></strong>)
            </code>
          </div>

          <h4 className="step-title">Example 2: Using CSV File for Input</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.TSR import TSR<br />
              <br />
              # Use CSV input<br />
              data_dir = "Dataset"<br />
              csv_file = "sample_details.csv"<br />
              retrieve_pdb_files(csv_file)<br />
              TSR(data_dir, csv_file, output_option="triplets", <strong><em>size_filter=500</em></strong>)
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

export default SizeFiltering;

