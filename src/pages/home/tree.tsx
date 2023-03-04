import { TreeVisualizer } from "components";
import { useEffect, useRef, useState } from "react";
import { binaryTree } from "utils";

type PropsType = {
    data: string;
}

export const Tree = (props: PropsType) => {

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
        <TreeVisualizer node={tree.toGraph()} />
    );


}