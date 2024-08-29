import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TSR from './tabs/TSR';
import Proteins from './tabs/Proteins';
import Ligands from './tabs/Ligands';
import DrugProtein from './tabs/DrugProtein';
import ProteinProtein from './tabs/ProteinProtein';
// import Neudeotide from './tabs/Neudeotide';
// import NeudeotideProtein from './tabs/NeudeotideProtein';
import People from './footer/People';
import Community from './footer/Community';
import Sourcecode from './footer/SourceCode';
import Problems from './footer/Problems';
import './App.css';

const App = () => {
  const [setActiveTab] = useState('tsr');

  return (
    <Router>
      <div className="app-container">
        <Header setActiveTab={setActiveTab} />
        <div className="content">
          <Routes>
            <Route path="/" element={<TSR />} />
            <Route path="/people" element={<People />} />
            <Route path="/community" element={<Community />} />
            <Route path="/source-code" element={<Sourcecode />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/tsr" element={<TSR />} />
            <Route path="/proteins" element={<Proteins />} />
            <Route path="/ligands" element={<Ligands />} />
            <Route path="/drug-protein" element={<DrugProtein />} />
            <Route path="/protein-protein" element={<ProteinProtein />} />
            {/* <Route path="/neudeotide" element={<Neudeotide />} /> */}
            {/* <Route path="/neudeotide-protein" element={<NeudeotideProtein />} /> */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
