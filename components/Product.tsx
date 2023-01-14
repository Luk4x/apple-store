import Image from 'next/image';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { toast } from 'react-hot-toast';

interface Props {
    product: Product;
}

export default function Product({ product }: Props) {
    const dispatch = useDispatch();
    const addProductToCart = (): void => {
        dispatch(addToCart(product));

        toast.success(`${product.title} adicionado ao Carrinho!`, {
            position: 'bottom-center'
        });
    };

    return (
        <div className="flex h-[400px] w-[300px] select-none flex-col justify-around space-y-3 rounded-xl bg-[#35383c] p-8 md:h-[500px] md:w-[400px] md:p-10">
            <div className="relative h-64 w-full md:h-72">
                <Image
                    src={urlFor(product.image[0]).url()}
                    alt={product.title}
                    fill
                    sizes="100%"
                    className="object-contain"
                />
            </div>
            <div className="flex items-center justify-center gap-3">
                <div className="flex flex-1 items-center justify-between space-x-3">
                    <div className="space-y-2 text-xl text-gray-100 md:text-2xl">
                        <p className="mb-2 w-[180px] border-b-2 border-pink-500 pb-2 text-white md:w-[240px]">
                            {product.title}
                        </p>
                        <Currency quantity={product.price} currency="BRL" />
                    </div>
                </div>
                <div
                    className="relative flex h-16 w-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-500 hover:translate-y-1 md:h-[70px] md:w-[70px]"
                    onClick={addProductToCart}
                >
                    <HiOutlineShoppingCart className="z-10 h-8 w-8 text-white" />
                </div>
            </div>
        </div>
    );
}
