import React from 'react';
import './TSR.css';
import dnnImage from '../images/deep.png';

const Dnn = () => {
  const commandStyle = {
    marginRight: '10px', // Space between command and comment
    fontWeight: 'bold'   // Optional: Make the command part bold for clarity
  };

  const commentStyle = {
    fontStyle: 'italic',
    color: '#888'  // Light gray color for the comment
  };

  // Style for the wrapper to align command and comment
  const lineStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px' // Space between lines
  };
  return (
    <div className="tsr-method-page">
      <aside className="toc">
        <nav>
          <ul>
            <li><a href="#abstract">Abstract</a></li>
            <li><a href="#tutorial">Tutorial</a></li>
            <li><a href="#slurm">Slurm Guide</a></li>
            <li><a href="#source-code">Source Code</a></li>
          </ul>
        </nav>
      </aside>

      <nav class="mobile-top-nav">
        <ul>
          <li><a href="#abstract">Abstract</a></li>
          <li><a href="#tutorial">Tutorial</a></li>
          <li><a href="#slurm">Slurm Guide</a></li>
          <li><a href="#source-code">Source Code</a></li>
        </ul>
      </nav>

      <div className="content-tsr">
        <section id="abstract" className="section-tsr abstract-section">
          <h2 className="section-title">Deep Neural Network</h2>
          <p className="section-paragraph">
            A Deep Neural Network (DNN) is a powerful machine learning model inspired by the structure of the human brain. It consists of multiple layers of interconnected nodes (neurons) that process and transform data to uncover complex patterns and relationships. DNNs are widely used in tasks like image recognition, natural language processing, and medical diagnostics, delivering state-of-the-art accuracy by learning hierarchical features from large datasets. Their versatility and scalability make them a cornerstone of modern artificial intelligence. </p>
          <p>
            Our DNN architecture includes:
          </p>
          <ul>
            <li>An input layer with <strong>128 neurons</strong>.</li>
            <li>
              Four hidden layers with <strong>64, 32, 16,</strong> and <strong>8 neurons</strong>, respectively, each using the <strong>ReLU</strong> activation function.
            </li>
            <li>
              <strong>L2 regularization</strong> (0.01) used in all four hidden layers to prevent overfitting.
            </li>
            <li>
              An output layer with <strong>8 neurons</strong>, corresponding to the seven groups, using the <strong>softmax</strong> activation function.
            </li>
          </ul>
          <div className="protein-illustration">
            <img src={dnnImage} alt="Dnn Image Illustration" className="mirror-image" />
          </div>
        </section>

        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>

          {/* Installation Section */}
          <h3 className="step-title">Installation</h3>
          <p>To use Deep Neural Network, follow the steps below to clone the repository and install the necessary dependencies:</p>
          <ol className="tutorial-steps">
            <li className="tutorial-step-item">
              <span className="step-title">Clone the repository:</span>
              <div className="code-block">
                <code>
                  git clone https://github.com/KrishnaRauniyar/Nucleotide_Analysis.git<br />
                  cd Nucleotide_Analysis/dnn
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
              <span className="step-title">Install the required dependencies:</span>
              <div className="code-block">
                <code>pip install -r requirements.txt</code>
              </div>
            </li>
          </ol>

          {/* Usage Section */}
          <h3 className="step-title">Usage</h3>
          <p>Once installed, you can use the following command run the dnn model.</p>
          <h4 className="step-title">Generate Key Frequency File</h4>
          <p>First, you need to generate a frequency file that will create the input CSV for the DNN model, the key frequency files can be created from the triplets file which we create from the Nuclotide section (<a href='https://github.com/KrishnaRauniyar/TSR_NUCLEOTIDE_PACKAGE.git'><i>https://github.com/KrishnaRauniyar/TSR_NUCLEOTIDE_PACKAGE.git</i></a>). We just need to specify the acutual directory path of the triplets keys. Use the following command to generate the input file:</p>
          <div className="code-block">
            <code>python key_frequency_drug.py -p triplets_directory -H yes</code>
          </div>
          <h4 className="step-title">Parameters:</h4>
          <ul>
            <li>
              -p: Path to the directory containing protein files
            </li>
            <li>
              -H: Set to 'yes' to include headers in the output CSV
            </li>
          </ul>
          <p>This will generate an input CSV file with the frequency of triplet keys for each protein.</p>

          <h4 className="step-title">Input file format (input_csv_file.csv)</h4>
          <div className="code-block">
            <code>
              <div className="table-container">
                <table>
                  <tbody>
                    <tr>
                      <td>Protein</td>
                      <td>key1</td>
                      <td>key2</td>
                      <td>key3</td>
                    </tr>
                    <tr>
                      <td>4NGF_H_15_U</td>
                      <td>4</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                    <tr>
                      <td>5VM9_D_3_A</td>
                      <td>1</td>
                      <td>5</td>
                      <td>9</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </code>
          </div>

          <p>Here key1, key2 and key3 are the triplets keys in the respective protein. Based on this input file we can perform dnn analysis and make prdiction. The code is able to generate accuracy plot, loss plot and confusion matrix which are important for model accuracy and prediction analysis.</p>
          <h4 className="step-title">Run Deep Neural Network Model</h4>
          <div className="code-block">
            <code>
              python drug_model.py -p input_csv_file
            </code>
          </div>
          <p>The input_csv_file is a csv file that contains all the features as the keys and their respective frequency or occurrence in certain protein file.</p>

          <h4 className="step-title">Results</h4>
          <p>Three files will be generated:
            <ul>
              <li><strong>accuracy_plot.png </strong>(This is the accuracy plot of the dnn model.)</li>
              <li><strong>loss_plot.csv </strong>(This is the loss plot of the dnn model.)</li>
              <li><strong>confusion_matrix.csv </strong>(This is the confusion matrix of the dnn model.)</li>
            </ul>
          </p>
        </section>

        {/* Slurm Guide Section with New Styles */}
        <section id="slurm" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Slurm Guide</h2>

          <p>A basic Slurm script to submit a job looks like this:</p>

          <h4 className="step-title">Slurm Script</h4>
          <div className="code-block">
            <code>
              <p style={lineStyle}>
                <span style={commandStyle}>#SBATCH --job-name=my_hpc_job</span>
                <span style={commentStyle}># Job name</span>
              </p>
              <p style={lineStyle}>
                <span style={commandStyle}>#SBATCH --output=result.out</span>
                <span style={commentStyle}># Standard output file</span>
              </p>
              <p style={lineStyle}>
                <span style={commandStyle}>#SBATCH --error=result.err</span>
                <span style={commentStyle}># Standard error file</span>
              </p>
              <p style={lineStyle}>
                <span style={commandStyle}>#SBATCH --ntasks=4</span>
                <span style={commentStyle}># Number of tasks (e.g., processes)</span>
              </p>
              <p style={lineStyle}>
                <span style={commandStyle}>#SBATCH --time=01:00:00</span>
                <span style={commentStyle}># Maximum runtime (HH:MM:SS)</span>
              </p>
              <p style={lineStyle}>
                <span style={commandStyle}>#SBATCH --partition=general</span>
                <span style={commentStyle}># Partition (queue) name</span>
              </p>
              <p style={lineStyle}>
                <span style={commandStyle}>python batch_script.py</span>
                <span style={commentStyle}># The python script file to run.</span>
              </p>
            </code>
          </div>
          <h4 className="step-title">Run the batch file</h4>
          <div className="code-block">
            <code>
              sbatch batch_file.sbatch
            </code>
          </div>
          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Deep Neural Network</h4>
          <p>We need to create an sbatch file that that run the dnn script.</p>
          <div className="code-block">
            <code>
              #!/bin/bash<br />
              #SBATCH -p workq<br />
              #SBATCH -n 64 <br />
              #SBATCH -t 72:00:00 <br />
              #SBATCH -A loni_tsr_4 <br />
              #SBATCH -N 1 <br />
              #SBATCH -J dnn <br />
              #SBATCH -o output_dnn.out <br />
              #SBATCH -e error_dnn.err <br /><br />

              git clone https://github.com/KrishnaRauniyar/Nucleotide_Analysis.git <br />
              cd Nucleotide_Analysis/dnn <br />
              python3 -m venv myenv <br />
              source myenv/bin/activate <br />
              pip install --upgrade pip <br />
              pip install -r requirements.txt <br />
              <br /><br />
              python3 key_frequency_drug.py -p triplets_directory -H yes && \ <br />
              python3 drug_model.py -p localFeatureVect_theta29_dist18_NoFeatureSelection_keyCombine0_header.csv<br />
            </code>
          </div>
        </section>

        <section id="source-code" className="section-tsr source-code-section">
          <h2 className="section-title">Source Code</h2>
          <p className="section-paragraph">
            The full source code for the DNN model is available on GitHub. You can explore, contribute, or fork the repository using the following link:
          </p>
          <div className="code-block">
            <code>
              <a href="https://github.com/KrishnaRauniyar/Nucleotide_Analysis.git" target="_blank" rel="noopener noreferrer" className="source-code-link">
                GitHub Repository: https://github.com/KrishnaRauniyar/Nucleotide_Analysis.git
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

export default Dnn;

