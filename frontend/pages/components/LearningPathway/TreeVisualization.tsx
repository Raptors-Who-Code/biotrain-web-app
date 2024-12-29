import React from 'react';
import Tree from 'react-d3-tree';
import './styles.module.css';

interface TreeNode {
    name: string;
    children: TreeNode[];
    progress?: number; // Optional field to show progress
}

interface TreeVisualizationProps {
    data: TreeNode;
    onNodeClick: (node: TreeNode) => void;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data, onNodeClick }) => {
    const handleClick = (nodeData: any) => {
        onNodeClick(nodeData.data);
    };

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Tree
                data={data}
                orientation="vertical"
                onNodeClick={handleClick}
                pathFunc="elbow"
                translate={{ x: window.innerWidth / 2, y: 100 }}
                nodeSize={{ x: 200, y: 100 }}
                separation={{ siblings: 1, nonSiblings: 2 }}
                //draggable={false}
            />
        </div>
    );
};

export default TreeVisualization

/*
import React from 'react';
import Tree from 'react-d3-tree';

interface TreeNode {
    name: string;
    children: TreeNode[];
    progress?: number; // Optional field to show progress
}

interface TreeVisualizationProps {
    data: TreeNode;
    onNodeClick: (node: TreeNode) => void;
}

const TreeVisualization: React.FC<TreeVisualizationProps> = ({ data, onNodeClick }) => {
    const handleClick = (nodeData: any) => {
        onNodeClick(nodeData.data);
    };

    const renderNode = (nodeData: any) => {
        const { name, progress } = nodeData.data || {};

        if (!name) {
            return <g></g>
        }

        const progressPercentage = progress ?? 0;

        return (
            <g>
                <rect
                    width="200"
                    height="60"
                    x="-100"
                    y="-30"
                    style={{ fill: '#4CAF50', strokeWidth: 2, stroke: '#2c6f2d' }}
                />
                <text x="0" y="0" textAnchor="middle" style={{ fill: 'white', fontSize: '14px' }}>
                    {name}
                </text>
                {progress != undefined && (
                    <g>
                        <rect
                            x="-95"
                            y="25"
                            width="190"
                            height="10"
                            style={{ fill: '#ddd', strokeWidth: 1, stroke: '#ccc' }}
                        />
                        <rect
                            x="-95"
                            y="25"
                            width={`${progressPercentage}%`}
                            height="10"
                            style={{ fill: '76c7c0', strokeWidth: 1, stroke: '#2c6f2d' }}
                        />
                    </g>
                )}

            </g>
        );
    };

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <Tree
                data={data}
                orientation="vertical"
                onNodeClick={handleClick}
                pathFunc="elbow"
                renderCustomNodeElement={renderNode}
            />
        </div>
    );
};

export default TreeVisualization
*/