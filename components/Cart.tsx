import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';

interface CartProps {
    scrollPosition: number;
}

export default function Cart({ scrollPosition }: CartProps) {
    const products = useSelector(selectCartProducts);

    return products.length === 0 || scrollPosition < 500 ? null : (
        <Link href="/checkout">
            <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
                <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                    {products.length}
                </span>
                <HiOutlineShoppingBag className="headerIcon z-10 h-8 w-8" />
                <div className="absolute h-full w-full animate-[ping_2s_ease-in-out_infinite] rounded-full bg-gray-300 opacity-75 duration-1000" />
            </div>
        </Link>
    );
}
