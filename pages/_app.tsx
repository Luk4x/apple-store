import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    useEffect(() => {
        // scroll to top on each page changing (scroll lib bug)
        const viewport = document.querySelector('.os-viewport');
        viewport?.scrollTo({
            top: 0,
            behavior: 'auto'
        });
    });

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="author" content="Lucas Maciel (luk4xm4ci3l@gmail.com)" />
                <meta
                    name="keywords"
                    content="html, css, javascript, typescript, tailwind, nextjs, reactjs, stripe, npm, sanity, redux, nextauth, headlessui, react hot toast, react icons, overlayScrollbars, vercel analytics, random string, luk4x"
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
                <title>Apple Store | The Best Apple E-Commerce</title>
            </Head>
            <SessionProvider session={session}>
                <Provider store={store}>
                    <Toaster />
                    <OverlayScrollbarsComponent
                        defer
                        element="div"
                        options={{ scrollbars: { autoHide: 'scroll' } }}
                        style={{ height: '100vh' }}
                    >
                        <Component {...pageProps} />
                    </OverlayScrollbarsComponent>
                    <Analytics />
                </Provider>
            </SessionProvider>
        </>
    );
}

export default MyApp;
