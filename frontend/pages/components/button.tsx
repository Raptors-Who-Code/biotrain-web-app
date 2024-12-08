import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from './../../styles/landing.module.css'


function Button() {
    return (

        <Fragment>

        <p className={styles.btnP}>Ready to find your path and progress in your career?</p>
        <Link href="/signin">
            <button className={styles.btn}>
                <p className={styles.btnText}>Get Started</p>
            </button>
        </Link>


        </Fragment>
        
    );
}

export default Button;