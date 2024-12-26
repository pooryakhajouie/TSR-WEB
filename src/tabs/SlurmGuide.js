import React from "react";

const SlurmGuide = () => {
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
            <li><a href="#abstract">Introduction</a></li>
            <li><a href="#tutorial">Tutorial with example</a></li>
          </ul>
        </nav>
      </aside>

      <div className="content-tsr">
        <section id="abstract" className="section-tsr abstract-section">
          <h2 className="section-title">HPC Slurm Servers</h2>
          <p className="section-paragraph">
            {/* Insert the abstract content here. Describe the TSR method, its purpose, etc. */}
            <strong>SLURM</strong> (Simple Linux Utility for Resource Management) is a highly scalable and widely used workload manager designed for High-Performance Computing (HPC) environments. It is responsible for scheduling, managing, and allocating computing resources across multiple nodes in an HPC cluster.</p>
          <h3>Common Slurm Commands</h3>
          <ul>
            <li><strong>sbatch</strong>: Submit a batch job script for scheduling.</li>
            <li><strong>salloc</strong>: Allocate resources for an interactive session.</li>
            <li><strong>srun</strong>: Launch parallel tasks using allocated resources.</li>
            <li><strong>squeue</strong>: Display the status of jobs in the scheduling queue.</li>
            <li><strong>scancel</strong>: Cancel a specific job.</li>
            <li><strong>sinfo</strong>: Show information about nodes and partitions in the cluster.</li>
          </ul>
        </section>

        {/* Tutorial Section with New Styles */}
        <section id="tutorial" className="section-tsr tutorial-section">
          <h2 className="tutorial-title">Tutorial</h2>
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
            </code>
          </div>

          <h4 className="step-title">Run the batch file</h4>
          <div className="code-block">
            <code>
              python batch_script.py
            </code>
          </div>
          {/* Example Section */}
          <h3 className="step-title">Examples</h3>

          <h4 className="step-title">Downloading PDB files and generating key triplets using sbatch.</h4>
          <p>First we need to make a python script file that downloads the pbd files and then generates keys and triplets.</p>
          <div className="code-block">
            <code>
              from aminoacid_tsr_package.PDB_DL import PDB_DL
              <br />
              from aminoacid_tsr_package.AminoAcid import AminoAcidProteinTSR
              <br />
              <br />
              # Step 1: Retrieve PDB files<br />
              data_dir = "Dataset/"<br />
              pdb_ids = ["1GTA", "1gtb", "1lbe"]<br />
              chain = ["A", "A", "A"]<br />
              PDB_DL(pdb_ids, data_dir)<br />
              <br />
              # Step 2: Generate key files<br />
              AminoAcidProteinTSR(data_dir, pdb_ids, chain=chain, output_option="keys", mirror_image=True) # Modify the output option as desired
            </code>

          </div>
          <p>Second we need to create an sbatch file that downloads the pbd files and then generates keys and triplets.</p>
          <div className="code-block">
            <code>
              #!/bin/bash<br />
              #SBATCH -p workq<br />
              #SBATCH -n 64 <br />
              #SBATCH -t 72:00:00 <br />
              #SBATCH -A loni_tsr_4 <br />
              #SBATCH -N 1 <br />
              #SBATCH -J pdb <br />
              #SBATCH -o output_pdb.out <br />
              #SBATCH -e error_pdb.err <br /><br />

              git clone https://github.com/KrishnaRauniyar/TSR_AMINOACID_PACKAGE.git <br />
              cd TSR_AMINOACID_PACKAGE <br />
              python3 -m venv myenv <br />
              source myenv/bin/activate <br />
              pip install --upgrade pip <br />
              pip install -e . <br />
              pip install -r requirements.txt <br />
              cd aminoacid_tsr_package
              <br /><br />
              python3 (actual path to python script)<br />

            </code>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SlurmGuide;
