import React from 'react';
import './People.css';
import vijay from '../images/vijay.png';
import wu from '../images/wu.png';
import krishna from '../images/krishna.jpg';
import poorya from '../images/poorya.jpeg';
import titli from '../images/titli.jpeg';
import sarika from '../images/sarika.jpeg';

const peopleData = [
  {
    name: 'Vijay Raghavan',
    role: 'Professor Emeritus, Computer Science, University of Louisiana at Lafayette',
    description: 'Received a BTech in mechanical engineering degree from the Indian Institute of Technology, Madras, an MBA degree from McMaster University, and a PhD degree in computing science from the University of Alberta, respectively, in 1968, 1970, and 1978. He is currently a Professor Emeritus of computer science with the Center for Advanced Computer Studies, UL Lafayette; he was the Director of the Center for Visual and Decision Informatics, a multi-institutional, NSF-sponsored, Industry University Cooperative Research Center (2012-2023); and is a Co-Director of the Laboratory for Internet Computing. His research interests include information retrieval and extraction, data and web mining, multimedia retrieval, data integration, and link discovery.',
    image: vijay,
    phone: '(337) 280-8451',
    email: 'raghavan@louisiana.edu',
  },
  {
    name: 'Wu Xu',
    role: 'Professor and Department Head, Chemistry, University of Louisiana at Lafayette',
    description: 'Received a Master\'s degree in Bioinformatics and Computational Biology and a Ph.D. degree in Genetics/Biochemistry from Iowa State University. He did his postdoc training in the Department of Biochemistry at St. Jude Children’s Hospital. He was hired as a tenure-track assistant professor in 2006 by the Department of Chemistry at the University of Louisiana at Lafayette, awarded tenure in 2012, and promoted to associate professor in 2013 and to full professor in 2019. Overall, Dr. Xu’s research interest is understanding protein function and structure relation in the context of signal transduction using a combination of experimental and computational approaches. Dr. Xu is focused on two specific projects: understanding the molecular mechanism of electron transfer in photosystem I and developing the TSR-based computational method for probing molecular interactions.',
    image: wu,
    phone: '(337) 482-5684',
    email: 'wu.xu@louisiana.edu',
  },
  {
    name: 'Krishna Rauniyar',
    role: 'Ph.D Student, Computer Science, University of Louisiana at Lafayette',
    description: 'Received his Bachelor\'s degree from Tribhuvan University, Nepal, in Electronics and Communication engineering and is currently pursuing his PhD in Computer Science at the University of Louisiana at Lafayette. His research interests encompass bioinformatics, scientific computing, machine learning, natural language processing (NLP), and generative adversarial networks (GANs).',
    image: krishna,
    phone: '(337) 390-2967',
    email: 'krishna.rauniyar1@louisiana.edu',
  },
  {
    name: 'Poorya Khajouie',
    role: 'Ph.D Student, Computer Science, University of Louisiana at Lafayette',
    description: 'Received his Bachelor\'s degree in computer engineering from the Iran University of Science and Technology and a Master\'s degree in information technology from Tarbiat Modares University. He is currently working towards his PhD in computer science with the School of Computing and Informatics at the University of Louisiana at Lafayette. His research interest lies in bioinformatics, computational biology, machine learning, and natural language processing.',
    image: poorya,
    phone: '(337) 504-0448',
    email: 'poorya.khajouie1@louisiana.edu',
  },
];

// Former members data
const formerMembersData = [
  {
    name: 'Sarika Kondra',
    role: 'Ph.D, Computer Science, University of Louisiana at Lafayette',
    description: 'Specialized in Deep Learning and Bioinformatics.',
    image: sarika,
    phone: '(337) 123-4567',
    email: 'former.member1@louisiana.edu',
  },
  {
    name: 'Titli Sarkar',
    role: 'Ph.D, Computer Science, University of Louisiana at Lafayette',
    description: 'Received a BSc and MSc-MTech in Computer Science and Engineering from the University of Calcutta, Kolkata, India, respectively, in 2011, 2013, and 2015. She received another MSc and PhD in Computer Science from the University of Louisiana at Lafayette in 2018 and 2021, respectively. She is currently working as a Computational Scientist for the National Cancer Institute/ National Institutes of Health (NCI/NIH), managed by Leidos Biomedical Research. Her research interests include computational and machine learning-based methods for protein and small molecule modeling for cancer research.',
    image: titli,
    phone: '(337) 765-4321',
    email: 'former.member2@louisiana.edu',
  },
];

const People = () => {
  return (
    <div className="people-page">
      <h1 className="people-heading">Our Team</h1>
      <div className="people-list">
        {peopleData.map((person, index) => (
          <div className="person" key={index}>
            <img src={person.image} alt={person.name} className="person-image" />
            <div className="person-details">
              <h2>{person.name}</h2>
              <p className="person-role">{person.role}</p>
              <p>{person.description}</p>
              <p>Phone: {person.phone}</p>
              <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
            </div>
          </div>
        ))}
      </div>
      {/* Former Members Section */}
      <h2 className="former-members-heading">Former Members</h2>
      <div className="former-people-list">
        {formerMembersData.map((person, index) => (
          <div className="person" key={index}>
            <img src={person.image} alt={person.name} className="person-image" />
            <div className="person-details">
              <h2>{person.name}</h2>
              <p className="person-role">{person.role}</p>
              <p>{person.description}</p>
              <p>Phone: {person.phone}</p>
              <p>Email: <a href={`mailto:${person.email}`}>{person.email}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default People;
