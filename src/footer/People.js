import React from 'react';
import './People.css';
import vijay from '../images/vijay.png';
import wu from '../images/wu.png';
import krishna from '../images/krishna.jpg';
import poorya from '../images/poorya.jpeg';

const peopleData = [
  {
    name: 'Vijay Raghavan',
    role: 'Professor Emeritus, Computer Science, University of Louisiana at Lafayette',
    description: 'Information retrieval and extraction, conceptual categorization of text/images, knowledge discovery in databases, big data analytics, integration of unstructured, semi-structured and structured data, and bioinformatics',
    image: vijay,
    phone: '(337) 280-8451',
    email: 'raghavan@louisiana.edu',
  },
  {
    name: 'Wu Xu',
    role: 'Professor and Department Head, Chemistry, University of Louisiana at Lafayette',
    description: 'The broad objective of my research is to study mechanisms by which signal transduction pathways and gene regulation control cell growth, proliferation, differentiation, death and disease. Specifically, I am interested in understanding protein function and structure relation in the context of signal transduction pathway using experimental and theoretical approaches.',
    image: wu,
    phone: '(337) 482-5684',
    email: 'wu.xu@louisiana.edu',
  },
  {
    name: 'Krishna Rauniyar',
    role: 'Ph.D, Computer Science, University of Louisiana at Lafayette',
    description: 'Deep Learning, Machine Learning, Natural Language Processing, integration of unstructured, semi-structured and structured data, bioinformatics, protein-drug functions and structure',
    image: krishna,
    phone: '(337) 390-2967',
    email: 'krishna.rauniyar1@louisiana.edu',
  },
  {
    name: 'Poorya Khajouie',
    role: 'Ph.D, Computer Science, University of Louisiana at Lafayette',
    description: 'Information retrieval and extraction, conceptual categorization of text/images, knowledge discovery in databases, big data analytics, integration of unstructured, semi-structured and structured data, and bioinformatics',
    image: poorya,
    phone: '(337) 504-0448',
    email: 'poorya.khajouie1@louisiana.edu',
  },
];

const People = () => {
  return (
    <div className="people-page">
      <h1>Our Team</h1>
      <div className="people-list">
        {peopleData.map((person, index) => (
          <div className="person" key={index}>
            <img src={person.image} alt={person.name} className="person-image" />
            <div className="person-details">
              <h2>{person.name}</h2>
              <p className="person-role">{person.role}</p>
              <p>Research: {person.description}</p>
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
