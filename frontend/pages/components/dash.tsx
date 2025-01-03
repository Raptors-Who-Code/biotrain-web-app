import React, { Fragment } from 'react';
import styles from '../../styles/landing.module.css';

interface UserInfo {
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
}

function Dash({ firstName, lastName, studentId, email }: UserInfo) {
  return (
    <Fragment>
      <div className={styles.cardcontainer}>
        <h1 className={styles.cardHeader}>Account Information</h1>
        <p className={styles.cardBody}>
          <strong>First Name:</strong> {firstName}
          <br />
          <strong>Last Name:</strong> {lastName}
          <br />
          <strong>Student ID:</strong> {studentId}
          <br />
          <strong>Email:</strong> {email}
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.cardcontainer}>
          <h1 className={styles.cardHeader}>Workshops</h1>
          <p className={styles.cardBody}>
            Workshops in progress:
            <br />
            <br />
            Placeholder workshop in progress...
          </p>
          <p className={styles.cardBody}>
            Workshops Completed:
            <br />
            <br />
            Placeholder workshop completed...
          </p>
        </div>

        <div className={styles.cardcontainer}>
          <h1 className={styles.cardHeader}>Activity History</h1>
          <p className={styles.cardBody}>
            Placeholder for activity history...
          </p>
          <ul className={styles.cardBody}>
            <li>*GitHub-like activity tracker*</li>
            
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Dash;