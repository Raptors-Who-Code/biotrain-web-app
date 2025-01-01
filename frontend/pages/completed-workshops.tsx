import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import '../styles/completedWorkshopsPage.css';
import styles from './../styles/landing.module.css';

interface Workshop {
  name: string;
  kind: string;
  description: string;
}

const CompletedWorkshopsPage: React.FC = () => {
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([]);
  const [hasCompletedWorkshops, setHasCompletedWorkshops] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (hasCompletedWorkshops === true) {
      const fetchWorkshops = async () => {
        try {
          const response = await fetch('http://127.0.0.1:5000/api/workshops');
          const data = await response.json();
          if (Array.isArray(data)) {
            setWorkshops(data);
          } else {
            throw new Error('Invalid response format');
          }
        } catch (err) {
          setError('Failed to load workshops');
          console.error('Error fetching workshops:', err);
        }
      };
      fetchWorkshops();
    }

    if (hasCompletedWorkshops === false) {
      router.push('/goals');
    }
  }, [hasCompletedWorkshops, router]);

  const handleCheckboxChange = (name: string) => {
    setSelectedWorkshops((prev) =>
      prev.includes(name) ? prev.filter((workshopName) => workshopName != name) : [...prev, name]
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/add-completed-workshops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completedWorkshops: selectedWorkshops }),
      });
      
      if (response.ok) {
        alert('Completed workshops added successfully!');
        router.push('/goals');
      } else {
        throw new Error('Failed to submit workshops');
      }
    } catch (err) {
      console.error('Error submitting workshops:', err);
      alert('An error occurred while submitting the workshops');
    }
  };

  return (
    <div className={styles.pageContent}>
      <div className="container">
        <div className={styles.logo}>
          <Link href="/landing">
            <img
              src="./biotrainlogo.png"
              alt="Montgomery College Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>

        {hasCompletedWorkshops === null && (
          <>
            <h1 className="header">Have you completed any workshops with BioTrain?</h1>
            <div className="button-container">
              <button className="btn" onClick={() => setHasCompletedWorkshops(false)}>
                No
              </button>
              <button className="btn" onClick={() => setHasCompletedWorkshops(true)}>
                Yes
              </button>
            </div>
          </>
        )}

        {hasCompletedWorkshops === true && (
          <>
            <h1 className="header">Select the workshops you have completed</h1>

            {error && <p className="error">{error}</p>}

            <div className="checkbox-list">
              {workshops.map((workshop) => (
                <label key={workshop.name}>
                  <input
                    type="checkbox"
                    name="workshops"
                    value={workshop.name}
                    checked={selectedWorkshops.includes(workshop.name)}
                    onChange={() => handleCheckboxChange(workshop.name)}
                  />
                  {workshop.name}
                </label>
              ))}
            </div>

            <div className="button-container">
              <button className="btn" onClick={() => setHasCompletedWorkshops(false)}>
                Back
              </button>

              <button
                className="btn"
                onClick={handleSubmit}
                disabled={selectedWorkshops.length == 0}
                >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CompletedWorkshopsPage;


