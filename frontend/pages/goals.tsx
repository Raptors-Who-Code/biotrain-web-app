import React from 'react';
import '../styles/goalsPage.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';

const GoalsPage = () => {
  return (

      <div className="container">
          <Image src = {bioTrainLogo} alt ="Bio train Logo" width = {339} height = {141}/>
          <h1 className = "header">Are you looking to gain soft skills or industry/technical skills?</h1>
          <div className = "box-container">
              <div className = 'box1'>
                  <h2>Soft skills</h2>
                  <p className = "p1">Soft Skills are the competencies required to perform effectively in a biotech team and understand the
                  corporate culture.
                  These are complementary to technical knowledge necessary to acquire and maintain employment in the biotech
                  industry.</p>
              </div>

              <div className = 'box2'>
                  <h2> Technical skills</h2>
                  <p className = "p1"> The demand for skilled Biotech Industry workers is
                  rising as the industry grows. Technical Skills are weapons to enhance your ability to
                  perform technical tasks in the biotech industry.</p>
              </div>
          </div>

          <div className = "button-container">
              <button className="btn">Soft skills</button>
              <button className="btn">industry skills</button>
          </div>



      </div>
  );
};

export default GoalsPage;