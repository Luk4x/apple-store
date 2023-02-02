import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';

import {
    HiOutlineMagnifyingGlass,
    HiOutlineShoppingBag,
    HiOutlineUser,
    HiOutlineBars3,
    HiOutlineBars3BottomLeft
} from 'react-icons/hi2';
import { SiApple } from 'react-icons/si';
import { Popover, Transition } from '@headlessui/react';

import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Header() {
    const { data: session } = useSession();
    const products = useSelector(selectCartProducts);

    const [blur, setBlur] = useState(false);

    const handleMobileMenu = async () => {
        setBlur(!blur);

        const viewport = document.querySelector('.os-viewport');
        viewport?.scroll(0, 0);
        // await scroll top to hide scroll based on: scroll position divided by 2
        if (viewport !== null) {
            setTimeout(() => {
                viewport?.classList.toggle('hide-scroll');
            }, 100 + viewport?.scrollTop / 2);
        }
    };

    return (
        <header className="sticky top-0 z-30 flex w-full items-center justify-between border-b-2 border-gray-500 bg-[#e7ecee] p-4">
            <div
                className={`flex items-center justify-center ${
                    blur ? '-z-10 after:block' : 'gap-4 after:hidden md:w-1/5'
                } after:absolute after:left-0 after:top-0 after:-z-20 after:h-screen after:w-screen after:backdrop-blur-[8px] after:content-['']`}
            >
                <Popover className="relative md:hidden">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className="translate-y-1 text-2xl outline-none"
                                onClick={handleMobileMenu}
                            >
                                {open ? <HiOutlineBars3BottomLeft /> : <HiOutlineBars3 />}
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-500"
                                enterFrom="opacity-0 -translate-x-2"
                                enterTo="opacity-100 -translate-x-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 -translate-x-0"
                                leaveTo="opacity-0 -translate-x-2"
                            >
                                <Popover.Panel className="absolute -top-5 -z-10 h-screen after:absolute after:left-0 after:top-0 after:-z-20 after:h-screen after:w-screen after:content-['']">
                                    <div className="text-md absolute -left-7 top-[2px] -z-10 ml-2 flex h-screen w-[250px] flex-col gap-2 bg-[#e7ecee] p-6 pt-16 text-center shadow-[0_0_100px_100px_rgba(0,0,0,0.2)] before:absolute before:left-0 before:-bottom-2 before:h-[20px] before:w-[250px] before:bg-[#e7ecee] before:content-['']">
                                        <Link href="/" className="mobileHeaderLink">
                                            Outros Produtos
                                        </Link>
                                        <Link href="/" className="mobileHeaderLink">
                                            Explore
                                        </Link>
                                        <Link href="/" className="mobileHeaderLink">
                                            Suporte
                                        </Link>
                                        <Link href="/" className="mobileHeaderLink">
                                            Só na Apple
                                        </Link>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Link
                    href="/"
                    className={`${
                        blur ? 'translate-x-[150px] text-2xl' : 'text-4xl'
                    } cursor-pointer opacity-75 transition duration-[450ms] hover:opacity-100`}
                    onClick={() => blur && handleMobileMenu()}
                >
                    <SiApple />
                </Link>
            </div>
            <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
                <Link href="/" className="headerLink">
                    Outros Produtos
                </Link>
                <Link href="/" className="headerLink">
                    Explore
                </Link>
                <Link href="/" className="headerLink">
                    Suporte
                </Link>
                <Link href="/" className="headerLink">
                    Só na Apple
                </Link>
            </div>
            <div className="-z-30 flex items-center justify-center gap-x-4 md:w-1/5">
                <HiOutlineMagnifyingGlass className="headerIcon" />
                <Link href="/checkout">
                    <div className="relative cursor-pointer">
                        {products.length > 0 && (
                            <span
                                className="absolute -right-2 -top-2 z-50 flex h-5 w-5 items-center justify-center 
                            rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px] text-white"
                            >
                                {products.length}
                            </span>
                        )}
                        <HiOutlineShoppingBag className="headerIcon" />
                    </div>
                </Link>
                <div className="relative">
                    {session ? (
                        <div className="tooltip before:content-['LogOut']">
                            <Image
                                src={session.user?.image || '/user-image.png'}
                                width={35}
                                height={35}
                                alt="User Image"
                                className=" cursor-pointer rounded-full object-contain "
                                onClick={() => signOut()}
                            />
                        </div>
                    ) : (
                        <div className="tooltip before:content-['LogIn']">
                            <HiOutlineUser
                                className="headerIcon "
                                onClick={() => signIn()}
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
