import React from 'react';
import './TSR.css';
import proteinImage from '../images/protein.png';

const TSR = () => {
    return (
        <div className="main">
            <div className="content">
                <div className="text-content">
                    <h2>Triangular Spatial Relationship (TSR)</h2>
                    <p>
                        We have developed a novel method where the 3-D structure of a protein is modeled using the concept of Triangular
                        Spatial Relationship (TSR), where triangles are constructed with the Cα atoms of a protein as vertices. Every triangle is
                        represented using an integer, which we denote as “key,” A key is computed using the length, angle, and vertex labels based
                        on a rule-based formula, which ensures assignment of the same key to identical TSRs across proteins. A structure is
                        thereby represented by a vector of integers. Our method is able to accurately quantify similarity of structure or substructure
                        by matching numbers of identical keys between two proteins. The uniqueness of our method includes: (i) a unique way to
                        represent structures to avoid performing structural superimposition; (ii) use of triangles to represent substructures as it is
                        the simplest primitive to capture shape; (iii) complex structure comparison is achieved by matching integers corresponding
                        to multiple TSRs. Every substructure of one protein is compared to every other substructure in a different protein. The method
                        is used in the studies of proteases and kinases because they play essential roles in cell signaling, and a majority of these
                        constitute drug targets. The new motifs or substructures we identified specifically for proteases and kinases provide a deeper
                        insight into their structural relations. Furthermore, the method provides a unique way to study protein conformational changes.
                    </p>
                </div>
                <div className="image-content">
                    <img src={proteinImage} alt="Protein Structure" />
                </div>
            </div>
        </div>
    );
};

export default TSR;
