import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

type PropsType = {
  children?: ReactNode;
};

export const Main = (props: PropsType) => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="grow">{props.children}</main>
    <Footer />
  </div>
);
