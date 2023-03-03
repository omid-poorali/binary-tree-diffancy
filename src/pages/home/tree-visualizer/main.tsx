import { useEffect, useRef, useState } from "react";
import { binaryTree } from "utils";
import { TreeNode } from "./tree-node";

type PropsType = {
    data: string;
}

export const TreeVisualizer = (props: PropsType) => {

    const [tree, setTree] = useState(binaryTree(null));
    const nodes = useRef<string[]>([]);

    useEffect(() => {
        nodes.current = props.data.split(" ");
        const newTree = binaryTree(null);
        nodes.current.forEach(node => {
            if (node) newTree.insert(node)
        });
        setTree(() => newTree);

    }, [nodes, props.data]);


    if (!nodes.current.length) {
        return (
            <>placeholder</>
        );
    }


    return (
        <TreeNode node={tree.toGraph()} />
    );


}