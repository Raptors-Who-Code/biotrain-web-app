// pages/completedworkshops.tsx
import React, { useState } from 'react';
import '../styles/completedworkshops.css';
import Image from 'next/image';
import Link from 'next/link';
import bioTrainLogo from '../public/biotrainlogo.png';
import styles from './../styles/landing.module.css';
import AccountIcon from './components/AccountIcon';

const CompletedWorkshopsPage = () => {

  return (
    <div className={styles.pageContent}>

        <div style={{ position: 'absolute', top: '10px', right: '20px' }}>
          <AccountIcon />
        </div>

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
        <h1 className="header">Have you completed any workshops with BioTrain previously?</h1>

        <div className="button-container">
          <Link href="/goals">
            <button className="btn">No</button>
          </Link>
          <Link href="/completed-selection">
            <button className="btn">Yes</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompletedWorkshopsPage;

