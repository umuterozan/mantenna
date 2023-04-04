import Document, {
    DocumentContext,
    DocumentInitialProps,
    Html,
    Head,
    Main,
    NextScript,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(ctx);

        return initialProps;
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:url"
                        content="https://mantenna.vercel.app"
                    />
                    <meta property="og:title" content="Mantenna" />
                    <meta property="og:site_name" content="Mantenna" />
                    <meta property="og:description" content="Mantenna, youtube üzerindeki canlı yayınları aynı anda izlemenize olanak tanıyan bir web uygulamasıdır." />
                    <meta property="og:locale" content="tr_TR" />
                    <meta
                        property="og:image"
                        content="https://mantenna.vercel.app/introduction.png"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Mantenna" />
                    <meta name="twitter:description" content="Mantenna, youtube üzerindeki canlı yayınları aynı anda izlemenize olanak tanıyan bir web uygulamasıdır." />
                    <meta name="twitter:url" content="https://mantenna.vercel.app" />
                    <meta name="twitter:image" content="https://mantenna.vercel.app/introduction.png" />
                    <link rel="shortcut icon" href="/favicon.svg" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
