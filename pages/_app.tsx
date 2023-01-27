import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

import { SessionProvider } from 'next-auth/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
// import { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    // const barRef = useRef<any>(null);

    // useEffect(() => {
    //     barRef.current
    //         ?.getScrollElement()
    //         .addEventListener('scroll', ({ target }: any) => {
    //             console.log(target.scrollTop);
    //         });
    // });

    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                {/* <SimpleBar ref={barRef} className="h-screen">
                    <Toaster />
                    <Component {...pageProps} />
                </SimpleBar> */}
                <Toaster />
                <Component {...pageProps} />
            </Provider>
        </SessionProvider>
    );
}

export default MyApp;
