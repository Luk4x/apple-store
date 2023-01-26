import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <SimpleBar className="h-screen">
                    <Toaster />
                    <Component {...pageProps} />
                </SimpleBar>
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
