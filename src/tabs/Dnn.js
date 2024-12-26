import React from 'react';
import './TSR.css';
import dnnImage from '../images/deep.png';

const Dnn = () => {
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
                  cd dnn
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
          <p>Once installed, you can use the following command run the dnn model.</p>

          <h4 className="step-title">Deep Neural Network</h4>
          <div className="code-block">
            <code>
              python drug_model.py -p input_csv_file
            </code>
          </div>
          <p>The input_csv_file is a csv file that contains all the features as the keys and their respective frequency or occurrence in certain protein file.</p>

          <h4 className="step-title">Input file format.</h4>
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

          <h4 className="step-title">Results</h4>
          <p>Three files will be generated:
            <ul>
              <li><strong>accuracy_plot.png </strong>(This is the accuracy plot of the dnn model.)</li>
              <li><strong>loss_plot.csv </strong>(This is the loss plot of the dnn model.)</li>
              <li><strong>confusion_matrix.csv </strong>(This is the confusion matrix of the dnn model.)</li>
            </ul>
          </p>
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

