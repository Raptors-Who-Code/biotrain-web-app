import React from 'react';

const WorkshopDetails: React.FC<{ workshop: any; onClose: () => void}> = ({ workshop, onClose}) => {
    return (
        <div style={{ position: 'fixed', top: '10%', right: '10%', background: 'white', padding: '20px', border: '1px solid #ddd' }}>
            <h2>{workshop.name}</h2>
            <p>{workshop.description}</p>
            <p><strong>Prerequisites:</strong> {workshop.prerequisites || 'None'}</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
};

export default WorkshopDetails;