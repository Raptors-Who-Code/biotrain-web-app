import React from 'react';
import Link from 'next/link';

const LandingPage = () => {
  return (
    <div className="container">
      <h1>Welcome to BioTrain</h1>
      <p>Take a skill assessment to get personalized course recommendations!</p>

      <div>
        <Link href="/assessment">
          <button className="btn">Start Assessment</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
