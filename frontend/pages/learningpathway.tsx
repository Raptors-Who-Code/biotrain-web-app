import React from 'react';
import '../styles/learningpathway.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';

const App: React.FC = () => {
  return (
    <div className="container">
      {/* Logo */}
      <div className="logo">
        <Image src={bioTrainLogo} alt="Logo" />
      </div>

      {/* Pathway Flow */}
      <div className="pathway-container">
        <div className="pathway-box">Drug Development</div>
        <div className="arrow">→</div>
        <div className="pathway-box">Bioprocessing Monitoring & Impurities Testing</div>
        <div className="arrow">→</div>
        <div className="pathway-box">Molecule to Market Place: Regulatory Consideration</div>
      </div>

      {/* Progress Tracker */}
      <div className="text-center">
        <p className="text-lg">Want to track your progress?</p>
        <div className="button-container">
          <button>Yes</button>
          <button>No</button>
        </div>
      </div>
    </div>
  );
};

export default App;
  