import type { GetServerSideProps } from 'next';

import { Tab } from '@headlessui/react';

import Header from '../components/Header';
import Landing from '../components/Landing';
import { fetchCategories } from '../utils/fetchCategories';

interface Props {
    categories: Category[];
}

const Home = ({ categories }: Props) => {
    console.log(categories);

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
                        <Tab.List className="flex justify-center">
                            {categories.map(category => (
                                <Tab
                                    key={category._id}
                                    id={category._id}
                                    className={({ selected }) =>
                                        `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-6 md:text-base ${
                                            selected
                                                ? 'borderGradient bg-[#35383C] text-white'
                                                : 'border-b-2 border-[#35383c] text-[#747474]'
                                        }`
                                    }
                                >
                                    {category.title}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4"></Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
        </div>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const categories = await fetchCategories();

    return {
        props: {
            categories
        }
    };
};
