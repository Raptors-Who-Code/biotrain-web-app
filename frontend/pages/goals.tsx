import React from 'react';
import '../styles/goalsPage.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';
import Link from 'next/link';
import styles from './../styles/landing.module.css';

const GoalsPage = () => {
  return (
    <div className={styles.pageContent}>
      <div className="container">
          <div className={styles.logo}>
            <Link href="/landing">
              <img
                src="./biotrainlogo.png"
                alt="Montgomery College Logo"
                className={styles.logoImg}
              />
            </Link>
          </div>
          <h1 className = "header">Are you looking to gain soft skills or industry/technical skills?</h1>
          <div className = "box-container">
              <div className = 'box1'>
                  <h2>Soft Skills</h2>
                  <p className = "p1">Soft skills are the competencies required to perform effectively in a biotech team and understand the
                  corporate culture.
                  These are complementary to technical knowledge necessary to acquire and maintain employment in the biotech
                  industry.</p>
              </div>

              <div className = 'box2'>
                  <h2> Technical Skills</h2>
                  <p className = "p1"> The demand for skilled Biotech Industry workers is
                  rising as the industry grows. Technical Skills are weapons to enhance your ability to
                  perform technical tasks in the biotech industry.</p>
              </div>
          </div>

          <div className = "button-container">
            <Link href="/soft-skills-workshops">
              <button className="btn">Soft Skills</button>
            </Link>
            <Link href="/technical-skills-workshops">
              <button className="btn">Industry Skills</button>
            </Link>
          </div>

        {/* AI-Recommended Workshops Section */}
        <div className="ai-section">
            <p className="ai-description">
                Not sure where to start? Let AI recommend workshops tailored to your interests and career goals.
            </p>
            <div className="ai-button-container">
                <Link href="/recommended-workshops">
                    <button className="btn btn-ai">Choose for me</button>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsPage;