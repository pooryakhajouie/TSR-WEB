import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TSR from './tabs/TSR';
import SizeFiltering from './tabs/SizeFiltering';
import MirrorImage from './tabs/MirrorImage';
import DrugTSR from './tabs/DrugTSR';
import MetalIon from './tabs/MetalIon';
import AAGrouping from './tabs/AAGrouping';
import SSETSR from './tabs/SSETSR';
import NucleotideProtein from './tabs/NucleotideProtein';
import People from './footer/People';
import Community from './footer/Community';
import Sourcecode from './footer/SourceCode';
import Problems from './footer/Problems';
import Home from './components/Home'
import ContactUs from './components/ContactUs';
import Publications from './components/Publications';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [setActiveTab] = useState('tsr');

  return (
    <Router>
      <div className="app-container">
        <Header setActiveTab={setActiveTab} />
        <div className="content">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/people" element={<People />} />
            <Route path="/community" element={<Community />} />
            <Route path="/source-code" element={<Sourcecode />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/tsr" element={<TSR />} />
            <Route path="/size-filtering" element={<SizeFiltering />} />
            <Route path="/mirror-image" element={<MirrorImage />} />
            <Route path="/drug-tsr" element={<DrugTSR />} />
            <Route path="/metal-ion" element={<MetalIon />} />
            <Route path="/aa-grouping" element={<AAGrouping />} />
            <Route path="/sse-tsr" element={<SSETSR />} /> 
            {/* <Route path="/neudeotide" element={<Neudeotide />} /> */}
            <Route path="/nucleotide-protein" element={<NucleotideProtein />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
