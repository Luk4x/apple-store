import Image from 'next/image';
import Link from 'next/link';

import { SearchIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/outline';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';

export default function Header() {
    const session = false;
    const products = useSelector(selectCartProducts);

    return (
        <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
            <div className="flex items-center justify-center md:w-1/5">
                <Link href="/">
                    <Image
                        src="/apple-logo.png"
                        width={25}
                        height={50}
                        alt="Apple Logo Image"
                        className="cursor-pointer opacity-75 transition hover:opacity-100"
                    />
                </Link>
            </div>
            <div className="hidden flex-1  items-center justify-center space-x-8 md:flex">
                <Link href="/" className="headerLink">
                    Produto
                </Link>
                <Link href="/" className="headerLink">
                    Explore
                </Link>
                <Link href="/" className="headerLink">
                    Suporte
                </Link>
                <Link href="/" className="headerLink">
                    Negócios
                </Link>
            </div>
            <div className="flex items-center justify-center gap-x-4 md:w-1/5">
                <SearchIcon className="headerIcon" />
                <Link href="/checkout">
                    <div className="relative cursor-pointer">
                        <span
                            className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center 
                            rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-xs text-white"
                        >
                            {products.length}
                        </span>
                        <ShoppingBagIcon className="headerIcon" />
                    </div>
                </Link>
                {session ? (
                    <Image
                        src="/apple-logo.png"
                        width={30}
                        height={30}
                        alt="User Image"
                    />
                ) : (
                    <UserIcon className="headerIcon" />
                )}
            </div>
        </header>
    );
}
