import Head from 'next/head';
import { useRouter } from 'next/router';

import Header from '../components/Header';
import Button from '../components/Button';

import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';
import { useEffect, useState } from 'react';
import CheckoutProduct from '../components/CheckoutProduct';

export default function Checkout() {
    const products = useSelector(selectCartProducts);
    const router = useRouter();
    const [groupedProductsInCart, setGroupedProductsInCart] = useState(
        {} as { [key: string]: Product[] }
    );

    useEffect(() => {
        const groupedProducts = products.reduce((results, product) => {
            (results[product._id] = results[product._id] || []).push(product);
            return results;
        }, {} as { [key: string]: Product[] });

        setGroupedProductsInCart(groupedProducts);
    }, [products]);

    return (
        <div className="min-h-screen overflow-hidden bg-[#e7ecee]">
            <Head>
                <title>Cart - Apple Store</title>
            </Head>

            <Header />
            <main className="mx-auto max-w-5xl pb-24">
                <div className="px-5">
                    <h2 className="lg: my-4 text-3xl font-semibold lg:text-4xl">
                        {products.length > 0
                            ? 'Revise seu Carrinho!'
                            : 'Seu Carrinho está vazio!'}
                    </h2>
                    <p className="my-4">Entregas e devoluções são gratuitas.</p>
                    {products.length === 0 && (
                        <Button
                            title="Continuar Comprando"
                            onClick={() => router.push('/')}
                        />
                    )}
                </div>
                {products.length > 0 && (
                    <div className="mx-5 md:mx-8">
                        {Object.entries(groupedProductsInCart).map(([key, products]) => (
                            <CheckoutProduct key={key} products={products} id={key} />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
