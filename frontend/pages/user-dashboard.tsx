import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut } from 'firebase/auth';
import { auth } from '../src/app/firebaseConfig';
import Dash from './components/dash';
import styles from './../styles/userDashboard.module.css';
import AccountIcon from './components/AccountIcon';

const UserDashboard = () => {
  const [showDecision, setShowDecision] = useState(false);
  const router = useRouter();

  const userSignOut = async () => {
    try {
      await signOut(auth);
      router.push('/signin');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className={styles.pageContainer}>

      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/landing">
            <img
              src="./biotrainlogo.png"
              alt="Montgomery College Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>

        <div className={styles.accountSection}>
          <AccountIcon />
          <button onClick={userSignOut} className={styles.signOutButton}>
            Sign Out
          </button>
        </div>
      </div>

      <div className={styles.pageContent}>
        {/* dashboard component containing dashboard information */}
        <Dash firstName={''} lastName={''} studentId={''} email={''} />
      </div>
      
    </div>
  );
};

export default UserDashboard;