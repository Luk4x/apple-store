import Image from 'next/image';
import Link from 'next/link';

import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingBag,
    HiOutlineUser
} from 'react-icons/hi2';
import { SiApple } from 'react-icons/si';
import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();
    const products = useSelector(selectCartProducts);

    return (
        <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4">
            <div className="flex items-center justify-center md:w-1/5">
                <Link href="/">
                    <SiApple className="cursor-pointer text-4xl opacity-75 transition hover:opacity-100" />
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
                <HiOutlineMagnifyingGlass className="headerIcon" />
                <Link href="/checkout">
                    <div className="relative cursor-pointer">
                        {products.length > 0 && (
                            <span
                                className="absolute -right-1 -top-1 z-50 flex h-4 w-4 items-center justify-center 
                            rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-xs text-white"
                            >
                                {products.length}
                            </span>
                        )}
                        <HiOutlineShoppingBag className="headerIcon" />
                    </div>
                </Link>
                {session ? (
                    <Image
                        src={session.user?.image || '/user-image.png'}
                        width={35}
                        height={35}
                        alt="User Image"
                        className="cursor-pointer rounded-full"
                        onClick={() => signOut()}
                    />
                ) : (
                    <HiOutlineUser className="headerIcon" onClick={() => signIn()} />
                )}
            </div>
        </header>
    );
}
