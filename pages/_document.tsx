import { Html, Head, Main, NextScript } from 'next/document';

export default function document() {
    return (
        <Html lang="pt-br">
            <Head>
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="https://raw.githubusercontent.com/Luk4x/user-register-interface/main/public/favicon.ico"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
