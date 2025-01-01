import React, { useState, useEffect } from 'react';
import TreeVisualization from './TreeVisualization';
import WorkshopDetails from './WorkshopDetails';
import { formatWorkshopData } from './utils';
import styles from './styles.module.css';

interface Workshop {
    name: string,
    kind: string;
    description: string;
}

interface TreeNode {
    name: string;
    children: TreeNode[];
}

const LearningPathway: React.FC = () => {
    const[allWorkshops, setAllWorkshops] = useState<Workshop[]>([]);
    const [workshopData, setWorkshopData] = useState<TreeNode | null>(null);
    const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/recommended-workshops');
                const data: Workshop[] = await response.json();
                
                if (Array.isArray(data)) {
                    setAllWorkshops(data);
                    setWorkshopData(formatWorkshopData(data));
                } else {
                    console.error("Received data is not an array:", data);
                }
            } catch (error) {
                console.error("Error fetching workshop data:", error);
            }
        };

        fetchData();
    }, []);

    const handleNodeClick = (node: TreeNode) => {
        const workshop = allWorkshops.find(workshop => workshop.name === node.name);
        if (workshop) {
            setSelectedWorkshop(workshop);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.treeContainer}>
                {workshopData ? (
                    <div className={styles.treeWrapper}>
                        <TreeVisualization
                            data={workshopData}
                            onNodeClick={handleNodeClick}
                        />
                    </div>
                ) : (
                    <div className={styles.loadingContainer}>
                        <p>Loading...</p>
                    </div>
                )}
            </div>

            {selectedWorkshop && (
                <div className={styles.detailsContainer}>
                    <WorkshopDetails
                        workshop={selectedWorkshop}
                        onClose={() => setSelectedWorkshop(null)}
                />
                </div>
            )}
        </div>
    );
};

export default LearningPathway;