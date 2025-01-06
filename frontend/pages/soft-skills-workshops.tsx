import React from 'react';
import '../styles/goalsPage.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';
import Link from 'next/link';
import styles from './../styles/landing.module.css';
import AccountIcon from './components/AccountIcon';


const SoftSkillsWorkshopsPage = () => {
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

          <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <AccountIcon />
        </div>


          <h1 className = "header">Available Soft Skills Workshops</h1>

          <div className = "button-container">
            <Link href="/interests">
              <button className="btn">Choose For Me</button>
            </Link>
          </div>
      </div>
    </div>
  );
};

export default SoftSkillsWorkshopsPage;