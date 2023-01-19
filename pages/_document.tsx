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
                    content="html, css, javascript, typescript, tailwind, nextjs, reactjs, stripe, npm, sanity, redux, nextauth, headlessui, react hot toast, react icons, luk4x"
                />
                <meta
                    property="og:description"
                    content="Em resumo, a aplicação se consiste num E-Commerce da Apple, simulando um fluxo de compra completo, porém esse não é seu único destaque."
                />
                <meta
                    property="og:image"
                    content="https://user-images.githubusercontent.com/86276393/212569133-c845f016-df7f-41ee-a3a1-43bbbc2a6669.png"
                />
                <meta property="og:title" content="Apple Store" />
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
                <title>Apple Store</title>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
