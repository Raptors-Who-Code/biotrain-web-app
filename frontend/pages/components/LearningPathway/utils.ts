interface TreeNode {
    name: string;
    children: TreeNode[];
}

export const formatWorkshopData = (data: any[]): TreeNode => {
    if (!Array.isArray(data)) {
        console.error("Expected an array, but received: ", data);
        return { name: 'Start Here', children: [] };
    }

    const treeData: TreeNode = {
        name: 'Start Here',
        children: [],
    };
    
    data.forEach((workshop) => {
        treeData.children.push({ name: workshop.name, children: [] });
        /*
        if (workshop.prerequisites.length === 0) {
            treeData.children.push({ name: workshop.name, children: [] });
        } else {
            const parent = findParentNode(treeData, workshop.prerequisites[0]);
            if (parent) {
                parent.children.push({ name: workshop.name, children: [] });
            }
        }
        */
    });

    return treeData;
};

const findParentNode = (node: TreeNode, parentName: string): TreeNode | null => {
    if (node.name === parentName) return node;
    for (const child of node.children || []) {
        const result = findParentNode(child, parentName);
        if (result) return result;
    }
    return null;
};