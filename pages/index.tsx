import type { GetServerSideProps, NextPage } from 'next';
import Header from '../components/Header';
import Landing from '../components/Landing';
import { Tab } from '@headlessui/react';

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <main className="relative h-[200vh] bg-[#e7ecee]">
                <Landing />
            </main>
            <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1b1b1b]">
                <div className="space-y-10 py-16">
                    <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
                        Novas Promoções
                    </h1>
                    <Tab.Group>
                        <Tab.List className="flex justify-center"></Tab.List>
                        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4"></Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
    // const categories = fetchCategories()

    return {
        props: {}
    };
};
