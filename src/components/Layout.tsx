import Head from "next/head";
import type { ReactNode } from "react";

interface ILayoutProps {
    title: string,
    children: ReactNode
}

export default function Layout({ title, children }: ILayoutProps) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}