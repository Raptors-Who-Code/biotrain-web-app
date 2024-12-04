// pages/completedselection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/completedworkshops.css';
import bioTrainLogo from '../public/biotrainlogo.png';

const CompletedSelectionPage: React.FC = () => {
  return (
    <div className="container">
      <Image src={bioTrainLogo} alt="Bio train Logo" width={339} height={141} />
      <h1 className="header">Select the workshops you have completed</h1>

      <div className="checkbox-list">
        <label>
          <input type="checkbox" name="workshops" value="option1" /> Bioprocessing 1
        </label>
        <label>
          <input type="checkbox" name="workshops" value="option2" /> Bioprocessing 2
        </label>
        <label>
          <input type="checkbox" name="workshops" value="option3" /> Bioprocessing 3
        </label>
      </div>

      <div>
        <Link href="/completedworkshops">
          <button className="btn">Back</button>
        </Link>

        <button className="btn">Next</button>

      </div>
    </div>
  );
};

export default CompletedSelectionPage;


