// User will be able to enter general interests and get personalized recommendations

import React, { useState } from 'react';
import styles from './../styles/landing.module.css';
import Link from 'next/link';

const Interests = () => {
    const [interests, setInterests] = useState('');
    const [recommendations, setRecommendations] = useState<string[] | null>(null);
    const [loading, setLoading] = useState(false);

    // Handles recommendation fetching
    const getRecommendations = async () => {
        setLoading(true);
        setRecommendations(null);

        try {
            // Call to AI backend endpoint
            const response = await fetch('api/getRecommendations', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ interests }),
            });

            if (!response.ok) throw new Error('Failed to fetch recommendations');

            const data = await response.json();
            setRecommendations(data.recommendations);
        } catch (error) {
            console.log("Error fetching recommendations: ", error);
            setRecommendations([]);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div className={styles.pageContent}>
      <div className={styles.page}>
        <div className={styles.logo}>
          <Link href="/landing">
            <img
              src="./biotrainlogo.png"
              alt="Montgomery College Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>
        <h1 className={styles.header}>AI-Recommended Workshops</h1>
        <p className={styles.description}>
          Enter your interests, skills, or career goals below, and our AI will recommend workshops tailored to your needs.
        </p>
        <div className={styles.inputContainer}>
          <textarea
            className={styles.textArea}
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            placeholder="E.g., leadership, biotech research, team collaboration..."
          />
          <button
            className={styles.btn}
            onClick={getRecommendations}
            disabled={loading || !interests.trim()}
          >
            {loading ? 'Loading...' : 'Get Recommendations'}
          </button>
        </div>
        {recommendations && (
          <div className={styles.results}>
            <h2>Recommended Workshops:</h2>
            {recommendations.length > 0 ? (
              <ul>
                {recommendations.map((workshop, index) => (
                  <li key={index}>{workshop}</li>
                ))}
              </ul>
            ) : (
              <p>No recommendations found. Try refining your input.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Interests;