import React, {useEffect, useState} from 'react';
import '../styles/skillsWorkshops.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';
import Link from 'next/link';
import styles from './../styles/landing.module.css';
import {useRouter} from "next/router";
import AccountIcon from './components/AccountIcon';

const SoftSkillsWorkshopsPage: React.FC = () => {

    interface Workshop {
        name: string;
        kind: string;
        description: string;
    }
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [selectedWorkshops, setSelectedWorkshops] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();


  useEffect(() => {
    const fetchWorkshops = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/api/workshops');
        const data: Workshop[] = await response.json();
        const industryWorkshops = data.filter(workshop => workshop.kind === "Soft");
        setWorkshops(industryWorkshops);
    } catch (err) {
        setError('Failed to load workshops');
        console.error('Error fetching workshops:', err);
    }
    };
    fetchWorkshops();
  }, []);

  const handleButtonChange = (name: string) => {
    setSelectedWorkshops((prev) =>
      prev.includes(name) ? prev.filter((workshopName) => workshopName != name) : [...prev, name]
    );
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/add-recommended-workshops', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recommendedWorkshops: selectedWorkshops }),
      });

      if (response.ok) {
        alert('Workshops added successfully!');
        router.push('/path');
      } else {
        throw new Error('Failed to submit workshops');
      }
    } catch (err) {
      console.error('Error submitting workshops:', err);
      alert('An error occurred while submitting the workshops');
    }
  };


  //*WIP* for when user has not selected anything, a pop-up will show telling the user
    //to select a workshop to continue *WIP*
  // const popUp = () =>{
  //
  // }

  return (
    <div className={styles.pageContent}>
        <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
          <AccountIcon />
        </div>
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
            <h1 className="header">Available Soft Skills Workshops</h1>
            <h2 className="body"> These short (2.5 hour) workshops are designed to provide foundational skills to
                incumbent workers in biotechnology.
                They are prepared with biotechnology guidance and are taught by industry experts. </h2>

            {error ? (
                <p className="error">{error}</p>
            ) : (
            <div className="workshops-list">
                {workshops.map((workshop) => (
                    <button key={workshop.name}
                            className={selectedWorkshops.includes(workshop.name) ? "boxBtn clicked" : "boxBtn"}
                            type="button"
                            name="workshop"
                            value={workshop.name}
                            onClick={() => handleButtonChange(workshop.name)}
                    >
                        <h2>{workshop.name}</h2>
                        <p>{workshop.description}</p>
                    </button>
                ))}
            </div>
            )}


            <div className="button-container">
                <Link href="/recommended-workshops">
                    <button className="btn">Choose For Me</button>
                </Link>
                <button
                    className="btn"
                    onClick={handleSubmit}
                    disabled={selectedWorkshops.length == 0}
                >
                    Next
                </button>
            </div>
        </div>
    </div>
  );
};

export default SoftSkillsWorkshopsPage;