import React from 'react';
import './Publications.css';

const publicationsData = [
  {
    title: 'Development of a novel representation of drug 3D structures and enhancement of the TSR-based method for probing drug and target interactions',
    authors: 'Tarikul I. Milon, Yuhong Wang, Ryan L. Fontenot, Poorya Khajouie, Francois Villinger, Vijay Raghavan, Wu Xu',
    conference: 'Computational Biology and Chemistry',
    year: 2024,
    abstract: 'A new approach to representing ligand and drug 3D structures is introduced and evaluated. A novel algorithm calculating cross TSR keys is developed for enabling comparisons of drug/ligand - target complexes. The results demonstrate the capability of the TSR-based method to interpret hierarchical relationships of drugs and drug - target complexes.',
    link: 'https://doi.org/10.1016/j.compbiolchem.2024.108117',
  },
  {
    title: 'Introducing mirror-image discrimination capability to the TSR-based method for capturing stereo geometry and understanding hierarchical structure relationships of protein receptor family',
    authors: 'Titli Sarkar, Yuwu Chen, Yu Wang, Yixin Chen, Feng Chen, Camille R. Reaux, Laura E. Moore, Vijay Raghavan, Wu Xu',
    conference: 'Computational Biology and Chemistry',
    year: 2023,
    abstract: 'Mirror-image discrimination capability is introduced into the Triangular Spatial Relationship (TSR)-based key generation formula to capture stereo geometry. Applying mirror images decreases structural similarity which can be partially explained by the observation of a decrease in common keys. For a hierarchically organized structure dataset, applying mirror images enhances the opportunity to discover specific keys that exclusively belong to certain types of proteins.',
    link: 'https://doi.org/10.1016/j.compbiolchem.2023.107824',
  },
  {
    title: 'The specific applications of the TSR-based method in identifying Zn2+ binding sites of proteases and ACE/ACE2',
    authors: 'Titli Sarkar, Camille R. Reaux, Jianxiong Li, Vijay V. Raghavan, Wu Xu',
    conference: 'Data in Brief',
    year: 2022,
    abstract: 'We have developed an alignment-free TSR (Triangular Spatial Relationship)-based computational method for protein structural comparison and motif identification and discovery. The dataset and data presented here include additional information that help the readers become aware of specific applications of the TSR-based method in protein clustering.',
    link: 'https://doi.org/10.1016/j.dib.2022.108629',
  },
  {
    title: 'A study of a hierarchical structure of proteins and ligand binding sites of receptors using the triangular spatial relationship-based structure comparison method and development of a size-filtering feature designed for comparing different sizes of protein structures',
    authors: 'Sarika Kondra, Feng Chen, Yixin Chen, Yuwu Chen, Caleb J. Collette, Wu Xu',
    conference: 'Data in Brief',
    year: 2021,
    abstract: 'We propose amino-acid scoring matrices that capture “evolutionary closeness” information based on BLOSUM62 matrix, and present the development of a new visualization method where keys are organized according to evolutionary closeness and shown in a 2D image.',
    link: 'https://doi.org/10.1002/prot.26215',
  },
  {
    title: 'Exploring the effectiveness of the TSR-based protein 3-D structural comparison method for protein clustering, and structural motif identification and discovery of protein kinases, hydrolases, and SARS-CoV-2’s protein via the application of amino acid grouping',
    authors: 'Titli Sarkar, Vijay V. Raghavan, Feng Chen, Andrew Riley, Sophia Zhou, Wu Xu',
    conference: 'Computational Biology and Chemistry',
    year: 2021,
    abstract: 'Exploring the effectiveness of the TSR-based method for protein clustering and structural motif identification via amino acid grouping. We have classified the keys into the different categories for better understanding of protein structure relations. Applying amino acid grouping to the TSR-based method modestly improves the accuracy of protein clustering in certain cases.',
    link: 'https://doi.org/10.1016/j.compbiolchem.2021.107479',
  },
  {
    title: 'Development of a TSR-Based Method for Protein 3-D Structural Comparison With Its Applications to Protein Classification and Motif Discovery',
    authors: 'Sarika Kondra, Titli Sarkar, Vijay Raghavan, Wu Xu',
    conference: 'Frontiers in Chemistry',
    year: 2021,
    abstract: 'We have developed a novel method where the 3-D structure of a protein is modeled using the concept of Triangular Spatial Relationship (TSR), where triangles are constructed with the Cα atoms of a protein as vertices. Every triangle is represented using an integer, which we denote as “key,” A key is computed using the length, angle, and vertex labels based on a rule-based formula, which ensures assignment of the same key to identical TSRs across proteins.',
    link: 'https://doi.org/10.3389/fchem.2020.602291',
  }
];

const Publications = () => {
  return (
    <div className="publications-page">
      <h1 className='publication-heading'>Our Publications</h1>
      <div className="publications-page-list">
        {publicationsData.map((publication, index) => (
          <div className="publication-page-card" key={index}>
            <h2>{publication.title}</h2>
            <p><strong>Authors:</strong> {publication.authors}</p>
            <p><strong>Published in:</strong> {publication.conference} ({publication.year})</p>
            <p className="abstract">{publication.abstract}</p>
            <a href={publication.link} target="_blank" rel="noopener noreferrer" className="publication-page-link">
              Read the Full Paper
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
