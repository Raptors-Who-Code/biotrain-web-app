import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './../../styles/landing.module.css'

function Card() {
  return (
    <div className= {styles.cardcontainer}>

      <h1 className = {styles.cardHeader}>Soft Skills</h1>

      <p className={styles.cardBody}>
        Soft Skills are the competencies required to perform effectively in a biotech team and
        understand the corporate culture. These are complementary to the technical knowledge necessary
        to acquire and maintain employment in the biotech industry.
      </p>

      <ul className={styles.cardBody}>
        <li>Claiming your strength</li>
        <li>Communicating effectively</li>
        <li>Working as a team</li>
        <li>Problem-solving</li>
        <li>Critical thinking</li>
        <li>Adaptability</li>
        <li>Emotional intelligence</li>
      </ul>
      
    </div>
    
  );
}

export default Card;
