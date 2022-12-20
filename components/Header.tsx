import Image from 'next/image';
import Link from 'next/link';
import AppleLogo from '../assets/apple-logo.png';

export default function Header() {
    return (
        <header className="sticky top-0 z-30 flex w-full items-center justify-between p-4 bg-[#e7ecee]">
            <Image
                src={AppleLogo}
                objectFit="contain"
                width="20"
                height="40"
                alt="Apple Logo Image"
                style={{ cursor: 'pointer', opacity: 0.9 }}
            />
        </header>
    );
}
