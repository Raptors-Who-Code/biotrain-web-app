import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from "../src/app/firebaseConfig";
import styles from './../styles/userDashboard.module.css';
import AccountIcon from './components/AccountIcon';
import Dash from './components/dash';

const UserDashboard = () => {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
        if (user.displayName) {
          const [first, last] = user.displayName.split(' ');
          setFirstName(first);
          setLastName(last);
        } else {
          console.log('User display name is null or undefined');
        }
        setEmail(user.email);
      } else {
        console.log('No user is signed in');
        setFirstName(null);
        setLastName(null);
        setEmail(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
        <Dash firstName={firstName} lastName={lastName} email={email} />
      </div>
    </div>
  );
};

export default UserDashboard;