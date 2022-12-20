import { Html, Head, Main, NextScript } from 'next/document';

export default function document() {
    return (
        <Html lang="pt-br">
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="https://raw.githubusercontent.com/Luk4x/user-register-interface/main/public/favicon.ico"
                />
                <meta name="author" content="Lucas Maciel (luk4xm4ci3l@gmail.com)" />
                <meta
                    name="keywords"
                    content="html, css, javascript, typescript, tailwind, nextjs, reactjs, axios, npm, sanity studio, redux, luk4x"
                />
                <meta
                    property="og:description"
                    content="A aplicação se consiste numa loja da Apple."
                />
                <meta property="og:image" content="" />
                <meta property="og:title" content="Apple Store" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <title>Apple Store</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
