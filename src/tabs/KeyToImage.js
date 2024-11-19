import React from 'react';
import './TSR.css';
import keytoimage from '../images/1AUA_0.png';

const KeyToImage = () => {
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
          <h2 className='section-title'>Triplets Visualization Method</h2>
          <p className='section-paragraph'>
          Proteins are complex molecules that can contain an immense amount of structural information. To analyze and interpret such data efficiently, our method compresses large protein triplet data files (often up to 1 GB) into highly compact, interpretable 2D images. These images provide a visual representation of the protein’s structural features, enabling researchers to quickly identify patterns, anomalies, or other critical insights.
          </p>
          <h3 className='section-subtitle'>Advantages</h3>
          <p className='section-paragraph'>
          <ul>
            <li>
            <strong>Data Compression:</strong> Reduces gigabytes of triplet data into small-sized images without significant loss of information.
            </li>
            <li>
            <strong>Pattern Recognition:</strong> Simplifies the detection of structural patterns and relationships that might be challenging to identify in raw data.
            </li>
            <li>
            <strong>Efficient Processing:</strong> Utilizes parallel processing to handle large datasets quickly, saving time for researchers.
            </li>
            <li>
            <strong>Interoperability:</strong> Outputs in .png format can be easily integrated with machine learning models or shared across teams.
            </li>
            <li>
            <strong>Visual Insights:</strong> The produced images enable an intuitive understanding of protein features, aiding both computational and experimental studies.
            </li>
          </ul>
          </p>
          <h3 className='section-subtitle'>Applications</h3>
          <p className='section-paragraph'>
          <ul>
            <li>
            <strong>Protein Classification:</strong> Visual patterns can help differentiate protein families or types.
            </li>
            <li>
            <strong>Drug Discovery:</strong> The compact representation facilitates screening and analysis of large protein datasets in drug design pipelines.
            </li>
            <li>
            <strong>Anomaly Detection:</strong> Quickly identifies deviations in structural properties, which may indicate errors or novel phenomena.
            </li>
          </ul>
          </p>

          <div className="protein-illustration">
            <img src={keytoimage} alt="Triplet illustration" className="mirror-image" />
          </div>
        </section>

        {/* <section id="learn-more" className="section-tsr learn-more-section">
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
          <p>Once installed, you can use our TSR method to generate triplet files, and then use those triplet files to create the images.</p>

          <h4 className="step-title">Create images out of triplet files</h4>
          <div className="code-block">
            <code>
                from tsr_package.tsr.Key_To_Image import KeyToImage<br />
                <br />
                input_folder = "sample_data/"  # Replace with the actual path to your input folder<br />
                extension = ".triplets_29_35"              # File extension for the triplet files<br />
                csv_location = "35by44grid.csv"   # Replace with the path to your 35by44grid.csv file<br />
                output_folder = "images/"  # Replace with the desired output folder path<br />
                <br />
                # Call the function to process the triplets and generate the .image and .png files<br />
                KeyToImage(input_folder, extension, csv_location, output_folder)
            </code>
          </div>
          <p>Remember that you need to include <strong>35by44grid.csv</strong> in your directory.</p>

          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Full example of generating triplets and creating images</h4>
          <div className="code-block">
            <code>
              from tsr_package.tsr.PDB_DL import PDB_DL<br />
              from tsr_package.tsr.TSR import TSR<br />
              from tsr_package.tsr.Key_To_Image import KeyToImage<br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset"<br />
              pdb_ids = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              PDB_DL(pdb_ids, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              TSR(data_dir, pdb_ids, chain=chain, output_option="keys")<br />
              <br />
              # Step 3: Create images<br />
              input_folder = "Dataset/lexicographic/" <br />
              extension = ".triplets_29_35"  <br />
              csv_location = "35by44grid.csv"  <br />
              output_folder = "images/"  <br />
              <br />
              KeyToImage(input_folder, extension, csv_location, output_folder)
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

export default KeyToImage;

