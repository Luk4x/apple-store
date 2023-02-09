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
import { BsGridFill, BsApple } from 'react-icons/bs';
import {
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaTelegramPlane,
    FaInstagram,
    FaDiscord
} from 'react-icons/fa';
import { Popover, Menu, Transition } from '@headlessui/react';
import toast from 'react-hot-toast';

import { useSelector } from 'react-redux';
import { selectCartProducts } from '../redux/cartSlice';
import { signIn, signOut, useSession } from 'next-auth/react';
import { IoShareSocial } from 'react-icons/io5';

export default function Header() {
    const { data: session } = useSession();
    const products = useSelector(selectCartProducts);

    const [blur, setBlur] = useState(false);

    const handleMobileMenu = async () => {
        setBlur(!blur);

        const viewport = document.querySelector('.os-viewport');
        viewport?.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
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
                <Link href="/" onClick={() => blur && handleMobileMenu()}>
                    <BsApple
                        className={`${
                            blur && 'translate-x-[164px]'
                        } headerIcon cursor-pointer opacity-75 transition duration-[450ms] hover:opacity-100`}
                    />
                </Link>
                <Menu as="div" className="relative">
                    <Menu.Button>
                        <BsGridFill className="headerIcon hidden translate-y-[2px] md:inline" />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-500"
                        enterFrom="opacity-0 -translate-y-2"
                        enterTo="opacity-100 -translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 -translate-y-0"
                        leaveTo="opacity-0 -translate-y-2"
                    >
                        <Menu.Items className="menuList">
                            <div className="w-2/4 space-y-1">
                                <Menu.Item>
                                    <a
                                        href="https://www.linkedin.com/in/lucasmacielf/"
                                        target="_blank"
                                    >
                                        <FaLinkedinIn className="text-[#0077B5]" />
                                        <p>LinkedIn</p>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="https://github.com/Luk4x/" target="_blank">
                                        <FaGithub className="text-[#F2F2F2]" />
                                        <p>Github</p>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a
                                        href="https://wa.me/5522996112570?text=Yo%20Lucas,%20vim%20pela%20Apple%20Store."
                                        target="_blank"
                                    >
                                        <FaWhatsapp className="text-[#45c655]" />
                                        <p>WhatsApp</p>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a href="https://t.me/lu_k4x" target="_blank">
                                        <FaTelegramPlane className="text-[#25a3e1]" />
                                        <p>Telegram</p>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a
                                        href="https://www.instagram.com/lu_k4x/"
                                        target="_blank"
                                    >
                                        <FaInstagram className="text-[#E4405F]" />
                                        <p>Instagram</p>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <button
                                        onClick={() => {
                                            navigator.clipboard.writeText('Luk4x#5068');
                                            toast.success('Discord copiado!', {
                                                position: 'bottom-center'
                                            });
                                        }}
                                    >
                                        <FaDiscord className="text-[#545fef]" />
                                        <p>Discord</p>
                                    </button>
                                </Menu.Item>
                            </div>
                            <IoShareSocial className="h-24 w-24 text-violet-600" />
                        </Menu.Items>
                    </Transition>
                </Menu>
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
                                width={36}
                                height={36}
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
