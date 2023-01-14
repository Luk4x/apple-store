import Image from 'next/image';
import Button from './Button';

export default function Landing() {
    return (
        <section className="sticky top-20 mx-auto flex h-screen max-w-[1350px] flex-col-reverse items-center justify-end gap-24 overflow-hidden px-8 md:flex-row md:justify-between">
            <div className="relative space-y-8">
                <h1 className="z-10 space-y-1 text-center text-4xl font-semibold xs:space-y-3 xs:text-5xl xs:tracking-wide md:text-left lg:text-6xl xl:text-7xl">
                    <span className="block bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent mix-blend-difference">
                        Alimentado
                    </span>
                    <span className="block mix-blend-overlay">Pelo intelecto</span>
                    <span className="block mix-blend-luminosity">
                        Movido por
                        <br />
                        valores
                    </span>
                </h1>
                <div className="z-10 flex items-center justify-center space-x-4 xs:space-x-8 md:justify-start">
                    <a href="#shop">
                        <Button title="Comprar" />
                    </a>
                    <a
                        href="#"
                        className="link mix-blend-luminosity"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Saiba Mais
                    </a>
                </div>
                <div
                    className="absolute right-[50%] -top-10 -z-10 h-96 w-96 translate-x-[50%] bg-gradient-to-r from-pink-500 to-violet-500 md:-right-[80px] md:-top-[60px] md:translate-x-0 md:rotate-90 lg:-right-[160px] lg:-top-[110px] lg:h-[500px] lg:w-[500px] xl:-right-[100px] xl:-top-[56px]"
                    style={{
                        clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)'
                    }}
                />
            </div>
            <div className="relative inline h-[400px] w-[306px] md:h-[580px] md:w-[380px] xl:h-[680px] xl:w-[480px]">
                <Image
                    src="/iphone-image-1.png"
                    fill
                    sizes="100%"
                    className="animate-rocket object-contain"
                    alt="iPhone Image"
                />
            </div>
        </section>
    );
}
