// pages/completedworkshops.tsx
import React, { useState } from 'react';
import '../styles/completedworkshops.css';
import Image from 'next/image';
import Link from 'next/link';
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

      <div>
        <Link href="/goals">
          <button className="btn">No</button>
        </Link>
        <Link href="/completedselection">
          <button className="btn">Yes</button>
        </Link>
      </div>

    </div>
  );
};

export default CompletedWorkshopsPage;

