import Image from 'next/image';
import { urlFor } from '../sanity';
import Currency from 'react-currency-formatter';

import { HiChevronDown } from 'react-icons/hi2';
import Button from './Button';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartSlice';
import { toast } from 'react-hot-toast';

interface Props {
    products: Product[];
    id: string;
}

export default function CheckoutProduct({ products, id }: Props) {
    const dispatch = useDispatch();
    const removeProductFromCart = () => {
        dispatch(removeFromCart({ id }));

        toast.error(`${products[0].title} removido do Carrinho!`, {
            position: 'bottom-center'
        });
    };

    return (
        <div className="flex  flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
            <div className="relative h-44 w-44">
                <Image
                    src={urlFor(products[0].image[0]).url()}
                    alt={products[0].title}
                    fill
                    sizes="100%"
                    className="object-contain"
                />
            </div>
            <div className="flex flex-1 items-end lg:items-center">
                <div className="flex-1 space-y-4">
                    <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
                        <h4 className="font-semibold lg:w-96">{products[0].title}</h4>
                        <p className="flex items-center gap-x-1 font-semibold">
                            {products.length}
                            <HiChevronDown className="h-6 w-6 text-blue-500" />
                        </p>
                    </div>
                    <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
                        Detalhes do produto
                        <HiChevronDown className="h-6 w-6" />
                    </p>
                </div>
                <div className="flex flex-col items-end space-x-4">
                    <h4 className="text-xl font-semibold lg:text-2xl">
                        <Currency
                            quantity={products.reduce(
                                (total, product) => total + product.price,
                                0
                            )}
                            currency="BRL"
                        />
                    </h4>
                    <Button title="Remove" onClick={removeProductFromCart} />
                </div>
            </div>
        </div>
    );
}
