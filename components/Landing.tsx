import Image from 'next/image';
import Button from './Button';

export default function Landing() {
    return (
        <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
            <div className="space-y-8">
                <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
                    <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Alimentado
                    </span>
                    <span className="block">Pelo intelecto</span>
                    <span className="block">Movido por valores</span>
                </h1>
                <div className="space-x-8">
                    <Button title="Buy Now" />
                    <a
                        href="#"
                        className="link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                </div>
            </div>

            <div className="relative hidden h-[450px] w-[400px] transition-all duration-500 md:inline lg:h-[650px] lg:w-[600px]">
                <Image
                    src="/iphone.png"
                    layout="fill"
                    objectFit="contain"
                    alt="iPhone Image"
                />
            </div>
        </section>
    );
}
