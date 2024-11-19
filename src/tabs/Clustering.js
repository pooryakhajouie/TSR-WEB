import React from 'react';
import './TSR.css';
import clusteringImage from '../images/cluster.jpg';

const Clustering = () => {
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
          <h2 className="section-title">Hierarchical Clustering</h2>
          <p className="section-paragraph">
            Hierarchical Clustering is a method of clustering that organizes data into a tree-like structure, often visualized as a dendrogram. This approach creates nested groups that reveal patterns and relationships at multiple levels, making it a popular choice for exploratory data analysis, especially when the data structure is complex or hierarchical in nature.          </p>
          <p>
            The clustering process begins by treating each data point as its own cluster. The algorithm then iteratively merges pairs of clusters that are most similar, based on a distance metric, until all points form a single large cluster. This bottom-up approach is called agglomerative hierarchical clustering. In contrast, divisive hierarchical clustering starts with one big cluster and splits it down into smaller ones.          </p>
          <p>
            Hierarchical Clustering provides a flexible, interpretable view of data, as the clusters can be examined at different levels of granularity. This adaptability makes it well-suited for applications in fields like biology (e.g., phylogenetic analysis), text mining, and image segmentation, where a multi-level analysis of relationships among data points is valuable.          </p>
            <div className="protein-illustration">
            <img src={clusteringImage} alt="Clustering Image Illustration" className="mirror-image" />
          </div>
        </section>

        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>

          {/* Installation Section */}
          <h3 className="step-title">Installation</h3>
          <p>To use the Hierarchical Clustering TSR, follow the steps below to clone the repository and install the necessary dependencies:</p>
          <ol className="tutorial-steps">
            <li className="tutorial-step-item">
              <span className="step-title">Clone the repository:</span>
              <div className="code-block">
                <code>
                  git clone https://github.com/KrishnaRauniyar/Kinases-and-Phosphatases-Clustering.git<br />
                  cd Kinases-and-Phosphatases-Clustering/clustermap
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
          <p>Once installed, you can use the following command to create the Hierarchical Clustering.</p>

          <h4 className="step-title">Generate Hierarchical Clustering</h4>
          <div className="code-block">
            <code>
              python clustermap_n.py -p (jaccard input csv file) -n (number of clusters)
            </code>
          </div>
          <p>This command will generate Hierarchical Clustering from Jaccard Similarity CSV file input. Number of clusters is a feature to generate how may clusters you want.</p>

          <h4 className="step-title">Jaccard Similarity should have the following format.</h4>
          <div className="code-block">
            <code>
              <div className="table-container">
                <table>
                  <tbody>
                    <tr>
                      <td>2R92_P_10_A;</td>
                      <td>0.000,</td>
                      <td>0.704,</td>
                      <td>0.740,</td>
                      <td>0.555,</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>2R92_P_11_C;</td>
                      <td>0.704,</td>
                      <td>0.000,</td>
                      <td>0.668,</td>
                      <td>0.719,</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>2R92_P_12_C;</td>
                      <td>0.740,</td>
                      <td>0.668,</td>
                      <td>0.000,</td>
                      <td>0.757,</td>
                      <td>...</td>
                    </tr>
                    <tr>
                      <td>2R92_P_13_A;</td>
                      <td>0.555,</td>
                      <td>0.719,</td>
                      <td>0.757,</td>
                      <td>0.000,</td>
                      <td>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </code>
          </div>

          <p>The CSV input file contains the Jaccard Similarity. To generate the Hierarchical Clustering you must have the same input format for the input file as shown in the table above.</p>

          <h4 className="step-title">Results</h4>
          <p>Two files will be generated:
            <ul>
              <li><strong>clustermap.png </strong>(This is the clustermap created with n number of cluster color)</li>
              <li><strong>clustermap.csv </strong>(This contains the number of clusters separated by n clusters in each row)</li>
            </ul>
          </p>
        </section>

        <section id="source-code" className="section-tsr source-code-section">
          <h2 className="section-title">Source Code</h2>
          <p className="section-paragraph">
            The full source code for the Hierarchical Clustering is available on GitHub. You can explore, contribute, or fork the repository using the following link:
          </p>
          <div className="code-block">
            <code>
              <a href="https://github.com/KrishnaRauniyar/Kinases-and-Phosphatases-Clustering.git" target="_blank" rel="noopener noreferrer" className="source-code-link">
                GitHub Repository: https://github.com/KrishnaRauniyar/Kinases-and-Phosphatases-Clustering.git
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

export default Clustering;

