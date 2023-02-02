import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';
import Cart from '../components/Cart';

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
    );
}

export default MyApp;
