import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './../../styles/landing.module.css'


function Button() {
    return (

        <Fragment>

        <div className={styles.btnContainer}>
        <p className={styles.btnP}>Ready to find your path and progress in your career?</p>
        <button className={styles.btn}>
            <p className={styles.btnText}>Get Started</p>
        </button>


        </Fragment>
        
    );
}

export default Button;