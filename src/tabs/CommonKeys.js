import React from 'react';
import './TSR.css';
import commonkeys from '../images/commonkeys.png';

const CommonKeys = () => {
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
                    <h2 className="section-title">Common Keys</h2>
                    <p className="section-paragraph">
                        Lets understand common keys calculation with an example.
                        A given dataset has two protein classes: X and Y. There are three proteins—X1, X2 and X3—in Class A, whereas there are two proteins—Y1 and Y2—in Class Y. The sets of distinct TSR keys for each protein in the dataset are shown in Figure a. The key occurrences (frequencies) for each protein can be found in Figure b. Figure c shows “Specific” TSR keys of Class X and Class Y and “Common” TSR keys of the dataset. “common” TSR keys for Class X, Class Y and the dataset are illustrated in Figure d, e and f, respectively. “common” keys of the dataset are the intersection between “common” keys of Class X and “common” keys of Class Y. Figure g reveals how “Distinct_Common”, “Total_Common”, “Distinct” and “Total” keys are calculated. “specific” TSR keys for Class X and Class Y are shown in Figure h. “specific” TSR keys of Class X (Y) is a subset of “Specific” TSR keys of Class X (Y).
                    </p>
                    <div className="protein-illustration">
                        <img src={commonkeys} alt="Common Keys Illustration" className="mirror-image" />
                    </div>
                </section>

                {/* Tutorial Section with New Styles */}
                <section id="tutorial" className="section-tsr tutorial-section">
                    <h2 className="tutorial-title">Tutorial</h2>

                    {/* Installation Section */}
                    <h3 className="step-title">Installation</h3>
                    <p>To use the Common Keys package, follow the steps below to clone the repository and install the necessary dependencies:</p>
                    <ol className="tutorial-steps">
                        <li className="tutorial-step-item">
                            <span className="step-title">Clone the repository:</span>
                            <div className="code-block">
                                <code>
                                    git clone https://github.com/KrishnaRauniyar/Nucleotide_Analysis.git <br />
                                    cd Nucleotide_Analysis/common_keys_analysis
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
                    <p>Once installed, you can use the following command for common keys calculation.</p>

                    <h4 className="step-title">For common key calculation run the following command:</h4>
                    <div className="code-block">
                        <code>
                            python common_keys.py --path input_dir
                        </code>
                    </div>
                    <h4 className="step-title">For common key individual chain calculation run the following command:</h4>
                    <div className="code-block">
                        <code>
                            python common_keys_chain.py --path input_dir
                        </code>
                    </div>
                    <h4 className="step-title">For common key individual chain percentage calculation run the following command:</h4>
                    <div className="code-block">
                        <code>
                            python common_keys_percent.py --path input_dir
                        </code>
                    </div>
                    <h4 className="step-title">For common key individual chain one vs all percentage calculation run the following command:</h4>
                    <div className="code-block">
                        <code>
                            python common_keys_percent_one_vs_all.py --path input_dir
                        </code>
                    </div>
                    <p>The <strong>input_dir</strong> is a directory which holds the input triplet files. The common keys will be calculated between all the triplet files generated by the key_triplets TSR package. You can give the direct path to the key_triplet files directory in the TSR package.</p>

                    <h4 className="step-title">CSV file information as output (common_keys.csv and common_keys_chain.csv)</h4>
                    <p>
                        Files common_keys.csv and common_keys_chain.csv (chain - individual chain names) will be genrated in a following format.
                    </p>
                    <div className="code-block">
                        <code>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>fileName</th>
                                            <th>total_keys</th>
                                            <th>common_keys</th>
                                            <th>sum_common_keys_freq</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1_1TSR_E_DT</td>
                                            <td>4</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                        <tr>
                                            <td>1_2AC0_E_DC</td>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </code>
                    </div>
                    <p>File name are all the triplets files in the input_dir. We have total_keys, common_keys and sum_common_keys_freq which contains total number of keys in each triplet files, common keys in all the triplet files and sum of all the triplet keys which are common respectively. Common keys chain will produce individual chain common keys with their respective chain name.</p>
                    <h4 className="step-title">CSV file information as output (common_keys_percent_chain.csv)</h4>
                    <p>Files common_keys_percent_chain.csv (chain - individual chain names) will be genrated in a following format.</p>
                    <div className="code-block">
                        <code>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>key</th>
                                            <th>key_occurance</th>
                                            <th>total_files</th>
                                            <th>key_percent
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>45680161</td>
                                            <td>1291</td>
                                            <td>1492</td>
                                            <td>86.52</td>
                                        </tr>
                                        <tr>
                                            <td>46126751</td>
                                            <td>820</td>
                                            <td>1942</td>
                                            <td>54.95</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </code>
                    </div>
                    <p>File name are all the triplets files in the input_dir. We have key, key_occurance, total_files and key_percent which contains the key number, the key occurrence in indiviudal chains, total files in the directory and the percentage calculation for each key.</p>
                    <h4 className="step-title">CSV file information as output (common_keys_percent_one_vs_all.csv)</h4>
                    <p>A csv file common_keys_percent_one_vs_all.csv (chain - one chain names vs other chain names) will be genrated in a following format.</p>
                    <div className="code-block">
                        <code>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>key</th>
                                            <th>chain1%	</th>
                                            <th>chain2%	</th>
                                            <th>chain3%</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>45680161</td>
                                            <td>86.52</td>
                                            <td>87.88</td>
                                            <td>86.52</td>
                                        </tr>
                                        <tr>
                                            <td>46126751</td>
                                            <td>82.55</td>
                                            <td>19.42	</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </code>
                    </div>
                    <p>File name are all the triplets files in the input_dir. We have key, chain1%, chain2%, chain3% which contains the percentage of key occurrence in chain1, chain2 and chain3 respectively.</p>
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

                    <h4 className="step-title">Common Key Analysis</h4>
                    <p>We need to create an sbatch file that that runs all the common key scripts.</p>
                    <div className="code-block">
                        <code>
                            #!/bin/bash<br />
                            #SBATCH -p workq<br />
                            #SBATCH -n 64 <br />
                            #SBATCH -t 72:00:00 <br />
                            #SBATCH -A loni_tsr_4 <br />
                            #SBATCH -N 1 <br />
                            #SBATCH -J common_keys <br />
                            #SBATCH -o output_common_keys.out <br />
                            #SBATCH -e error_common_keys.err <br /><br />

                            git clone https://github.com/KrishnaRauniyar/Nucleotide_Analysis.git <br />
                            cd Nucleotide_Analysis/common_keys_analysis <br />
                            python3 -m venv myenv <br />
                            source myenv/bin/activate <br />
                            pip install --upgrade pip <br />
                            pip install -r requirements.txt <br />
                            <br /><br />
                            python3 common_keys.py --path input_dir &<br />
                            python3 common_keys_chain.py --path input_dir &<br />
                            python3 common_keys_percent.py --path input_dir &<br />
                            python3 common_keys_percent_one_vs_all.py --path input_dir &<br /><br />

                            wait

                        </code>
                    </div>
                </section>

                <section id="source-code" className="section-tsr source-code-section">
                    <h2 className="section-title">Source Code</h2>
                    <p className="section-paragraph">
                        The full source code for the Common Keys package is available on GitHub. You can explore, contribute, or fork the repository using the following link:
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

export default CommonKeys;

