import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../../src/app/firebaseConfig";
import styles from '../../styles/accountIcon.module.css';

const AccountIcon = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('User is signed in:', user);
        console.log('User display name:', user.displayName);
        if (user.displayName) {
          setUserName(user.displayName);
        } else {
          console.log('User display name is null or undefined');
        }
      } else {
        console.log('No user is signed in');
        setUserName(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const IconClick = () => {
    if (!userName) {
      router.push('/signin');
    }
  };

  if (!userName) {
    return null; // Do not render the component if no user is signed in
  }

  return (
    <div className={styles.accountIconContainer} onClick={IconClick}>
<a href={userName ? "/user-dashboard" : "#"}>
  <img
    className={styles.accountIcon}
    src="/UserIcon.png"
  />
</a>
{userName && <p className={styles.userName}>{userName}</p>}
</div>
);
};

export default AccountIcon;


