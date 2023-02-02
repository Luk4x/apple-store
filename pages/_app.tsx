import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Toaster />
                <OverlayScrollbarsComponent
                    defer
                    element="div"
                    options={{ scrollbars: { autoHide: 'scroll' } }}
                    style={{ height: '100vh', scrollBehavior: 'smooth' }}
                    id="overlay-scroll"
                    // events={{
                    //     scroll: (i, e: any) => {
                    //         console.log(e.target?.scrollTop);
                    //     }
                    // }}
                >
                    <Component {...pageProps} />
                </OverlayScrollbarsComponent>
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
