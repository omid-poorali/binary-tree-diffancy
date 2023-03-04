import * as Models from "models";

type NodeType = {
    data: string | null;
    left: NodeType | null;
    right: NodeType | null;
    toGraph: () => Models.GraphNode;
    insert: (input: string) => NodeType | null;
    hasAvailableSpace: () => boolean;
}


function createNode(data: NodeType["data"] = null): NodeType {

    const hasAvailableSpace = (node: NodeType) => !(node.left && node.right);

    const insert = (node: NodeType, input: string): NodeType | null => {

        if (node.data) {

            if (!node.left) {

                node.left = createNode(input);
                return node.left;

            }
            else if (!node.right) {

                node.right = createNode(input);
                return node.right;

            }
            return null;

        } else {

            node.data = input;
            return node;

        }

    }

    const toGraph = (node: NodeType) => {

        const label: string | null = node.data;
        const leftSide: Models.GraphNode | null = node.left?.toGraph() ?? null;
        const rightSide: Models.GraphNode | null = node.right?.toGraph() ?? null;
        const children: Models.GraphNode["children"] = [leftSide, rightSide];

        return {
            label,
            children
        }

    }

    const newNode: NodeType = {
        data,
        left: null,
        right: null,
        toGraph: () => toGraph(newNode),
        insert: (input: string) => insert(newNode, input),
        hasAvailableSpace: () => hasAvailableSpace(newNode)
    }

    return newNode;

}

export function binaryTree(data: NodeType["data"]) {

    const allNodes = new Set<NodeType>();
    const root = createNode(data);
    allNodes.add(root);

    const insert = (input: string) => {

        let newNode = root.insert(input);
        if (newNode) {

            allNodes.add(newNode);

        }
        else {

            for (const node of Array.from(allNodes)) {

                if (node.hasAvailableSpace()) {

                    newNode = node.insert(input);
                    if (newNode) allNodes.add(newNode);
                    break;

                }

            }

        }

    }

    return {
        data: root.data,
        left: root.left,
        right: root.right,
        toGraph: root.toGraph,
        insert
    }

}