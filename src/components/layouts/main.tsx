import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

type PropsType = {
    children?: ReactNode;
}

export const Main = (props: PropsType) => (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
            {props.children}
        </main>
        <Footer />
    </div>
);