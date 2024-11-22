// pages/completedworkshops.tsx
import React, { useState } from 'react';
import '../styles/completedworkshops.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';

const CompletedWorkshopsPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  
  const handleYesClick = () => {
    setShowDropdown(true); // Show the dropdown
  };

  
  const handleNoClick = () => {
    setShowDropdown(false); // Hide the dropdown
  };

  return (
    <div className="container">
      <Image src={bioTrainLogo} alt="Bio train Logo" width={339} height={141} />
      <h1 className="header">Have you completed any workshops previously?</h1>

      <div className="button-container">
        <button className="btn" onClick={handleYesClick}>Yes</button>
        <button className="btn" onClick={handleNoClick}>No</button>
      </div>

      {showDropdown && ( 
        
          <div className="checkbox-list">
            <label> <input type="checkbox" name="workshops" value="option1" /> Bioprocessing 1</label>
            <label> <input type="checkbox" name="workshops" value="option2" />Bioprocessing 2</label>
            <label><input type="checkbox" name="workshops" value="option3" />Bioprocessing 3</label>
          </div>
      )}
    </div>
  );
};

export default CompletedWorkshopsPage;

