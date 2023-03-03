import { GraphNode } from "utils";

type PropsType = {
    node: GraphNode | null;
}

export const TreeNode = (props: PropsType) => {

    const { node } = props;

    if (!node) return null;

    return (
        <div className="px-8 border border-red-300 text-center">
            <label>{node.label}</label>
            <div className="flex flex-row justify-center items-center gap-2"> 
                <TreeNode node={node.children[0]} />
                <TreeNode node={node.children[1]} />
            </div>
        </div>
    );
}
