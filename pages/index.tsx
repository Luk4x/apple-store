import type { GetServerSideProps } from 'next';
import Image from 'next/image';

import { Tab } from '@headlessui/react';

import Header from '../components/Header';
import Button from '../components/Button';
import Product from '../components/Product';

import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import Cart from '../components/Cart';

import { getSession } from 'next-auth/react';
import type { Session } from 'next-auth';

interface Props {
    categories: Category[];
    products: Product[];
    session: Session | null;
}

export default function Home({ categories, products, session }: Props) {
    const showProducts = (categoryIndex: number) => {
        return products
            .filter(product => product.category._ref === categories[categoryIndex]._id)
            .map(product => <Product product={product} key={product._id} />);
    };

    return (
        <div>
            <Header />
            <main className="relative h-[200vh] bg-[#E7ECEE]">
                <section className="sticky top-20 mx-auto flex h-screen max-w-[1350px] flex-col-reverse items-center justify-end gap-24 overflow-hidden px-8 md:flex-row md:justify-between">
                    <div className="relative space-y-8">
                        <h1 className="z-10 space-y-1 text-center text-4xl font-semibold xs:space-y-3 xs:text-5xl xs:tracking-wide md:text-left lg:text-6xl xl:text-7xl">
                            <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mix-blend-difference">
                                Alimentado
                            </span>
                            <span className="block mix-blend-overlay">
                                Pelo intelecto
                            </span>
                            <span className="block mix-blend-luminosity">
                                Movido por
                                <br />
                                valores
                            </span>
                        </h1>
                        <div className="z-10 flex items-center justify-center space-x-4 xs:space-x-8 md:justify-start">
                            <a href="#shop">
                                <Button title="Comprar" />
                            </a>
                            <a
                                href="#"
                                className="link mix-blend-luminosity"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Saiba Mais
                            </a>
                        </div>
                        <div
                            className="absolute right-[50%] -top-10 -z-10 h-96 w-96 translate-x-[50%] bg-gradient-to-r from-pink-500 to-violet-500 md:-right-[80px] md:-top-[60px] md:translate-x-0 md:rotate-90 lg:-right-[160px] lg:-top-[110px] lg:h-[500px] lg:w-[500px] xl:-right-[100px] xl:-top-[56px]"
                            style={{
                                clipPath:
                                    'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                            }}
                        />
                    </div>
                    <div className="relative inline h-[400px] w-[306px] md:h-[580px] md:w-[380px] xl:h-[680px] xl:w-[480px]">
                        <Image
                            src="/iphone-image-1.png"
                            fill
                            sizes="100%"
                            className="animate-rocket object-contain"
                            alt="iPhone Image"
                        />
                    </div>
                </section>
            </main>
            <section className="relative z-40 -mt-[100vh] min-h-screen rounded-t-[52px] bg-[#1b1b1b]">
                <div className="space-y-10 py-16" id="shop">
                    <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
                        Nossos Produtos
                    </h1>
                    <Tab.Group>
                        <Tab.List className="flex justify-center overflow-x-scroll">
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
                                    {category.title === 'Apple Watch'
                                        ? 'Watches'
                                        : category.title}
                                </Tab>
                            ))}
                        </Tab.List>
                        <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                            {[0, 1, 2, 3].map(categoryIndex => (
                                <Tab.Panel className="tabPanel" key={categoryIndex}>
                                    {showProducts(categoryIndex)}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>
            <Cart />
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async context => {
    const [categories, products, session] = await Promise.all([
        fetchCategories(),
        fetchProducts(),
        getSession(context)
    ]);

    return {
        props: {
            categories,
            products,
            session
        }
    };
};
