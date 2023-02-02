import Link from 'next/link';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';

export default function Cart() {
    const products = useSelector(selectCartProducts);

    return products.length === 0 ? (
        <div className="h-16" />
    ) : (
        <div
            className="sticky z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 "
            style={{ left: 'calc(100vw - 100px)', top: 'calc(100vh - 100px)' }}
        >
            <Link href="/checkout" className="rounded-full p-4">
                <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                    {products.length}
                </span>
                <HiOutlineShoppingBag className="headerIcon z-10 h-8 w-8" />
            </Link>
            <div className="absolute -z-10 h-full w-full animate-[ping_2s_ease-in-out_infinite] rounded-full bg-gray-300 opacity-75 duration-1000" />
        </div>
    );
}
