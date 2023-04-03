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
                    <meta property="og:description" content="Lorem ipsum" />
                    <meta
                        property="og:image"
                        content="https://mantenna.vercel.app/introduction.png"
                    />
                    <meta
                        property="og:image:secure_url"
                        content="https://cdn.discordapp.com/attachments/696680870177931355/1092533018482200596/introduction.png"
                    />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="994" />
                    <meta property="og:image:height" content="786" />
                    <meta
                        property="og:image:alt"
                        content="Mantenna introduction page"
                    />
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
