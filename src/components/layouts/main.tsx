import { ReactNode } from "react";

type PropsType = {
    children?: ReactNode;
}

export const Main = (props: PropsType) => (
    <main>
        {props.children}
    </main>
);