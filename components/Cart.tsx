import Link from 'next/link';
import { useScrollYPosition } from 'react-use-scroll-position';
import { HiOutlineShoppingBag } from 'react-icons/hi2';

import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';

export default function Cart() {
    const products = useSelector(selectCartProducts);
    const scrollY = useScrollYPosition();

    if (products.length === 0 || scrollY < 400) return null;

    return (
        <Link href="/checkout">
            <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
                {products.length > 0 && (
                    <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white">
                        {products.length}
                    </span>
                )}
                <HiOutlineShoppingBag className="headerIcon z-10 h-8 w-8" />
                <div className="absolute h-full w-full animate-[ping_2s_ease-in-out_infinite] rounded-full bg-gray-300 opacity-75 duration-1000" />
            </div>
        </Link>
    );
}
