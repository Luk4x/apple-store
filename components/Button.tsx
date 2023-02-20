import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoFlashSharp } from 'react-icons/io5';

interface Props {
    title: string;
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

export default function Button({
    title,
    onClick,
    width,
    loading,
    padding,
    noIcon
}: Props) {
    return (
        <button
            className={`ease group relative z-20 box-border inline-flex ${
                width ? width : 'w-auto'
            } ${
                padding ? padding : 'p-4'
            } cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-8 py-3 font-bold text-white transition-all duration-200 focus:outline-none`}
            onClick={onClick}
        >
            <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0" />
            <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0" />

            <span className="relative z-20 flex items-center font-semibold">
                {noIcon && <IoFlashSharp className="relative -left-3 h-5 w-5" />}
                {loading ? (
                    <AiOutlineLoading3Quarters className="h-6 w-6 animate-spin" />
                ) : (
                    title
                )}
            </span>
        </button>
    );
}
