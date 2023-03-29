import Head from "next/head";
import type { ReactNode } from "react";

type props = {
    title: string;
    children: ReactNode;
};

export default function Layout({ title, children }: props) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>{children}</main>
        </>
    );
}
