import Head from "next/head";
import type { ReactNode } from "react";
import { Provider } from "react-redux"
import store from "@/stores";

type props = {
    title: string,
    children: ReactNode
}

export default function Layout({ title, children }: props) {
    return (
        <Provider store={store}>
            <Head>
                <title>{title}</title>
            </Head>
            <main>
                {children}
            </main>
        </Provider>
    )
}