import Image from 'next/image';
import Button from './Button';

export default function Landing() {
    return (
        <section className="sticky top-20 mx-auto flex h-screen max-w-[1350px] flex-col-reverse items-center justify-end gap-24 px-8 md:flex-row md:justify-between">
            <div className="space-y-8">
                <h1 className="space-y-1 text-center text-4xl font-semibold xs:space-y-3 xs:text-5xl xs:tracking-wide md:text-left lg:text-6xl xl:text-7xl">
                    <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                        Alimentado
                    </span>
                    <span className="block">Pelo intelecto</span>
                    <span className="block">Movido por valores</span>
                </h1>
                <div className="md: flex items-center justify-center space-x-4 xs:space-x-8 md:justify-start">
                    <Button title="Comprar" />
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

            <div className="relative inline h-[400px] w-[306px] animate-rocket md:h-[580px] md:w-[380px] xl:h-[680px] xl:w-[480px]">
                <Image
                    src="/iphone-image-1.png"
                    layout="fill"
                    objectFit="contain"
                    alt="iPhone Image"
                />
            </div>
        </section>
    );
}
