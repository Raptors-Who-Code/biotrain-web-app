import React from 'react';
import LearningPathway from './components/LearningPathway/LearningPathway';
import styles from '../styles/PathPage.module.css';

const PathPage: React.FC =() => {
  return (
    <div className={styles.container}>
      <h1>Your Learning Path</h1>
      <LearningPathway />
    </div>
  );
};

export default PathPage;