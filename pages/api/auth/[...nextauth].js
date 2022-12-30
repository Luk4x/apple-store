import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { SanityAdapter } from 'next-auth-sanity';
import { sanityClient } from '../../../sanity';

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET,
    adapter: SanityAdapter(sanityClient)
});
