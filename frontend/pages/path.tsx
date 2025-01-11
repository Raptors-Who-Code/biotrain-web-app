import React from 'react';
import LearningPathway from './components/LearningPathway/LearningPathway';
import styles from '../styles/PathPage.module.css';
import AccountIcon from './components/AccountIcon';

const PathPage: React.FC =() => {
  return (
    <div className={styles.container}>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <AccountIcon />
      </div>
      <h1>Your Learning Path</h1>
      <LearningPathway />
    </div>
  );
};

export default PathPage;