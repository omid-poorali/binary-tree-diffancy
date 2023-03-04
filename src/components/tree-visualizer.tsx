/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import clsx from "clsx";
import * as Models from "models";

type CustomProps = {
    className?: string;
    node: Models.GraphNode | null;
};

type PropsType = CustomProps & Omit<React.ComponentPropsWithoutRef<"div">, keyof CustomProps>

export const TreeVisualizer = (props: PropsType) => {

    const {
        className,
        ...rest
    } = props;


    const rootClassName = clsx("DuiTreeVisualizer", className);

    const renderNode = (node: Models.GraphNode | null) => {

        if (!node) return null;
        return (
            <li>
                <span>{node.label}</span>
                <ul>
                    {React.Children.toArray(node.children.map(node => renderNode(node)))}
                </ul>
            </li>
        )
    
    }

    return (
        <div className={rootClassName} {...rest}>
            <ul>
                {renderNode(props.node)}
            </ul>
        </div>
    );

};