import React, {useEffect, useState} from 'react';
import '../styles/skillsWorkshops.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';
import Link from 'next/link';
import styles from './../styles/landing.module.css';
import {useRouter} from "next/router";

const TechnicalSkillsWorkshopsPage: React.FC = () =>  {

    interface Workshop {
        name: string;
        kind: string;
        description: string;
    }
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
              workshops.forEach((workshop) => {
                  if(workshop.kind == "Industry skill")
                      setWorkshops(data);
              });
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

  const handleButtonChange = (name: string) => {
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


  //*WIP* for when user has not selected anything, a pop-up will show telling the user
    //to select a workshop to continue *WIP*
  // const popUp = () =>{
  //
  // }
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
            <h1 className="header">Available Technical Skills Workshops</h1>
            <h2 className="body"> Choose from topics designed to enhance industry relevant knowledge for incumbent
                workers in biotechnology.
                All programs are designed with biotechnology guidance and taught by industry experts.
                And, BioTrain workshops are offered at no charge to registrants who meet the qualifications to enter the
                program.
                You must preregister for these programs. </h2>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    {workshops.map((workshop)=> (
                        <label key = {workshop.name}>
                            <input
                                type = "button"
                                name = "workshop"
                                value = {workshop.name}
                                checked = {selectedWorkshops.includes(workshop.name)}
                                onChange ={() => handleButtonChange(workshop.name)}
                            />
                            <h2>{workshop.name}</h2>
                            <p>{workshop.description}</p>
                        </label>
                    // <h2> Quality Control in BioTechnology Class (Starts 1/8/24)</h2>
                    // <h3>This comprehensive 40-hour course over 10 evenings, provides a strong foundation in quality for
                    //     individuals seeking to advance their careers in the dynamic field of biotechnology.
                    //     it is taught by industry experts with decades of experience in Quality and Regulatory
                    //     Compliance.
                    // </h3>
                    // <p> The course curriculum covers a comprehensive range of topics including introduction to quality
                    //     concepts, levels of compliance and difference (i.e. GLP, GMP, GCP),
                    //     Data integrity principles and practices, Organizational structure and quality management,
                    //     document control and Standard Operating Procedures (SOPs),
                    //     equipment qualification and calibration procedures, software validation processes, vendor
                    //     qualification and selection,
                    //     ISO 9001 quality management system, audit management and
                    //     improvement strategies, risk management and mitigation techniques.
                    // </p>
                    ))}
                </button>
                <button className="boxBtn2">
                    <h2>Molecule to Market Place: Regulatory Consideration (Starts 10/28/23)</h2>
                    <p> The regulatory guidance and pathways for the development and marketing approval of medicinal
                        drugs, considering research, clinical trials,
                        and process development are the backbone of bringing innovation to market. This program is ideal
                        for basic research and translational biology scientists.
                        This course offers information about (i) the regulatory organizations and roles in the
                        pharmaceutical industry;
                        and (ii) an overview of regulatory guidance, and pathways for the development and marketing
                        approval of medicinal drugs, considering research, clinical trials, and process development.
                        The information about regulatory aspects and considerations for Chemistry, Manufacturing, and
                        Controls (CMC) of drug development allows scientists to familiarize themselves with clinical,
                        regulatory, and quality considerations and practices. <b>5-hours.</b>
                    </p>
                </button>
            </div>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Supply Chain Dynamics (Starts 11/18/23)</h2>
                    <p> This course provides a comprehensive overview of the principles of acquiring various materials
                        for biotechnology as well as
                        focused presentations relating to best practices for commodity-specific acquisitions for
                        Research and Development,
                        Research Use Only Manufacturing (RUO), and U.S. Food and Drug Administration (FDA) regulated
                        Good Manufacturing Practices (cGMP).
                        This training will focus on strategic purchasing, the power of leverage,negotiations, contracts,
                        and agreements. <b>6-hours.</b>
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Drug Development</h2>
                    <p> revised course description coming soon</p>
                </button>
            </div>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Biotech Warehouse Logistics</h2>
                    <p> revised course description coming soon</p>
                </button>
                <button className="boxBtn2">
                    <h2>Lab Essentials: NGS Technician</h2>
                    <p> revised course description coming soon
                    </p>
                </button>
            </div>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Customized Bio-manufacturing</h2>
                    <p> revised course description coming soon
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Raw Material Testing BioPharma</h2>
                    <p> revised course description coming soon
                    </p>
                </button>
            </div>
            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Quality Control in Biotechnology</h2>
                    <p>revised course description coming soon
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Operating in Regulated Environment</h2>
                    <p> revised course description coming soon.
                    </p>
                </button>
            </div>
            <div className ="button-container">
            <button className="boxBtn">
                <h2>Bio-processing Monitoring and Impurities Testing</h2>
                <p> revised course description coming soon.
                </p>
            </button>
            </div>


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

export default TechnicalSkillsWorkshopsPage;