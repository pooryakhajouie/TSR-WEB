import React from 'react';
import './TSR.css';
import proteinImage from '../images/tsr-method.png';

const NucleotideProtein = () => {
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

      <div className="content-tsr">
        <section id="abstract" className="section-tsr abstract-section">
          <h2 className="section-title">Nucleotide-Protein TSR</h2>
          <p className="section-paragraph">
            The CrossKeys tool provides precise computational analysis of drug-protein interactions by focusing on specific residues, enhancing insight into molecular bonding and affinity across drug discovery and protein research. This calculation module considers key nucleotide and protein residues, essential for studying the biochemical dynamics that influence therapeutic efficacy and specificity.
          </p>
          <p>
            <strong>Nucleotide Residues: </strong>Our analysis includes eight core nucleotides commonly found in both RNA and DNA structures:
          </p>
          <ul>
            <li><strong>RNA Nucleotides</strong>: G (Guanine), A (Adenine), C (Cytosine), U (Uracil)</li>
            <li><strong>DNA Nucleotides</strong>: DG (Deoxyguanine), DA (Deoxyadenine), DC (Deoxycytosine), DT (Thymine)</li>
          </ul>
          <p>
            <strong>Protein Residues: </strong>The CrossKeys calculation supports 23 essential protein residues, representing a range of chemical properties:
          </p>
          <ul>
            <li><strong>Nonpolar (Hydrophobic)</strong>: GLY (Glycine), ALA (Alanine), VAL (Valine), LEU (Leucine), ILE (Isoleucine), PRO (Proline), PHE (Phenylalanine), TYR (Tyrosine), TRP (Tryptophan)</li>
            <li><strong>Polar (Uncharged)</strong>: SER (Serine), THR (Threonine), MET (Methionine), CYS (Cysteine), HIS (Histidine), ASN (Asparagine), GLN (Glutamine)</li>
            <li><strong>Positively Charged (Basic)</strong>: LYS (Lysine), ARG (Arginine)</li>
            <li><strong>Negatively Charged (Acidic)</strong>: ASP (Aspartic Acid), GLU (Glutamic Acid)</li>
            <li><strong>Modified Residues for Post-Translational Modifications</strong>: TPO (Phosphothreonine), SEP (Phosphoserine), PTR (Phosphotyrosine)</li>
          </ul>
          <p>These residues are strategically selected to provide comprehensive interaction insights, particularly suited for applications in structural biology, computational biochemistry, and targeted drug design. CrossKeys calculations empower researchers to predict and analyze residue interactions, facilitating the discovery of critical patterns in nucleotide-protein binding mechanisms.</p>
        </section>

        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>

          {/* Installation Section */}
          <h3 className="step-title">Installation</h3>
          <p>To use the Nucleotide-Protein TSR package, follow the steps below to clone the repository and install the necessary dependencies:</p>
          <ol className="tutorial-steps">
            <li className="tutorial-step-item">
              <span className="step-title">Clone the repository:</span>
              <div className="code-block">
                <code>
                  git clone https://github.com/KrishnaRauniyar/Nucleotide-Protein.git<br />
                  cd Nucleotide-Protein
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
          <p>Once installed, you can use the following command to generate keys and triplets files.</p>

          <h4 className="step-title">Generate Cross Key Input File</h4>
          <p>First, use <i>drug_protein_3A.py</i> to calculate interactions between drugs and proteins within 3 Angstroms. It will generate a csv file which will be the input for the cross key generation.</p>
          <div className="code-block">
            <code>python drug_protein_3A.py -p pdb_download_path -c input_file.csv -l drug_atom_lexical_txt.csv -o drug_protein_cross.csv</code>
          </div>
          <h4 className="step-title">Required input files:</h4>
          <ul>
            <li>
              <strong>input_file.csv:</strong> Contains list of protein names (For example - sample_details_p53_dna.csv)
            </li>
            <li>
              <strong>drug_atom_lexical_txt.csv:</strong> Contains atom sequence numbers
            </li>
          </ul>
          <h4 className="step-title">Required input files:</h4>
          <ol>
            <li>Create directory 'pdb_download_path' if it doesn't exist</li>
            <li>Download PDB files from RCSB.org</li>
            <li>Calculate interactions within 3 Angstroms</li>
            <li>Generate drug_protein_cross.csv with interaction details</li>
          </ol>
          <h4 className="step-title">CSV file information as input (drug_protein_cross.csv)</h4>
          <div className="code-block">
            <code>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Drug</th>
                      <th>Drug Sequence</th>
                      <th>Drug Coordinates</th>
                      <th>Protein</th>
                      <th>Protein Sequence</th>
                      <th>Protein Coordinates</th>
                      <th>Distance (Å)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>3D0A_E_DC_1_O5'</td>
                      <td>109</td>
                      <td>-3.283, 17.038, 0.965</td>
                      <td>3D0A_A_SER_121_O</td>
                      <td>109</td>
                      <td>-2.462, 18.759, 2.734</td>
                      <td>2.6</td>
                    </tr>
                    <tr>
                      <td>3D0A_E_DC_1_C5'</td>
                      <td>106</td>
                      <td>-3.710, 17.876, -0.156</td>
                      <td>3D0A_A_SER_121_O</td>
                      <td>109</td>
                      <td>-2.462, 18.759, 2.734</td>
                      <td>3.3</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </code>
          </div>

          <p>The csv input file includes information for both Nucleotide (drug) and Protein. The first three columns contains the drug name, drug sequence number, and X, Y, Z coordinates and the following three columns contains the protein name, protein sequence number, and X, Y, Z coordinates and the last columns is the distance between these drug and protein. You can find the csv file in the github link below.</p>

          <h4 className="step-title">Generate Keys and Triplets</h4>
          <p>After generating the drug_protein_cross.csv file, use <i>cross_key.py</i> to generate keys and triplet files:</p>
          <div className="code-block">
            <code>python cross_key.py -p drug_protein_cross.csv -o output_dir</code>
          </div>

          <h4 className="step-title">Results</h4>
          <p>The analysis produces two types of results:</p>
          <h2 className="step-title">Drug-Protein Interactions (drug_protein_3A.py)</h2>
          <ul>
            <li>Generates drug_protein_cross.csv containing all interactions within 3 Angstroms</li>
            <li>Includes detailed atomic information and distances for each interaction</li>
          </ul>
          <h2 className="step-title">CrossKeys (cross_key.py)</h2>
          <p>CrossKeys and triplets will be generated between:
            <ul>
              <li><strong>One drug and two protein atoms</strong></li>
              <li><strong>Two drug and one protein atoms</strong></li>
            </ul>
          </p>
          <p>The results will be stored in output_dir as:
            <ul>
              <li>filename.keys_Freq_theta29_dist18 (1_1TSR_E_DT.keys_Freq_theta29_dist18): It will store the frequency triplets</li>
              <li>filename.keys_theta29_dist18 (1_1TSR_E_DT.keys_theta29_dist18): It will store the keys information</li>
            </ul>
          </p>
          <p>If their are less atoms than 3 then no cross keys will be generated and the terminal will output error message like the example below:
            <ul>
              <li>Cannot make keys for 46_3TS8_L_DT having only 2 atoms.</li>
              <li>Cannot make keys for 9_7B4G_B_DC having only 2 atoms.</li>
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

          <h4 className="step-title">Cross Key Generation</h4>
          <p>We need to create an sbatch file that that run the cross key generation.</p>
          <div className="code-block">
            <code>
              #!/bin/bash<br />
              #SBATCH -p workq<br />
              #SBATCH -n 64 <br />
              #SBATCH -t 72:00:00 <br />
              #SBATCH -A loni_tsr_4 <br />
              #SBATCH -N 1 <br />
              #SBATCH -J cross_key <br />
              #SBATCH -o output_cross_key.out <br />
              #SBATCH -e error_cross_key.err <br /><br />

              git clone https://github.com/KrishnaRauniyar/Nucleotide-Protein.git <br />
              cd Nucleotide-Protein <br />
              python3 -m venv myenv <br />
              source myenv/bin/activate <br />
              pip install --upgrade pip <br />
              pip install -r requirements.txt <br />
              <br /><br />
              python3 drug_protein_3A.py -p pdb_downloaded -c sample_details_p53_dna.csv -l drug_atom_lexical_txt.csv -o drug_protein_cross.csv && \<br />
              python3 cross_key.py -p drug_protein_cross.csv -o cross_key_results
            </code>
          </div>
        </section>

        <section id="source-code" className="section-tsr source-code-section">
          <h2 className="section-title">Source Code</h2>
          <p className="section-paragraph">
            The full source code for the Nucleotide-Protein TSR package is available on GitHub. You can explore, contribute, or fork the repository using the following link:
          </p>
          <div className="code-block">
            <code>
              <a href="https://github.com/KrishnaRauniyar/Nucleotide-Protein.git" target="_blank" rel="noopener noreferrer" className="source-code-link">
                GitHub Repository: https://github.com/KrishnaRauniyar/Nucleotide-Protein.git
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

export default NucleotideProtein;

