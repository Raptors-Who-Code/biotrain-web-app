// pages/completedworkshops.tsx
import React from 'react';
import '../styles/completedworkshops.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';

const CompletedWorkshopsPage = () => {
  return (
    <div className="container">
      <Image src={bioTrainLogo} alt="Bio train Logo" width={339} height={141} />
      <h1 className="header">Have you completed any workshops previously?</h1>
      {/*<div className="box-container">
        <div className="box1">
          <h2>Soft Skills Workshops</h2>
          <p className="p1">Soft skills workshops help you improve competencies required to work effectively in teams and adapt to corporate culture.</p>
        </div>

        <div className="box2">
          <h2>Technical Skills Workshops</h2>
          <p className="p1">These workshops focus on the technical skills needed to excel in the biotech industry, including hands-on tasks and advanced techniques.</p>
        </div>
      </div>*/}

      <div className="button-container">
        <button className="btn">Yes</button>
        <button className="btn">No</button>
      </div>
    </div>
  );
};

export default CompletedWorkshopsPage;
