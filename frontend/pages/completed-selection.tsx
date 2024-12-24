// pages/completedselection.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../styles/completedworkshops.css';
import bioTrainLogo from '../public/biotrainlogo.png';
import styles from './../styles/landing.module.css';

const CompletedSelectionPage: React.FC = () => {
  return (
    //<div className={styles.pageContent}>
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

        <div className="button-container">
          <Link href="/completed-workshops">
            <button className="btn">Back</button>
          </Link>

          <Link href="/goals">
            <button className="btn">Next</button>
          </Link>

        </div>
      </div>
    //</div>
  );
};

export default CompletedSelectionPage;


