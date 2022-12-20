import type { NextPage } from 'next';
import Header from '../components/Header';
import Landing from '../components/Landing';

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <main className="relative h-[200vh] bg-[#e7ecee]">
                <Landing />
            </main>
        </div>
    );
};

export default Home;
