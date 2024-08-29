import React from 'react';
import './SourceCode.css';

import dnn from '../images/dnn.png';
import ml from '../images/ml.jpg';
import pandas from '../images/pandas.png';
import numpy from '../images/numpy.png';
import matplotlib from '../images/matplotlib.png';
import seaborn from '../images/seaborn.png';

const images = [
    { src: dnn, alt: 'Deep Neural Networks' },
    { src: ml, alt: 'Machine Learning' },
    { src: pandas, alt: 'Pandas' },
    { src: numpy, alt: 'NumPy' },
    { src: matplotlib, alt: 'Matplotlib' },
    { src: seaborn, alt: 'Seaborn' },
  ];
  


const SourceCode = () => {
  return (
    <div className="source-code-page">
      <h1>Source Code</h1>
      <p>Explore the various techniques and libraries we use:</p>
      <div className="images-gallery">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} className="tech-image" />
        ))}
      </div>
      <p>
        Find our source code on <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">GitHub</a> and contribute.
      </p>
    </div>
  );
};

export default SourceCode;
