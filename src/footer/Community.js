import React from 'react';
import './Community.css';
import ull from '../images/ull.png';
import loni from '../images/loni.png';

const communityData = [
  {
    name: 'University of Louisiana at Lafayette',
    image: ull,
    url: 'https://www.louisiana.edu/',
  },
  {
    name: 'LONI at LSU',
    image: loni,
    url: 'https://loni.org/',
  },
];

const Community = () => {
  return (
    <div className="community-page">
      <h1>Our Community</h1>
      <div className="community-images">
        {communityData.map((community, index) => (
          <a key={index} href={community.url} target="_blank" rel="noopener noreferrer">
            <img src={community.image} alt={community.name} className="community-image" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Community;
