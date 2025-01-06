import React, {useEffect, useState} from 'react';
import '../styles/skillsWorkshops.css';
import Image from 'next/image';
import bioTrainLogo from '../public/biotrainlogo.png';
import Link from 'next/link';
import styles from './../styles/landing.module.css';
import {useRouter} from "next/router";

const SoftSkillsWorkshopsPage: React.FC = () => {

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
            <h1 className="header">Available Soft Skills Workshops</h1>
            <h2 className="body"> These short (2.5 hour) workshops are designed to provide foundational skills to
                incumbent workers in biotechnology.
                They are prepared with biotechnology guidance and are taught by industry experts. </h2>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Claiming Your Strengths and Continuous Learning</h2>
                    <p> Claiming Your Strengths starts with the identification of your key
                        strengths - what you love to do, and your weaknesses - what you
                        hate to do. Strategies are then presented by which you can
                        enhance your career by making learning a part of your work.
                        Willingness to learn new skills is one of the most crucial qualities
                        employers look for when hiring new team members.
                    </p>

                </button>
                <button className="boxBtn2">
                    <h2>Managing Difficult Conversations and Conflicts</h2>
                    <p> Tough talks can be awkward and unpleasant, but they are
                        inevitable. Many conversations have significant outcomes.
                        Because the stakes are so high, we fear the outcome, tend to put
                        off the conversation, and are not adequately prepared for it.
                        Turn potentially confrontational events into constructive
                        dialogues to successfully navigate work and grow your potential.
                    </p>
                </button>
            </div>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Negotiations</h2>
                    <p> Tough talks can be awkward and unpleasant, but they are
                        inevitable. Many conversations have significant outcomes.
                        Because the stakes are so high, we fear the outcome, tend to put
                        off the conversation, and are not adequately prepared for it.
                        Turn potentially confrontational events into constructive
                        dialogues to successfully navigate work and grow your potential.
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Public Speaking and Overcoming Speaking Anxiety</h2>
                    <p> Whether we're talking in a team meeting or presenting to an
                        audience, we all have to speak in public from time to time.
                        Speaking anxiety holds people back from applying for jobs,
                        promotions, and much more. Learning how to tame adrenaline
                        will allow you to take full advantage of opportunities to advance
                        your career.
                    </p>
                </button>
            </div>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Building Effective Networks</h2>
                    <p> Almost everyone agrees that networking is important, but we
                        often struggle to find the time and energy needed to build our
                        networks. This workshop encourages you to think about
                        networking as a critical part of how we get things done. You'll
                        learn the downsides of having a homogenous network and the
                        most effective ways to invest your time in building a broad,
                        connective, and dynamic strategic network.
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Building Resiliency and Adaptability</h2>
                    <p> This topic is designed to build resilience, well-being, and
                        optimism. These strengths-based prevention programs equip
                        individuals with a set of practical skills that can be applied in
                        everyday life to rapidly learn new skills and behaviors in
                        response to changing circumstances, take actions to deal with
                        challenges, problems, and setbacks, and meet the demands of
                        their academic/work and personal lives successfully.
                    </p>
                </button>
            </div>

            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Communicating with Confidence</h2>
                    <p> Many people think of confidence as a feeling. But in reality, it’s
                        a set of behaviors that you can change and improve over time.
                        By acting confidently, particularly at the start of your career, you
                        can influence how others perceive you and change how you feel
                        about yourself. Hear expert insights and real-life examples on
                        strategies to build your confidence from the outside in. Effective
                        communication is critically important for career advancement
                        and the top traits employers look for hiring or promoting
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Effective Listening</h2>
                    <p> Few skills are more valuable and practiced more poorly than
                        listening. In today’s high-stress world, communication is more
                        important than ever; yet we devote less time to listening to one
                        another. You will learn the pitfalls that interfere with effective
                        listening and how to avoid them. Learn how solid listening skills
                        can be a gift of time that helps build relationships, ensure
                        understanding, solves problems, resolves conflicts, and means
                        fewer errors, and reduction of wasted time.
                    </p>
                </button>
            </div>
            <div className="boxBtn-container">
                <button className="boxBtn1">
                    <h2>Teamwork and Problem Solving</h2>
                    <p> Learn innovative ways to improve your team’s performance and
                        problem-solving in this fast-paced workshop. Problem-solving
                        as a team improves the chances of coming up with the best
                        solution/result. Pick up essential skills to lead, build and
                        motivate teams in the workplace. Engaged teams have lower
                        turnover, greater profitability, higher productivity, and higher
                        customer ratings than disengaged teams.
                    </p>
                </button>
                <button className="boxBtn2">
                    <h2>Critical Thinking and Time Management</h2>
                    <p> Improve your time management skills by sharpening your critical
                        thinking skills. Critical thinking is the ability to organize
                        information logically to make a reasoned judgment. Effective
                        time management involves prioritizing tasks, setting goals,
                        monitoring your progress, and avoiding procrastination. The
                        ability to efficiently plan and control how you spend the hours
                        of your day, you can accomplish goals within the time allotted.
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

export default SoftSkillsWorkshopsPage;