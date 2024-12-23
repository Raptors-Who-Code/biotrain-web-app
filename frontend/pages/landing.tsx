import React, { Fragment, useState } from 'react';
import Link from 'next/link';
import Grid from './components/grid';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';
import styles from './../styles/landing.module.css';

const LandingPage = () => {
  const [showDecision, setShowDecision] = useState(false);

  const handleGetStarted = () => {
    setShowDecision(true);
  };

  return (
    <Fragment>
      <div className={styles.pagecontainer}>
        {!showDecision ? (
          // Original content
          <div className={styles.pageContent}>
            <div className={styles.logo}>
              <Link href="/landing">
                <img
                  src="./biotrainlogo.png"
                  alt="Montgomery College Logo"
                  className={styles.logoImg}
                />
              </Link>
            </div>
            <Grid />
            <div className={styles.buttonContainer}>
              <p className={styles.btnP}>Ready to find your path and progress in your career?</p>
              <button className={styles.btn} onClick={handleGetStarted}>
              <p className={styles.btnText}>Get Started</p>
              </button>
            </div>
          </div>
        ) : (
          // Decision content
          <div className={styles.pageContent}>
            <div className={styles.logo}>
              <Link href="/landing">
                <img
                  src="./biotrainlogo.png"
                  alt="Montgomery College Logo"
                  className={styles.logoImg}
                />
              </Link>
            </div>
            <h2 className={styles.decisionTitle}>Are you a returning or new student?</h2>
            <div className={styles.decisionButtons}>
              <Link href="/signin" className={styles.decisionButton}>
                I’m Returning
              </Link>
              <Link href="/completed-workshops" className={styles.decisionButton}>
                I’m New
              </Link>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default LandingPage;
