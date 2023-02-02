import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Currency from '../components/Currency';

import {
    HiOutlineCheck,
    HiOutlineChevronDown,
    HiOutlineChevronUp,
    HiOutlineShoppingCart
} from 'react-icons/hi2';

import Button from '../components/Button';
import { fetchLineProducts } from '../utils/fetchLineProducts';
import { useSession } from 'next-auth/react';
import { SiApple } from 'react-icons/si';

import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

interface Props {
    products: StripeProduct[];
    trackingNumber: string;
}

export default function Success({ products, trackingNumber }: Props) {
    const { data: session } = useSession();
    const router = useRouter();
    const { session_id } = router.query;

    const [mounted, setMounted] = useState(false);
    const [showOrderSummary, setShowOrderSummary] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleShowOrderSummary = () => setShowOrderSummary(!showOrderSummary);

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });
    const showOrderSummaryCondition = isTabletOrMobile ? showOrderSummary : true;

    const subtotal = products.reduce(
        (acc, product) => acc + product.price.unit_amount / 100,
        0
    );

    return (
        <div>
            <Head>
                <title>
                    Apple Store | Obrigado{' '}
                    {session ? session.user?.name?.split(' ')[0] : 'Convidado'}
                </title>
            </Head>
            <header className="mx-auto max-w-xl">
                <Link href="/">
                    <SiApple className="relative m-4 cursor-pointer text-6xl opacity-75 transition hover:opacity-100 lg:hidden" />
                </Link>
            </header>
            <main className="grid grid-cols-1 lg:grid-cols-9">
                <section className="order-2 mx-auto max-w-xl pb-12 lg:col-span-5 lg:mx-0 lg:max-w-none lg:pr-16 lg:pt-16 xl:pl-16 2xl:pl-44">
                    <Link href="/">
                        <SiApple className="relative ml-14 hidden cursor-pointer text-5xl opacity-75 transition hover:opacity-100 lg:inline-flex" />
                    </Link>
                    <div className="my-8 ml-4 flex space-x-4 lg:ml-14 xl:ml-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-black">
                            <HiOutlineCheck className="h-8 w-8" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-600">
                                Pedido #{session_id?.slice(-8)}
                            </p>
                            <h4 className="text-lg">
                                Obrigado{' '}
                                {session
                                    ? session.user?.name?.split(' ')[0]
                                    : 'Convidado'}
                                !
                            </h4>
                        </div>
                    </div>

                    <div className="mx-4 divide-y divide-gray-300 rounded-md border border-gray-300 p-4 lg:ml-14">
                        <div className="space-y-2 pb-3">
                            <p>Seu pedido está confirmado.</p>
                            <p className="text-sm text-gray-600">
                                Nós aceitamos seu pedido e estamos preparando-o. Volte a
                                essa página mais tarde para conferir atualizações sobre o
                                envio.
                            </p>
                        </div>
                        <div className="pt-3 text-sm">
                            <p className="font-medium text-gray-600">
                                Número de rastreamento:
                            </p>
                            <p>{trackingNumber}</p>
                        </div>
                    </div>
                    <div className="my-4 mx-4 space-y-4 rounded-md border border-gray-300 p-4 lg:ml-14">
                        <p>Atualizações do pedido:</p>
                        <p className="text-sm text-gray-600">
                            Você receberá as atualizações do envio do pedido por email.
                        </p>
                    </div>
                    <div className="mx-4 flex flex-col items-center justify-between text-sm lg:ml-14 lg:flex-row">
                        <p className="hidden lg:inline">
                            Precisando de ajuda? Fale conosco.
                        </p>
                        {mounted && (
                            <Button
                                title="Continuar Comprando"
                                onClick={() => router.push('/')}
                                width={isTabletOrMobile ? 'w-full' : undefined}
                                padding="py-4"
                            />
                        )}
                    </div>
                </section>
                {mounted && (
                    <OverlayScrollbarsComponent
                        defer
                        element="section"
                        options={{ scrollbars: { autoHide: 'scroll' } }}
                        className="border-y border-l border-gray-300 bg-[#fafafa] lg:order-2 lg:col-span-4 lg:h-screen lg:border-t-0"
                    >
                        <div
                            className={`w-full ${
                                showOrderSummaryCondition && 'border-b'
                            } border-gray-300 text-sm lg:hidden`}
                        >
                            <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-6">
                                <button
                                    onClick={handleShowOrderSummary}
                                    className="flex items-center space-x-2"
                                >
                                    <HiOutlineShoppingCart className="h-6 w-6" />
                                    <p>Resumo do pedido</p>
                                    {showOrderSummaryCondition ? (
                                        <HiOutlineChevronDown className="h-4 w-4" />
                                    ) : (
                                        <HiOutlineChevronUp className="h-4 w-4" />
                                    )}
                                </button>
                                <p className="text-xl font-medium text-black">
                                    <Currency value={subtotal} />
                                </p>
                            </div>
                        </div>
                        {showOrderSummaryCondition && (
                            <div className="mx-auto max-w-xl divide-y border-t-gray-300 px-4 py-4 lg:mx-0 lg:max-w-lg lg:px-10 lg:py-16">
                                <div className="space-y-4 pb-4">
                                    {products.map(product => (
                                        <div
                                            key={product.id}
                                            className="flex items-center space-x-4 text-sm font-medium"
                                        >
                                            <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-gray-300 bg-[#f1f1f1] text-xs text-white">
                                                <div className="relative h-7 w-7 animate-bounce rounded-md">
                                                    <SiApple className="text-3xl text-black" />
                                                </div>
                                                <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs">
                                                    {product.quantity}
                                                </div>
                                            </div>
                                            <p className="flex-1">
                                                {product.description}
                                            </p>
                                            <p>
                                                <Currency
                                                    value={
                                                        product.price.unit_amount / 100
                                                    }
                                                />
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-1 py-4">
                                    <div className="flex justify-between text-sm">
                                        <p className="text-gray-500">Subtotal</p>
                                        <p className="font-medium">
                                            <Currency value={subtotal} />
                                        </p>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <p className="text-gray-500">Desconto</p>
                                        <p className="font-medium">
                                            <Currency value={0} />
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <p>Total</p>
                                    <p className="flex items-center gap-x-2 text-xs text-gray-500">
                                        BRL
                                        <span className="text-xl font-medium text-black">
                                            <Currency value={subtotal} />
                                        </span>
                                    </p>
                                </div>
                            </div>
                        )}
                    </OverlayScrollbarsComponent>
                )}
            </main>
        </div>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
    const sessionId = query.session_id as string;
    const products = await fetchLineProducts(sessionId);

    const randomString = require('random-string');
    const trackingNumber = randomString({
        length: 11,
        numeric: true,
        letters: true,
        special: false
    });

    return {
        props: {
            products,
            trackingNumber
        }
    };
};
