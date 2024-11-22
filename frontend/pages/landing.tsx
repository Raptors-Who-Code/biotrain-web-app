import React, { Fragment } from 'react';
import Link from 'next/link';
import Button from './components/button';
import Grid from './components/grid';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';


const LandingPage = () => {
  return (
    
    <Fragment>
        <div>
          <Image src={bioTrainLogo} alt="Logo" />
        </div>
        <Grid/>
        <Button/>
    </Fragment>
    
  );
};

export default LandingPage;
