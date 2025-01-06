import React, { useEffect, useState, Fragment } from 'react';
import styles from '../../styles/landing.module.css';

interface DashProps {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
}

const Dash: React.FC<DashProps> = ({ firstName, lastName, email }) => {
  const [activity, setActivity] = useState<number[]>([]);

  useEffect(() => {
    // Simulate fetching activity data from a database
    const fetchActivity = () => {
      const storedActivity = JSON.parse(localStorage.getItem('activity') || '[]');
      setActivity(storedActivity);
    };

    fetchActivity();
  }, []);

  useEffect(() => {
    if (email) {
      // Update activity data when user logs in
      const today = new Date().toISOString().split('T')[0];
      const updatedActivity = [...activity, today];
      setActivity(updatedActivity);
      localStorage.setItem('activity', JSON.stringify(updatedActivity));
    }
  }, [email]);

  return (
    <Fragment>
      <div className={styles.cardcontainer}>
        <h1 className={styles.cardHeader}>Account Information</h1>
        <p className={styles.cardBody}>
          <strong>First Name:</strong> {firstName}
          <br />
          <strong>Last Name:</strong> {lastName}
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
          <h1 className={styles.cardHeader}>Activity Tracker</h1>
          <div className={styles.activityGrid}>
            {activity.map((date, index) => (
              <div key={index} className={styles.activityCell}>
                {date}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dash;

